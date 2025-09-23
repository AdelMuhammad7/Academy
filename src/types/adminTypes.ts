// types/adminTypes.ts
export interface AdminData {
  id: string;
  email: string;
  fullName: string;
  password: string;
  phoneNumber: number;
  classLevel: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface Admin {
  adminData: AdminData[];
  loading: boolean;
  error: string | null;   // 👈 تعديل
  fromPageA: boolean;
}
export interface User {
  userData: AdminData[];
  loading: boolean;
  error: string | null;   // 👈 تعديل
  fromPageA: boolean;
}

export interface TableData {
  classLevel: string,
  createdAt: string ,
  email: string,
  fullName: string,
  isVerified: boolean,
  phoneNumber: number,
  role: string
}

export interface Table {
  tableData: TableData[]
}
