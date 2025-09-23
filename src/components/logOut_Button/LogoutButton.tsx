"use client";

import { logout } from '@/slices/authSlice';
import { useAppDispatch } from '@/store/hooks';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation'; // ✅ بدل next/router
import React from 'react';

function LogoutButton() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());   // يمسح اليوزر + الكوكي
    router.push("/login"); // يوديه على صفحة تسجيل الدخول
  };

  return (
    <button
      onClick={handleLogout}
      className=" bg-yellow-950 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition"
    >
      Log Out <LogOut size={18} />
    </button>
  );
}

export default LogoutButton;
