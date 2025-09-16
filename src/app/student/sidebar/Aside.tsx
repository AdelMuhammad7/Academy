"use client";

import { BarChart3, BookOpen, Calendar, ClipboardList, Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Aside() {
  const pathname = usePathname();

  const links = [
    { href: "/student/dashboard", label: "لوحة التحكم", icon: Home },
    { href: "/student/courses", label: "المقررات", icon: BookOpen },
    { href: "/student/schedule", label: "الامتحانات", icon: Calendar },
    { href: "/student/progress", label: "التقدم", icon: BarChart3 },
    { href: "/student/assignments", label: "الواجبات", icon: ClipboardList },
  ];

  return (
    <aside className="w-64 shadow-lg">
      <div className="p-4">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                active
                  ? "bg-blue-100 text-blue-800"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} className="ml-2" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Aside;
