'use client';

import { useActionState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { type TravelBlog } from '@/lib/types';
import { saveBlogPostAction } from './actions';
import { SubmitButton } from '../auth/SubmitButton';

export const blogPostSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(3, 'Title must be at least 3 characters.'),
  destination: z.string().min(3, 'Destination must be at least 3 characters.'),
  content: z.string().min(10, 'Content must be at least 10 characters.'),
});

export type BlogPostFormState = {
  message: string | null;
  errors?: {
    title?: string[];
    destination?: string[];
    content?: string[];
  };
  success: boolean;
};

interface BlogFormProps {
  post?: TravelBlog;
}

export function BlogForm({ post }: BlogFormProps) {
  const [state, dispatch] = useActionState(saveBlogPostAction, {
    message: null,
    errors: {},
    success: false,
  });

  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(blogPostSchema),
    defaultValues: {
      id: post?.id,
      title: post?.title || '',
      destination: post?.destination || '',
      content: post?.content || '',
    },
  });

  return (
    <form action={dispatch} className="space-y-6">
      {post && <input type="hidden" name="id" value={post.id} />}
      <div className="space-y-2">
        <Label htmlFor="title">Post Title</Label>
        <Input
          id="title"
          {...register('title')}
          placeholder="e.g., A Wonderful Week in Rome"
        />
        {errors.title && (
          <p className="text-sm text-destructive">{errors.title.message}</p>
        )}
        {state.errors?.title && (
          <p className="text-sm text-destructive">{state.errors.title[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Destination</Label>
        <Input
          id="destination"
          {...register('destination')}
          placeholder="e.g., Rome, Italy"
        />
        {errors.destination && (
          <p className="text-sm text-destructive">
            {errors.destination.message}
          </p>
        )}
        {state.errors?.destination && (
          <p className="text-sm text-destructive">{state.errors.destination[0]}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Blog Content</Label>
        <Textarea
          id="content"
          {...register('content')}
          placeholder="Write your amazing travel story here. You can use Markdown for formatting."
          rows={15}
        />
        {errors.content && (
          <p className="text-sm text-destructive">{errors.content.message}</p>
        )}
        {state.errors?.content && (
          <p className="text-sm text-destructive">{state.errors.content[0]}</p>
        )}
      </div>

      <SubmitButton buttonText={post ? 'Update Post' : 'Create Post'} />

       {state.message && (
        <Alert variant={state.success ? 'default' : 'destructive'} className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{state.success ? 'Success' : 'Error'}</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
    </form>
  );
}
