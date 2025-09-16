"use client";

import Hero from "@/components/Home/HeroSection";
import HomePage from "@/components/Home/HomePage";
import StatsSection from "@/components/Home/StatsSection";
export default function Home() {

  const handleNavigate = (section: "home" | "courses" | "about") => {
    console.log("Navigate to:", section);
    

  }
  return (
    <main className="text-primary">
      <Hero onNavigate={handleNavigate} />
      <StatsSection />
      {/* <HomePage /> */}
    </main>
  );
}
