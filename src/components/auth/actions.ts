'use server';

import { Auth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeAdmin } from '@/firebase/server-init';
import { z } from 'zod';
import { redirect } from 'next/navigation';

export type AuthState = {
  message: string | null;
  errors?: {
    email?: string[];
    password?: string[];
  };
  success: boolean;
};

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export async function authAction(
  auth: Auth,
  prevState: AuthState,
  formData: FormData
): Promise<AuthState> {
  await initializeAdmin();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const validatedFields = SignInSchema.safeParse({ email, password });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid email or password format.',
      success: false,
    };
  }
  try {
    await signInWithEmailAndPassword(
      auth,
      validatedFields.data.email,
      validatedFields.data.password
    );
  } catch (e: any) {
    let message = 'An unexpected error occurred during sign-in.';
    if (
      e.code === 'auth/user-not-found' ||
      e.code === 'auth/invalid-credential' ||
      e.code === 'auth/wrong-password'
    ) {
      message = 'Incorrect email or password. Please try again.';
    }
    console.error('Auth Action Error:', e.code, e.message);
    return { message, success: false };
  }

  redirect('/admin');
}
