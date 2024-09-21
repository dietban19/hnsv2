// src/models/users/User.ts
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../services/firebase';
import { doc, setDoc } from 'firebase/firestore';

export abstract class User {
  protected userId: string;
  protected email: string | null;

  constructor(email: string | null, userId: string) {
    this.email = email;
    this.userId = userId;
  }

  // Abstract methods to be implemented by child classes
  abstract login(): Promise<void>;
  abstract logout(): Promise<void>;
  abstract getRole(): string;

  // Save user data to Firestore
  protected async saveUserData(role: string): Promise<void> {
    const userRef = doc(db, 'users', this.userId);
    await setDoc(userRef, {
      email: this.email,
      role: role,
    });
  }
}
