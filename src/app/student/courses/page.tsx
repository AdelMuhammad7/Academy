// "use client";

// import { useState } from 'react';

// // مكون المقررات الدراسية
// export function CoursesComponent() {
//   const [courses] = useState([
//     {
//       id: 1,
//       title: "البرمجة بلغة JavaScript",
//       progress: 75,
//       instructor: "أحمد محمد",
//       duration: "12 ساعة",
//       lessons: 24
//     },
//     {
//       id: 2,
//       title: "تعلم React من الصفر",
//       progress: 30,
//       instructor: "سارة عبدالله",
//       duration: "16 ساعة",
//       lessons: 32
//     },
//     {
//       id: 3,
//       title: "تصميم واجهات المستخدم",
//       progress: 90,
//       instructor: "محمد السيد",
//       duration: "10 ساعات",
//       lessons: 20
//     },
//     {
//       id: 4,
//       title: "قواعد البيانات SQL",
//       progress: 45,
//       instructor: "فاطمة أحمد",
//       duration: "14 ساعة",
//       lessons: 28
//     }
//   ]);

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">المقررات الدراسية</h2>
    
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {courses.map((course) => (
//           <div key={course.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
//             <div className="flex items-center justify-between mb-3">
//               <span className="text-sm text-gray-600">المحاضر: {course.instructor}</span>
//               <span className="text-sm text-gray-600">{course.duration}</span>
//             </div>
            
//             <div className="mb-4">
//               <div className="flex justify-between mb-1">
//                 <span className="text-sm text-gray-600">التقدم</span>
//                 <span className="text-sm font-medium text-blue-600">{course.progress}%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div
//                   className="bg-blue-600 h-2.5 rounded-full"
//                   style={{ width: `${course.progress}%` }}
//                 ></div>
//               </div>
//             </div>
            
//             <div className="flex justify-between items-center">
//               <span className="text-sm text-gray-600">{course.lessons} درس</span>
//               <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
//                 متابعة التعلم
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // مكون الامتحانات
// export function ExamsComponent() {
//   const [exams] = useState([
//     {
//       id: 1,
//       title: "امتحان JavaScript النهائي",
//       course: "البرمجة بلغة JavaScript",
//       date: "2023-12-15",
//       duration: "60 دقيقة",
//       status: "قادم",
//       score: null
//     },
//     {
//       id: 2,
//       title: "اختبار React الأسبوعي",
//       course: "تعلم React من الصفر",
//       date: "2023-12-10",
//       duration: "45 دقيقة",
//       status: "مكتمل",
//       score: 85
//     },
//     {
//       id: 3,
//       title: "امتحان التصميم النهائي",
//       course: "تصميم واجهات المستخدم",
//       date: "2023-12-05",
//       duration: "90 دقيقة",
//       status: "مكتمل",
//       score: 92
//     },
//     {
//       id: 4,
//       title: "اختبار SQL العملي",
//       course: "قواعد البيانات SQL",
//       date: "2023-12-20",
//       duration: "75 دقيقة",
//       status: "قادم",
//       score: null
//     }
//   ]);

//   const getStatusColor = (status: string) => {
//     switch(status) {
//       case "قادم": return "bg-yellow-100 text-yellow-800";
//       case "مكتمل": return "bg-green-100 text-green-800";
//       default: return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">الامتحانات</h2>
       
//       </div>
      
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الامتحان</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المقرر</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">التاريخ</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">المدة</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الحالة</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">النتيجة</th>
//               <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">الإجراءات</th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {exams.map((exam) => (
//               <tr key={exam.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm font-medium text-gray-900">{exam.title}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{exam.course}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{exam.date}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">{exam.duration}</div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(exam.status)}`}>
//                     {exam.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <div className="text-sm text-gray-500">
//                     {exam.score ? `${exam.score}/100` : '--'}
//                   </div>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                   {exam.status === "قادم" ? (
//                     <button className="text-blue-600 hover:text-blue-900">بدء الامتحان</button>
//                   ) : (
//                     <button className="text-green-600 hover:text-green-900">عرض النتائج</button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // مكون الواجبات
// export function AssignmentsComponent() {
//   const [assignments] = useState([
//     {
//       id: 1,
//       title: "مشروع تطبيق React",
//       course: "تعلم React من الصفر",
//       dueDate: "2023-12-18",
//       status: "قيد التنفيذ",
//       submitted: false
//     },
//     {
//       id: 2,
//       title: "تمارين JavaScript",
//       course: "البرمجة بلغة JavaScript",
//       dueDate: "2023-12-12",
//       status: "مكتمل",
//       submitted: true
//     },
//     {
//       id: 3,
//       title: "تصميم واجهة متجر",
//       course: "تصميم واجهات المستخدم",
//       dueDate: "2023-12-08",
//       status: "متأخر",
//       submitted: false
//     },
//     {
//       id: 4,
//       title: "إنشاء قاعدة بيانات",
//       course: "قواعد البيانات SQL",
//       dueDate: "2023-12-22",
//       status: "قيد التنفيذ",
//       submitted: false
//     }
//   ]);

//   const getStatusColor = (status: string) => {
//     switch(status) {
//       case "قيد التنفيذ": return "bg-blue-100 text-blue-800";
//       case "مكتمل": return "bg-green-100 text-green-800";
//       case "متأخر": return "bg-red-100 text-red-800";
//       default: return "bg-gray-100 text-gray-800";
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">الواجبات</h2>
//         <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//           إضافة واجب جديد
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 gap-6">
//         {assignments.map((assignment) => (
//           <div key={assignment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-start mb-3">
//               <h3 className="text-lg font-semibold text-gray-800">{assignment.title}</h3>
//               <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(assignment.status)}`}>
//                 {assignment.status}
//               </span>
//             </div>
            
//             <div className="mb-4">
//               <p className="text-sm text-gray-600 mb-1">المقرر: {assignment.course}</p>
//               <p className="text-sm text-gray-600">موعد التسليم: {assignment.dueDate}</p>
//             </div>
            
//             <div className="flex justify-between items-center">
//               {assignment.submitted ? (
//                 <span className="text-sm text-green-600 font-medium">تم التسليم</span>
//               ) : (
//                 <span className="text-sm text-red-600 font-medium">لم يتم التسليم بعد</span>
//               )}
              
//               <div className="flex space-x-2">
//                 <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors">
//                   {assignment.submitted ? "عرض التسليم" : "تسليم الواجب"}
//                 </button>
//                 <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50 transition-colors">
//                   التفاصيل
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// // مكون رئيسي لتجربة جميع المكونات
// export default function EducationalDashboard() {
//   const [activeTab, setActiveTab] = useState<'courses' | 'exams' | 'assignments'>('courses');

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-8">لوحة التحكم التعليمية</h1>
        
//         {/* Tabs Navigation */}
//         <div className="flex border-b border-gray-200 mb-6">
//           <button
//             className={`py-3 px-6 font-medium ${activeTab === 'courses' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('courses')}
//           >
//             المقررات
//           </button>
//           <button
//             className={`py-3 px-6 font-medium ${activeTab === 'exams' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('exams')}
//           >
//             الامتحانات
//           </button>
//           <button
//             className={`py-3 px-6 font-medium ${activeTab === 'assignments' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
//             onClick={() => setActiveTab('assignments')}
//           >
//             الواجبات
//           </button>
//         </div>
        
//         {/* Tab Content */}
//         <div>
//           {activeTab === 'courses' && <CoursesComponent />}
//           {activeTab === 'exams' && <ExamsComponent />}
//           {activeTab === 'assignments' && <AssignmentsComponent />}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";

export default function CoursesComponent() {
  const [courses] = useState([
    {
      id: 1,
      title: "البرمجة بلغة JavaScript",
      progress: 75,
      instructor: "أحمد محمد",
      duration: "12 ساعة",
      lessons: 24,
    },
    {
      id: 2,
      title: "تعلم React من الصفر",
      progress: 30,
      instructor: "سارة عبدالله",
      duration: "16 ساعة",
      lessons: 32,
    },
    {
      id: 3,
      title: "تصميم واجهات المستخدم",
      progress: 90,
      instructor: "محمد السيد",
      duration: "10 ساعات",
      lessons: 20,
    },
    {
      id: 4,
      title: "قواعد البيانات SQL",
      progress: 45,
      instructor: "فاطمة أحمد",
      duration: "14 ساعة",
      lessons: 28,
    },
  ]);

  return (
    <div className="bg-chart-4 rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">المقررات الدراسية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold  mb-2">{course.title}</h3>
            <div className="flex items-center justify-between mb-3">
            </div>


            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">ابدا الان</span>
              <button className="bg-primary text-secondary h-8 px-3 py-1 rounded text-sm transition-colors">
                الذهاب للتعلم
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
