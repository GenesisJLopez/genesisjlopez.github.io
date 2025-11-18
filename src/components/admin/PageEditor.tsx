'use client';

import { useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Loader2 } from 'lucide-react';
import { savePageContentAction } from './pageEditorActions';
import { SubmitButton } from '../auth/SubmitButton';
import { useFirestore, useDoc, useMemoFirebase } from '@/firebase';
import { doc } from 'firebase/firestore';

const pageContentSchema = z.object({
  pageId: z.string(),
  htmlContent: z.string().min(10, 'HTML content is required.'),
});

export type PageEditorState = {
  message: string | null;
  errors?: {
    htmlContent?: string[];
  };
  success: boolean;
};

interface PageEditorProps {
  pageId: string;
}

export function PageEditor({ pageId }: PageEditorProps) {
  const [state, dispatch] = useActionState(savePageContentAction, {
    message: null,
    errors: {},
    success: false,
  });

  const firestore = useFirestore();
  const pageDocRef = useMemoFirebase(() => {
    if (!firestore || !pageId) return null;
    return doc(firestore, 'pages', pageId);
  }, [firestore, pageId]);

  const { data: pageContent, isLoading } = useDoc(pageDocRef);
  
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(pageContentSchema),
    defaultValues: {
      pageId: pageId,
      htmlContent: '',
    },
  });

  useEffect(() => {
    if (pageContent) {
      setValue('htmlContent', pageContent.htmlContent);
    }
  }, [pageContent, setValue]);

  if (isLoading) {
    return (
        <div className="flex items-center justify-center p-8">
            <Loader2 className="mr-2 h-8 w-8 animate-spin" />
            <span>Loading editor...</span>
        </div>
    )
  }

  return (
    <form action={dispatch} className="space-y-6">
      <input type="hidden" name="pageId" value={pageId} />
      
      <div className="space-y-2">
        <Textarea
          id="htmlContent"
          {...register('htmlContent')}
          placeholder="Enter your HTML content here..."
          rows={25}
          className="font-code text-sm"
        />
        {errors.htmlContent && (
          <p className="text-sm text-destructive">{errors.htmlContent.message}</p>
        )}
        {state.errors?.htmlContent && (
          <p className="text-sm text-destructive">{state.errors.htmlContent[0]}</p>
        )}
      </div>

      <SubmitButton buttonText="Save Homepage" />

       {state.message && (
        <Alert variant={state.success ? 'default' : 'destructive'} className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{state.success ? 'Success' : 'Message'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
