import Table from "./Table";
import TotalData from "./TotalData";
import CreateAdminButton from "./CreateAdminButton";


export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* data */}
      <TotalData />

      {/* btn for create admin */}
      <CreateAdminButton />

      {/* tables */}
      <Table />
    </div>
  )
}
