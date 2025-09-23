"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Layout/NavBar/Navbar";
import Footer from "@/components/Layout/Footer/Footer";
import Loading from "@/components/Loading/Loading";



export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = ["/login", "/forget-password" , "/reset-password" , "/sign-up"].includes(pathname);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;
  
  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
