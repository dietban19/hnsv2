// src/models/users/Guest.ts
import { User } from './User';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export class Guest extends User {
  constructor(email: string | null, userId: string) {
    super(email, userId);
  }

  // Guest login using email and password
  async login(): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        this.email!,
        'guest_password',
      );
      this.userId = userCredential.user?.uid!;
      await this.saveUserData('Guest');
      console.log('Guest logged in:', this.email);
    } catch (error) {
      console.error('Guest login failed:', error);
    }
  }

  // Guest logout
  async logout(): Promise<void> {
    await auth.signOut();
    console.log('Guest logged out');
  }

  // Get role
  getRole(): string {
    return 'Guest';
  }
}
