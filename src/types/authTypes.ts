export interface User {
  id: string;
  name: string;
  email: string;
  role: "superAdmin" | "admin" | "student"; // 👈 الأنواع
}

export interface AuthState {
  user: User | null;
  isLoggedIn: boolean;
  token?: string;
}
