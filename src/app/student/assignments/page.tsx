"use client";

import { useState } from "react";

export default function AssignmentsPage() {
  const [assignments] = useState([
    {
      id: 1,
      title: "مشروع تطبيق React",
      course: "تعلم React من الصفر",
      dueDate: "2023-12-18",
      status: "قيد التنفيذ",
      submitted: false
    },
    {
      id: 2,
      title: "تمارين JavaScript",
      course: "البرمجة بلغة JavaScript",
      dueDate: "2023-12-12",
      status: "مكتمل",
      submitted: true
    },
    {
      id: 3,
      title: "تصميم واجهة متجر",
      course: "تصميم واجهات المستخدم",
      dueDate: "2023-12-08",
      status: "متأخر",
      submitted: false
    },
    {
      id: 4,
      title: "إنشاء قاعدة بيانات",
      course: "قواعد البيانات SQL",
      dueDate: "2023-12-22",
      status: "قيد التنفيذ",
      submitted: false
    }
  ]);


  return (
    <div className="bg-chart-4 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">الواجبات</h2>
       
      </div>
      
      <div className="grid grid-cols-2 gap-6 bg-secondary p-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="border border-border  rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-semibold ">{assignment.title}</h3>
            </div>
              
                <button className="bg-primary px-3 py-1  mt-5 h-12 rounded text-sm transition-colors">
                  {assignment.submitted} تسليم الواجب
                </button>
            </div>
        ))}
      </div>
    </div>
  );
}
