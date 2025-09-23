"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";

import img from "../../../../public/imgs/logo.jpeg";

import LoginButton from "@/components/Login_Button/LoginButton";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/store/hooks";
import { getUser } from "@/slices/authSlice";
import LogoutButton from "@/components/logOut_Button/LogoutButton";

function Navbar() {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const cookieToken = getCookie("token") as string | null;
    const cookieRole = getCookie("role") as string | null;
    setToken(cookieToken);
    setRole(cookieRole);
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const renderRoleLink = () => {
    if (role === "super-admin") {
      return (
        <NavigationMenuItem>
          <Link
            className="text-primary pe-5 font-semibold hover:underline"
            href={"/Sadmin/dashboard"}
          >
            لوحة تحكم الادمن
          </Link>
        </NavigationMenuItem>
      );
    } else if (role === "user") {
      return (
        <NavigationMenuItem>
          <Link
            className="text-primary pe-5 font-semibold hover:underline"
            href={"/student/dashboard"}
          >
            لوحة تحكم الطالب
          </Link>
        </NavigationMenuItem>
      );
    } else if (role === "admin") {
      return (
        <NavigationMenuItem>
          <Link
            className="text-primary pe-5 font-semibold hover:underline"
            href={"/admin/dashboard"}
          >
            لوحة تحكم المدرس
          </Link>
        </NavigationMenuItem>
      );
    }
    return null;
  };

  return (
    <nav className="p-3 flex justify-between items-center text-primary bg-secondary">
      <Image
        src={img}
        alt="Logo"
        width={60}
        height={50}
        className="rounded-full w-auto h-auto"
      />

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link
              className="text-primary pe-5 font-semibold hover:underline"
              href={"/"}
            >
              الرئيسية
            </Link>
          </NavigationMenuItem>

          {renderRoleLink()}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-2 items-center">
        <ModeToggle />
        {!token ? <LoginButton /> : <LogoutButton />}
      </div>
    </nav>
  );
}

export default Navbar;
