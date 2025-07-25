import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StudentTable from "../components/StudentTable";

export default function StudentsPage() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="p-6 bg-gray-100 flex-1">
        <StudentTable />
        </main>
      </div>
    </div>
  );
}
