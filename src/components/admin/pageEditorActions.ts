'use server';

import { revalidatePath } from 'next/cache';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { initializeAdmin } from '@/firebase/server-init';
import { z } from 'zod';
import { headers } from 'next/headers';
import { decode } from 'jsonwebtoken';

async function getCurrentUserId() {
    const authHeader = headers().get('Authorization');
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        try {
            const decodedToken = decode(token);
            if (decodedToken && typeof decodedToken !== 'string') {
                return decodedToken.user_id;
            }
        } catch (error) {
            console.error("Error decoding token:", error);
            return null;
        }
    }
    return null;
}

const pageContentSchema = z.object({
  pageId: z.string(),
  htmlContent: z.string().min(10, 'HTML content must be at least 10 characters.'),
});

export type PageEditorState = {
  message: string | null;
  errors?: {
    htmlContent?: string[];
  };
  success: boolean;
};

export async function savePageContentAction(
  prevState: PageEditorState,
  formData: FormData
): Promise<PageEditorState> {
  const { firestore } = await initializeAdmin();
  const userId = await getCurrentUserId();
  
  if (!userId) {
    return {
      message: 'You must be logged in to save content.',
      success: false,
    };
  }

  const validatedFields = pageContentSchema.safeParse({
    pageId: formData.get('pageId'),
    htmlContent: formData.get('htmlContent'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      success: false,
    };
  }
  
  const { pageId, htmlContent } = validatedFields.data;

  try {
    const pageRef = doc(firestore, 'pages', pageId);
    await setDoc(pageRef, {
        htmlContent,
        lastUpdated: serverTimestamp(),
        updatedBy: userId,
    }, { merge: true });

  } catch (e: any) {
    return {
      message: e.message || 'An unexpected error occurred while saving.',
      success: false,
    };
  }

  // Revalidate the homepage to show the new content
  revalidatePath('/');
  
  return {
      message: 'Homepage content saved successfully!',
      success: true,
  }
}
