"use client";
import { ChevronRight } from "lucide-react";

const Hero = ({ onNavigate }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-secondary drop-shadow-[0_0_6px_black] mb-6">
            تعلم المستقبل
            <span className="block text-primary">معنا اليوم</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            اكتشف مجموعة واسعة من الدورات التعليمية المصممة لتطوير مهاراتك وتحقيق أهدافك المهنية
          </p>
          <button
            onClick={() => onNavigate("courses")}
            className="text-white px-8 py-4 rounded-lg text-lg font-medium bg-primary transition-colors inline-flex items-center"
          >
            ابدأ التعلم الآن
            <ChevronRight className="mr-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
