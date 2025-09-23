"use client";

import { useState } from "react";

export default function ExamsPage() {
  const [exams] = useState([
    {
      id: 1,
      title: "امتحان JavaScript النهائي",
      course: "البرمجة بلغة JavaScript",
      date: "2023-12-15",
      duration: "60 دقيقة",
      status: "قادم",
      score: null
    },
    {
      id: 2,
      title: "اختبار React الأسبوعي",
      course: "تعلم React من الصفر",
      date: "2023-12-10",
      duration: "45 دقيقة",
      status: "مكتمل",
      score: 85
    },
    {
      id: 3,
      title: "امتحان التصميم النهائي",
      course: "تصميم واجهات المستخدم",
      date: "2023-12-05",
      duration: "90 دقيقة",
      status: "مكتمل",
      score: 92
    },
    {
      id: 4,
      title: "اختبار SQL العملي",
      course: "قواعد البيانات SQL",
      date: "2023-12-20",
      duration: "75 دقيقة",
      status: "قادم",
      score: null
    }
  ]);

  const getStatusColor = (status: string) => {
    switch(status) {
      case "قادم": return "bg-yellow-100 text-yellow-800";
      case "مكتمل": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-chart-4 rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold ">الامتحانات</h2>
      </div>

      <div className="overflow-x-auto border bor">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-primary">
            <tr>
              <th className="px-6 py-3 text-right text-xs font-medium text-secondary tracking-wider">الامتحان</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-secondary tracking-wider">المقرر</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-secondary tracking-wider">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-secondary divide-y divide-gray-200">
            {exams.map((exam) => (
              <tr key={exam.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium">{exam.title}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm">{exam.course}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {exam.status === "قادم" ? (
                    <button className="text-primary">بدء الامتحان</button>
                  ) : (
                    <button className="text-primary">عرض النتائج</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
