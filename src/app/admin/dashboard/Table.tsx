import React from 'react'

function Table() {
  return (
    <div className="bg-white rounded-xl shadow-md border overflow-hidden">
        <div className="p-4 border-b">
          <h2 className="font-semibold text-lg">آخر الطلاب المسجلين</h2>
        </div>
        <table className="w-full text-right border-collapse">
          <thead className="bg-gray-100 text-gray-600 text-sm">
            <tr>
              <th className="p-3">#</th>
              <th className="p-3">الاسم</th>
              <th className="p-3">البريد الإلكتروني</th>
              <th className="p-3">الحالة</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            <tr className="hover:bg-gray-50">
              <td className="p-3">1</td>
              <td className="p-3">أحمد محمد</td>
              <td className="p-3">ahmed@example.com</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                  نشط
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">2</td>
              <td className="p-3">سارة علي</td>
              <td className="p-3">sara@example.com</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  قيد الانتظار
                </span>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-3">3</td>
              <td className="p-3">محمد حسن</td>
              <td className="p-3">mohamed@example.com</td>
              <td className="p-3">
                <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-700">
                  محظور
                </span>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Table