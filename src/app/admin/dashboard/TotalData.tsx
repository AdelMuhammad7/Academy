"use client"
import { getAllAdmins } from '@/slices/adminSlice'
import { getAllExams } from '@/slices/examSlice'
import { getAllLessons } from '@/slices/lessonSlice'
import { getAllUsers } from '@/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect } from 'react'

function TotalData() {

    const dispatch = useAppDispatch()
    const {adminData , loading , error} = useAppSelector((state)=> state.admin)
    const {userData } = useAppSelector((state)=> state.user)
    const {lessonData } = useAppSelector((state)=> state.lesson)
    const {examData } = useAppSelector((state)=> state.exam)

    useEffect(()=> {
        dispatch(getAllAdmins())
        dispatch(getAllUsers())
        dispatch(getAllLessons())
        dispatch(getAllExams())
    }, [dispatch])

    if (loading) {
    return <p className="text-center py-4">جاري التحميل...</p>
  }

  if (error) {
    return <p className="text-center py-4 text-red-500">⚠ {String(error)}</p>
  }

    console.log(examData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي المشرفين</p>
            <p className="text-2xl font-bold text-blue-600"> {adminData?.length} </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الطلاب</p>
            <p className="text-2xl font-bold text-green-600"> {userData?.length} </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الكورسات</p>
            <p className="text-2xl font-bold text-purple-600"> {lessonData?.length} </p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">الامتحانات</p>
            <p className="text-2xl font-bold text-red-600"> {examData?.length} </p>
        </div>
    </div>
  )
}

export default TotalData