import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightPanel from "../components/RightPanel";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      </div>
      <RightPanel />
    </div>
  );
}
