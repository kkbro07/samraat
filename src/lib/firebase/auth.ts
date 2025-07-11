// src/lib/firebase/auth.ts
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  type AuthError,
} from 'firebase/auth';

import { app } from './config';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle(): Promise<void> {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    const authError = error as AuthError;
    if (authError.code === 'auth/operation-not-allowed' || authError.code === 'auth/unauthorized-domain') {
      console.error(
        `Firebase Error: ${authError.message}. Please ensure Google Sign-In is enabled and your app's domain is added to the "Authorized domains" list in the Firebase Authentication settings.`
      );
    } else {
      console.error('Error signing in with Google: ', authError.message);
    }
  }
}

export async function signOut(): Promise<void> {
  try {
    await firebaseSignOut(auth);
  } catch (error) {
    console.error('Error signing out: ', error);
  }
}
