// src/models/users/Admin.ts
import { User } from './User';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';

export class Admin extends User {
  constructor(email: string | null, userId: string) {
    super(email, userId);
  }

  // Admin login
  async login(): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        this.email!,
        'your_password',
      );
      this.userId = userCredential.user?.uid!;
      await this.saveUserData('Admin');
      console.log('Admin logged in:', this.email);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  // Admin logout
  async logout(): Promise<void> {
    await auth.signOut();
    console.log('Admin logged out');
  }

  // Admin-specific method to view all patients
  async viewAllPatients(): Promise<void> {
    const patientsSnapshot = await getDocs(collection(db, 'patients'));
    patientsSnapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
  }

  // Get role
  getRole(): string {
    return 'Admin';
  }
}
