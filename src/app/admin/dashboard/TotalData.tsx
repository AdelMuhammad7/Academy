"use client"
import { getAllAdmins } from '@/slices/adminSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect } from 'react'

function TotalData() {

    const dispatch = useAppDispatch()
    const {adminData , loading , error} = useAppSelector((state)=> state.admin)

    useEffect(()=> {
        dispatch(getAllAdmins())
    }, [dispatch])

    if (loading) {
    return <p className="text-center py-4">جاري التحميل...</p>
  }

//   if (error) {
//     return <p className="text-center py-4 text-red-500">⚠ {String(error)}</p>
//   }

    console.log(adminData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي المشرفين</p>
            <p className="text-2xl font-bold text-blue-600">11</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الطلاب</p>
            <p className="text-2xl font-bold text-green-600">50</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الكورسات</p>
            <p className="text-2xl font-bold text-purple-600">8</p>
        </div>

        <div className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">الامتحانات القادمة</p>
            <p className="text-2xl font-bold text-red-600">3</p>
        </div>
    </div>
  )
}

export default TotalData