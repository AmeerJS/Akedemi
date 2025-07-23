import UserIcon from "../assets/icons/userorange.svg?react";
import PrintIcon from "../assets/icons/print.svg?react";
import DotsIcon from "../assets/icons/dots.svg?react";

const students = [
  {
    name: "Samantha William",
    id: "123456789",
    class: "VII A",
    amount: "$ 50,036",
  },
  {
    name: "Tony Soap",
    id: "123456789",
    class: "VII A",
    amount: "$ 50,036",
  },
  {
    name: "Jordan Nico",
    id: "123456789",
    class: "VII A",
    amount: "$ 50,036",
  },
  {
    name: "Karen Hope",
    id: "123456789",
    class: "VII A",
    amount: "$ 50,036",
  },
  {
    name: "Nadila Adja",
    id: "123456789",
    class: "VII A",
    amount: "$ 50,036",
  },
];

export default function UnpaidStudentTable() {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Unpaid Student Tuition
      </h2>

      <div className="space-y-4">
        {students.map((student, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center px-4 py-4 rounded-lg hover:bg-gray-50 transition"
          >
            {/* Left: Avatar + Name */}
            <div className="flex items-center space-x-4 w-1/4">
              <div className="w-9 h-9 rounded-full bg-purple-200" />
              <div className="text-sm font-medium text-gray-800">
                {student.name}
              </div>
            </div>

            {/* ID */}
            <div className="w-1/5 text-sm text-[#4D44B5] font-medium">
              ID {student.id}
            </div>

            {/* Class */}
            <div className="flex items-center gap-2 text-sm min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#FB7D5B] flex items-center justify-center text-white">
                <UserIcon className="w-8 h-8" />
              </div>
              <span className="font-semibold text-gray-700">
                {student.class}
              </span>
            </div>

            {/* Amount */}
            <div className="w-1/5 text-right text-[#4D44B5] font-semibold text-sm">
              {student.amount}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 w-1/5 justify-end text-gray-500">
              <button className="hover:text-gray-700">
                <PrintIcon className="w-5 h-5" />
              </button>
              <button className="hover:text-gray-700">
                <DotsIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8 text-sm text-gray-600">
        <span>
          Showing 1–5 of <strong className="text-gray-800">100</strong> entries
        </span>

        <div className="flex items-center gap-3">
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
    </div>
  );
}
