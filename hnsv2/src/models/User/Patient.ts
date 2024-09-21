// src/models/users/Patient.ts
import { User } from './User';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { HealthSession } from '../Sessions';
export class Patient extends User {
  private sessions: HealthSession[] = [];

  constructor(email: string | null, userId: string) {
    super(email, userId);
  }

  // Patient login
  async login(): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        this.email!,
        'your_password',
      );
      this.userId = userCredential.user?.uid!;
      await this.saveUserData('Patient'); // Save role as "Patient" in Firestore
      console.log('Patient logged in:', this.email);
    } catch (error) {
      console.error('Login failed:', error);
    }
  }

  // Patient logout
  async logout(): Promise<void> {
    await auth.signOut();
    console.log('Patient logged out');
  }

  // Add health session
  async addHealthSession(
    heartbeat: number,
    bloodPressure: string,
    temperature: number,
  ): Promise<void> {
    const session = new HealthSession(heartbeat, bloodPressure, temperature);
    await session.saveSession(this.userId);
    this.sessions.push(session);
  }

  // Get role
  getRole(): string {
    return 'Patient';
  }
}
