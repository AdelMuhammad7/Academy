import Table from "./Table";
import TotalData from "./TotalData";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* الإحصائيات */}
      <TotalData />

      {/* الجدول */}
      <Table />
    </div>
  )
}
