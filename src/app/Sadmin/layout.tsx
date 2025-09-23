import Aside from "./sidebar/Aside";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] min-h-screen">
      <Aside />
      <main className="p-6">{children}</main>
    </div>
  );
}
