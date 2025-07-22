import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightPanel from "../components/RightPanel";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (left) */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar scrolls with content */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1 p-4">{children}</main>
      </div>

      {/* Optional right panel */}
      <RightPanel />
    </div>
  );
}
