'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { addDoc, collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { initializeAdmin } from '@/firebase/server-init';
import { blogPostSchema, type BlogPostFormState } from './BlogForm';
import { headers } from 'next/headers';
import { decode } from 'jsonwebtoken';

// Helper to get the current user's UID on the server
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

export async function saveBlogPostAction(
  prevState: BlogPostFormState,
  formData: FormData
): Promise<BlogPostFormState> {
  const { firestore } = await initializeAdmin();
  const userId = await getCurrentUserId();
  
  if (!userId) {
    return {
      message: 'You must be logged in to create a post.',
      success: false,
    };
  }

  const validatedFields = blogPostSchema.safeParse({
    id: formData.get('id') || undefined,
    title: formData.get('title'),
    destination: formData.get('destination'),
    content: formData.get('content'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      success: false,
    };
  }

  const { id, ...postData } = validatedFields.data;
  
  // Generate a URL-friendly slug from the title
  const slug = postData.title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');


  try {
    const userBlogsCollection = collection(firestore, 'users', userId, 'travelBlogs');
    
    if (id) {
      // Update existing document
      const postRef = doc(userBlogsCollection, id);
      await setDoc(postRef, {
        ...postData,
        slug, // Update slug in case title changes
        authorId: userId,
        dateModified: serverTimestamp(),
      }, { merge: true });
    } else {
      // Create new document
      await addDoc(userBlogsCollection, {
        ...postData,
        slug,
        authorId: userId,
        datePublished: serverTimestamp(),
      });
    }
  } catch (e: any) {
    return {
      message: e.message || 'An unexpected error occurred.',
      success: false,
    };
  }

  revalidatePath('/admin');
  revalidatePath('/blog');
  revalidatePath(`/blog/${slug}`);
  redirect('/admin');
}
