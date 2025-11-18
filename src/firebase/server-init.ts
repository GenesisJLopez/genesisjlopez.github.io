'use server';

import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

// This is a server-only file. It should not be imported into client components.

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_KEY
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
  : undefined;

function getAdminApp() {
  if (getApps().length) {
    return getApp('firebase-admin');
  }

  if (!serviceAccount) {
    throw new Error('FIREBASE_SERVICE_ACCOUNT_KEY environment variable is not set. Cannot initialize Firebase Admin SDK.');
  }

  return initializeApp(
    {
      credential: cert(serviceAccount),
    },
    'firebase-admin'
  );
}

export async function initializeAdmin() {
  const app = getAdminApp();
  return {
    auth: getAuth(app),
    firestore: getFirestore(app),
  };
}
