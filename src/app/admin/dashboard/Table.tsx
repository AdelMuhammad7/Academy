"use client"
import AppPagination from '@/components/Pagination/AppPagination'
import { useAppSelector } from '@/store/hooks'
import React, { useState } from 'react'

function Table() {
  const { tableData } = useAppSelector((state) => state.tableData)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  const totalPages = Math.ceil(tableData.length / itemsPerPage)

  console.log(tableData)

  const paginatedData = tableData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <h2 className="font-semibold text-lg">البيانات المختارة</h2>
      </div>

      {/* Table */}
      <table className="w-full text-right border-collapse">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-3">#</th>
            <th className="p-3">الاسم</th>
            <th className="p-3">التليفون</th>
            <th className="p-3">البريد الإلكتروني</th>
            <th className="p-3">تاريخ التسجيل</th>
            <th className="p-3">المرحلة</th>
            <th className="p-3">الحالة</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {paginatedData?.length > 0 ? (
            paginatedData.map((el, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-3">{(currentPage - 1) * itemsPerPage + index + 1}</td>
                <td className="p-3">{el.fullName }</td>
                <td className="p-3">{el.phoneNumber }</td>
                <td className="p-3">{el.email}</td>
                <td className="p-3">{new Date(el.createdAt).toLocaleString()}</td>
                <td
                  className={`p-3 font-semibold ${
                    el.role !== "user"
                      ? "text-blue-600" // لو مدير
                      : el.classLevel === "Grade 1 Secondary"
                      ? "text-blue-900"
                      : el.classLevel === "Grade 2 Secondary"
                      ? "text-yellow-600"
                      : el.classLevel === "Grade 3 Secondary"
                      ? "text-purple-600"
                      : "text-gray-600"
                  }`}
                >
                  {el.role === "user" ? el.classLevel : "مدير"}
                </td>
                                <td
                  className={`p-3 font-semibold rounded-lg text-center ${
                    el.isVerified
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {el.isVerified ? "تم التسجيل" : "لم يتم التسجيل"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="text-center py-5" colSpan={7}>
                اختر البيانات لعرضها
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="p-4 flex justify-center">
        <AppPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(val) => {
            setItemsPerPage(val)
            setCurrentPage(1)
          }}
        />
      </div>
    </div>
  )
}

export default Table
