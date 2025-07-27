import { useState } from "react";
import PhoneIcon from "../assets/icons/phone.svg?react";
import MailIcon from "../assets/icons/mail.svg?react";

export default function StudentTable() {
  const [checkedRows, setCheckedRows] = useState([]);

  const students = [
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parent: "Mana William",
      city: "Jakarta",
      contact: true,
      grade: "VII A",
      gradeColor: "#FB7D5B",
    },
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parent: "Mana William",
      city: "Jakarta",
      contact: true,
      grade: "VII A",
      gradeColor: "#FCC43E",
    },
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parent: "Mana William",
      city: "Jakarta",
      contact: true,
      grade: "VII A",
      gradeColor: "#4D44B5",
    },
    {
      name: "Samanta William",
      id: "#123456789",
      date: "March 25, 2021",
      parent: "Mana William",
      city: "Jakarta",
      contact: true,
      grade: "VII A",
      gradeColor: "bg-red-400",
    },
  ];

  const toggleCheckbox = (index) => {
    setCheckedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div>
      {/* Top Controls */}
      <div className="flex justify-end mb-6 gap-4">
        <select className="appearance-none text-sm px-9 py-2 border border-[#4D44B5] rounded-full bg-gray-100 text-[#4D44B5] hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition">
          <option>Newest</option>
          <option>Oldest</option>
        </select>
        <button className="bg-[#4D44B5] text-white px-5 py-2 rounded-full hover:bg-indigo-700 hover:shadow-lg transition font-medium">
          + New Student
        </button>
      </div>

      {/* Table Card */}
      <div className="bg-white p-6 rounded-2xl border border-gray-100">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="text-gray-600 border-b border-gray-200">
              <th className="px-4 py-3">
                <input type="checkbox" className="scale-150" />
              </th>
              <th className="py-3">Name</th>
              <th className="py-3">ID</th>
              <th className="py-3">Date</th>
              <th className="py-3">Parent Name</th>
              <th className="py-3">City</th>
              <th className="py-3">Contact</th>
              <th className="py-3">Grade</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, idx) => {
              const isChecked = checkedRows.includes(idx);
              return (
                <tr
                  key={idx}
                  className={`group border-b border-gray-200 transition hover:bg-indigo-50 ${
                    isChecked ? "border-l-4 border-indigo-600 bg-indigo-50" : ""
                  }`}
                >
                  <td className="px-4 py-4">
                    <input
                      type="checkbox"
                      className="scale-150 accent-indigo-600"
                      checked={isChecked}
                      onChange={() => toggleCheckbox(idx)}
                    />
                  </td>
                  <td className="py-8 font-semibold text-indigo-600 cursor-pointer">
                    {student.name}
                  </td>
                  <td className="py-6 text-indigo-600">{student.id}</td>
                  <td className="py-6 text-gray-700">{student.date}</td>
                  <td className="py-6 text-gray-700">{student.parent}</td>
                  <td className="py-6 text-gray-700">{student.city}</td>
                  <td className="py-6 space-x-2 text-lg">
                    <PhoneIcon className="inline-block w-8 h-8" />
                    <MailIcon className="inline-block w-8 h-8" />
                  </td>
                  <td className="py-6">
                    {student.gradeColor.startsWith("#") ? (
                      <span
                        style={{ backgroundColor: student.gradeColor }}
                        className="text-white px-4 py-2 rounded-full text-sm"
                      >
                        {student.grade}
                      </span>
                    ) : (
                      <span
                        className={`text-white px-4 py-2 rounded-full text-sm ${student.gradeColor}`}
                      >
                        {student.grade}
                      </span>
                    )}
                  </td>
                  <td className="py-6 text-xl text-gray-500">⋮</td>
                </tr>
              );
            })}
          </tbody>
        </table>

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
    </div>
  );
}
