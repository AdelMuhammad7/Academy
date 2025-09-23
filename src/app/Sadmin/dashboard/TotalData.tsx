"use client"
import { getAllAdmins } from '@/slices/adminSlice'
import { setTableData } from '@/slices/tableSlice'
import { getAllUsers } from '@/slices/userSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import React, { useEffect } from 'react'

function TotalData() {

    const dispatch = useAppDispatch()
    const {adminData , loading , error} = useAppSelector((state)=> state.admin)
    const {userData } = useAppSelector((state)=> state.user)

    const {user } = useAppSelector((state)=> state.auth)

  console.log(user)
  
    useEffect(()=> {
        dispatch(getAllAdmins())
        dispatch(getAllUsers())
    }, [dispatch])

    if (loading) {
    return <p className="text-center py-4">جاري التحميل...</p>
  }

  if (error) {
    return <p className="text-center py-4 text-red-500">⚠ {String(error)}</p>
  }

  function showData(state: string) {
    if (state === "admin") {
      dispatch(setTableData(adminData))
    } else if (state === "user") {
      dispatch(setTableData(userData))
    }

  
    
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div onClick={()=> showData("admin")} className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي المشرفين</p>
            <p className="text-2xl font-bold text-blue-600"> {adminData?.length} </p>
        </div>

        <div onClick={()=> showData("user")} className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الطلاب</p>
            <p className="text-2xl font-bold text-green-600"> {userData?.length} </p>
        </div>

        {/* <div onClick={()=> showData("course")} className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">إجمالي الكورسات</p>
            <p className="text-2xl font-bold text-purple-600"> {lessonData?.length} </p>
        </div>

        <div onClick={()=> showData("exam")} className="p-6 bg-white rounded-xl shadow-md border">
            <p className="text-gray-500 text-sm">الامتحانات</p>
            <p className="text-2xl font-bold text-red-600"> {examData?.length} </p>
        </div> */}
    </div>
  )
}

export default TotalData