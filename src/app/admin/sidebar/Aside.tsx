"use client";

import {
  BarChart3,
  BookOpen,
  Calendar,
  ClipboardList,
  FileText,
  Home,
  PlusCircle,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Aside() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const links = [
    { href: "/admin/dashboard", label: "لوحة التحكم", icon: Home },
    {
      href: "/admin/courses",
      label: "المقررات",
      icon: BookOpen,
      children: [
        { href: "/admin/courses/list", label: "قائمة المقررات", icon: FileText },
        { href: "/admin/courses/add", label: "إضافة مقرر", icon: PlusCircle },
      ],
    },
    { href: "/admin/schedule", label: "الامتحانات", icon: Calendar },
    { href: "/admin/progress", label: "التقدم", icon: BarChart3 },
    { href: "/admin/assignments", label: "الواجبات", icon: ClipboardList },
  ];

  const toggleMenu = (href: string) => {
    setOpenMenu(openMenu === href ? null : href);
  };

  return (
    <aside className="w-64 shadow-lg relative flex flex-col h-screen">
      <div className="p-4 flex-1">
        {links.map(({ href, label, icon: Icon, children }) => {
          const active = pathname === href;

          return (
            <div key={href}>
              <button
                onClick={() => (children ? toggleMenu(href) : null)}
                className={`flex items-center justify-between w-full p-3 rounded-lg mb-2 cursor-pointer transition-colors ${
                  active
                    ? "bg-blue-100 text-primary-800"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center">
                  <Icon size={20} className="ml-2" />
                  <span>{label}</span>
                </div>

                {children &&
                  (openMenu === href ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  ))}
              </button>

              {/* عرض الـ children لو المفتاح مفتوح */}
              {children && openMenu === href && (
                <div className="ms-6 mt-1 space-y-1">
                  {children.map(({ href, label, icon: ChildIcon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-2 p-2 text-sm rounded transition-colors ${
                        pathname === href
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <ChildIcon size={16} />
                      {label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Aside;
