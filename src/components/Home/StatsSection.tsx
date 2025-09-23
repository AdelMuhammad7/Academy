"use client";


import React from "react";


const StatsSection: React.FC = () => {





  return (
    <section className="relative py-16 border-t border-gray-300 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-green-200 rounded-full opacity-50 animate-ping"></div>

      {/* Stats Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">3500+</div>
            <div className="text-gray-600">طالب مسجل</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
            <div className="text-gray-600">دورة تعليمية</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">مدرب محترف</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
            <div className="text-gray-600">معدل الرضا</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
