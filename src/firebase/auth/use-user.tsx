'use client';

import { useState, useEffect } from 'react';
import { Auth, User, onAuthStateChanged } from 'firebase/auth';
import { useAuth } from '@/firebase/provider'; // Use the provider hook

/**
 * Interface for the return value of the useUser hook.
 */
export interface UseUserResult {
  user: User | null;
  isUserLoading: boolean; // Keep this name for consistency
  error: Error | null;
}

/**
 * React hook to get the current authenticated user from Firebase.
 * It automatically uses the Auth instance from the Firebase context.
 *
 * @returns {UseUserResult} Object with user, isLoading, and error.
 */
export function useUser(): UseUserResult {
  const auth = useAuth(); // Get auth instance from context
  const [user, setUser] = useState<User | null>(auth ? auth.currentUser : null);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start loading
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // If there's no auth instance, we can't determine the user.
    if (!auth) {
      setUser(null);
      setIsLoading(false);
      setError(new Error("Firebase Auth instance not provided."));
      return;
    }

    // Set initial loading state
    setIsLoading(true);

    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser) => {
        setUser(firebaseUser);
        setIsLoading(false);
        setError(null);
      },
      (error) => {
        console.error("useUser: onAuthStateChanged error:", error);
        setUser(null);
        setIsLoading(false);
        setError(error);
      }
    );

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [auth]); // Re-run effect if auth instance changes

  return { user: user, isUserLoading: isLoading, error: error };
}
