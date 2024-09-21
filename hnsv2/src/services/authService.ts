// src/services/authService.ts
import { User, Patient, Admin, Guest } from '../models/User';

export async function loginUser(role: string, email: string | null) {
  let user: User;

  switch (role) {
    case 'Patient':
      user = new Patient(email, '');
      await user.login();
      break;
    case 'Admin':
      user = new Admin(email, '');
      await user.login();
      break;
    case 'Guest':
      user = new Guest(email, '');
      await user.login();
      break;
    default:
      throw new Error('Invalid role');
  }

  console.log(`User logged in as ${user.getRole()}`);
  return user;
}
