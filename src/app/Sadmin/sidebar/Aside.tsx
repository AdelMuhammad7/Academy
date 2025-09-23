"use client";

import {
  Home,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Aside() {
  const pathname = usePathname();

  const links = [
    { href: "/admin/dashboard", label: "لوحة التحكم", icon: Home },
  ];



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



      

    </aside>
  );
}

export default Aside;
