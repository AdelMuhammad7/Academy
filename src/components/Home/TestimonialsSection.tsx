"use client"; // لو هتستخدمي React hooks مستقبلاً

import React from "react";

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "عمر الشريف",
      role: "الصف السادس الابتدائي ",
      comment: "الدورات غيرت مساري المهني بالكامل، محتوى ممتاز وشرح واضح",
      avatar: "https://placeholder-image-service.onrender.com/image/80x80?prompt=Portrait of a smiling arab male student&id=student-1"
    },
    {
      name: "فاطمة أحمد",
      role: " الصف الثالث الثانوي",
      comment: "أفضل منصة تعليمية واجهتها، الدروس عملية وتطبيقية",
      avatar: "https://placeholder-image-service.onrender.com/image/80x80?prompt=Portrait of a smiling arab female student&id=student-2"
    },
    {
      name: "خالد عبدالله",
      role: " الصف الثاني الاعدادي",
      comment: "المنصة ساعدتني في الفهم بشكل أفضل",
      avatar: "https://placeholder-image-service.onrender.com/image/80x80?prompt=Portrait of a serious arab male student&id=student-3"
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-gray-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            آراء طلابنا
          </h2>
          <p className="text-xl text-muted-foreground">
            ماذا يقول طلابنا عن تجربتهم معنا
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 ml-4"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-foreground italic">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
