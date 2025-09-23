"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@/store/store';
import educationalReducer from "@/store/educationalSlice";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  Home,
  BookOpen,
  Calendar,
  BarChart3,
  ClipboardList,
  Bell,
  User,
  Search,
  ChevronDown,
  Clock,
  Star,
  Award,
  Target,
} from 'lucide-react';


export default function DashboardPage() {

  const [activeTab, setActiveTab] = useState<"dashboard" | "schedule" | "assignments">("dashboard");
  
const { progressData, subjectData, scheduleData, assignments } = useSelector(
  (state: RootState) => state.educational
  );
  
  return (
  <div className="flex-1 overflow-auto">
        {/* الشريط العلوي */}
        <header className="shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center  rounded-lg px-3 py-2 w-96">
            <Search size={18} className=" ml-2" />
            <input
              type="text"
              placeholder="ابحث عن مواد، واجبات، دورات..."
              className="bg-transparent outline-none w-full text-right"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full">
              <Bell size={20} className="" />
            </button>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <User size={16} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">الطالب</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* المحتوى */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <>
              {/* بطاقات إحصائية */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className=" p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className=" text-sm">المقررات المسجلة</p>
                      <p className="text-2xl font-bold mt-1">12</p>
                    </div>
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <BookOpen size={24} className="text-blue-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">ساعات التعلم</p>
                      <p className="text-2xl font-bold mt-1">48</p>
                    </div>
                    <div className="p-3 bg-green-100 rounded-lg">
                      <Clock size={24} className="text-green-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">متوسط الدرجات</p>
                      <p className="text-2xl font-bold mt-1">86%</p>
                    </div>
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <Star size={24} className="text-orange-600" />
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm">الإنجازات</p>
                      <p className="text-2xl font-bold mt-1">8</p>
                    </div>
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <Award size={24} className="text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* الرسوم البيانية */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">
                <div className="p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">التقدم الدراسي</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={progressData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="progress" stroke="#0088FE" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-6 rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-4">الدرجات الامتحانات</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={subjectData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="grade" fill="#00C49F" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {activeTab === 'schedule' && (
            <div className="p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">جدول اليوم</h3>
              <div className="space-y-4">
                {scheduleData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center ml-3">
                        <Clock size={20} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.subject}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'assignments' && (
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">الواجبات القادمة</h3>
              <div className="space-y-4">
                {assignments.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center ml-3">
                        <Target size={20} className="text-orange-600" />
                      </div>
                      <div>
                        <p className="font-medium">{item.subject}</p>
                        <p className="text-sm text-gray-500">{item.title}</p>
                      </div>
                    </div>
                    <span className="text-sm text-red-500 bg-red-50 px-2 py-1 rounded">{item.due}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
        );
}
