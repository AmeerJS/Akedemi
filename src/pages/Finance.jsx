// pages/Finance.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChartSection from "../components/ChartSection";
import UnpaidStudentList from "../components/UnpaidStudentTable";
import SchoolExpenseList from "../components/SchoolExpenseList";

export default function Finance() {
  return (
    <div className="flex bg-[#F3F3FB]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-600">Total Students</h4>
              <div className="text-2xl font-bold text-gray-800">932</div>
              <p className="text-green-500 text-xs mt-1">+10% than last month</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-600">Total Teachers</h4>
              <div className="text-2xl font-bold text-gray-800">754</div>
              <p className="text-red-500 text-xs mt-1">-0.5% than last month</p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm">
              <h4 className="text-sm text-gray-600">School Balance</h4>
              <div className="text-2xl font-bold text-gray-800">$123,456</div>
              <p className="text-green-500 text-xs mt-1">+23% than last month</p>
            </div>
          </div>

          {/* Chart Section */}
          <ChartSection />

          {/* Lists */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <UnpaidStudentList />
            <SchoolExpenseList />
          </div>
        </main>
      </div>
    </div>
  );
}
