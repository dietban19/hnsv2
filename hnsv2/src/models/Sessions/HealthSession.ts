// src/models/sessions/HealthSession.ts
import { db } from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

export class HealthSession {
  date: Date;
  heartbeat: number;
  bloodPressure: string;
  temperature: number;

  constructor(heartbeat: number, bloodPressure: string, temperature: number) {
    this.date = new Date();
    this.heartbeat = heartbeat;
    this.bloodPressure = bloodPressure;
    this.temperature = temperature;
  }

  // Save session data to Firestore under a patient's document
  async saveSession(patientId: string): Promise<void> {
    const sessionRef = collection(db, 'patients', patientId, 'sessions');
    await addDoc(sessionRef, {
      date: this.date,
      heartbeat: this.heartbeat,
      bloodPressure: this.bloodPressure,
      temperature: this.temperature,
    });
    console.log('Health session saved for patient:', patientId);
  }
}
