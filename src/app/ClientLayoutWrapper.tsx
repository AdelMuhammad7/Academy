"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Layout/NavBar/Navbar";
import Footer from "@/components/Layout/Footer";


export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/forget-password" , "/reset-password" , "/sign-up"].includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
