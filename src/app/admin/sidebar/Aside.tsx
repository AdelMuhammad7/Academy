"use client";

import { logout } from "@/slices/authSlice";
import { useAppDispatch } from "@/store/hooks";
import {
  BarChart3,
  BookOpen,
  Calendar,
  ClipboardList,
  Home,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Aside() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch(); // ✅ صح

  const links = [
    { href: "/admin/dashboard", label: "لوحة التحكم", icon: Home },
    { href: "/admin/courses", label: "المقررات", icon: BookOpen },
    { href: "/admin/schedule", label: "الامتحانات", icon: Calendar },
    { href: "/admin/progress", label: "التقدم", icon: BarChart3 },
    { href: "/admin/assignments", label: "الواجبات", icon: ClipboardList },
  ];

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login"); // ✅ كده يوجّه لصفحة تسجيل الدخول
  };

  return (
    <aside className="w-64 shadow-lg relative flex flex-col h-screen">
      <div className="p-4 flex-1">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                active
                  ? "bg-blue-100 text-primary-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} className="ml-2" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>

      <button
        onClick={handleLogout}
        className="m-4 bg-yellow-950 cursor-pointer text-white px-4 py-2 rounded-lg flex items-center gap-2 justify-center transition"
      >
        Log Out <LogOut size={18} />
      </button>
    </aside>
  );
}

export default Aside;
