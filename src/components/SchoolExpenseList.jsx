// components/SchoolExpense.jsx
import { ChevronLeft, ChevronRight, Minus } from "lucide-react"

export default function SchoolExpense() {
  const expenses = [
    {
      id: "#123456789",
      date: "3 March 2021, 12:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "#123456789",
      date: "3 March 2021, 12:45 PM",
      amount: "$50,036",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-700",
    },
    {
      id: "#123456789",
      date: "3 March 2021, 12:45 PM",
      amount: "$50,036",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-700",
    },
    {
      id: "#123456789",
      date: "3 March 2021, 12:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
    },
    {
      id: "#123456789",
      date: "3 March 2021, 12:45 PM",
      amount: "$50,036",
      status: "Complete",
      statusColor: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="w-full bg-white p-5 rounded-2xl">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">School Expense</h2>

      <div className="space-y-4">
        {expenses.map((expense, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-sm transition"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-red-400 rounded-full flex items-center justify-center">
                <Minus className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-900">{expense.id}</div>
                <div className="text-xs text-gray-500">{expense.date}</div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="font-semibold text-sm text-gray-900">{expense.amount}</div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${expense.statusColor}`}
              >
                {expense.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-3 justify-end my-8">
          <button className="w-10 h-10 flex items-center justify-center text-[#4D44B5] rounded-full hover:bg-[#4D44B5] hover:text-white transition duration-300">
            &lt;
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-[#4D44B5] text-white font-semibold rounded-full shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-[#4D44B5] border border-[#4D44B5] rounded-full hover:bg-[#4D44B5] hover:text-white transition duration-300 shadow-sm">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-[#4D44B5] border border-[#4D44B5] rounded-full hover:bg-[#4D44B5] hover:text-white transition duration-300 shadow-sm">
            3
          </button>
          <button className="w-10 h-10 flex items-center justify-center text-[#4D44B5] rounded-full hover:bg-[#4D44B5] hover:text-white transition duration-300">
            &gt;
          </button>
        </div>
    </div>
  );
}
