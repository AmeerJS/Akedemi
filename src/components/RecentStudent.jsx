import EmailIcon from "../assets/icons/email.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";

const students = [
  {
    initials: "SW",
    name: "Samantha Wilson",
    status: "Enrolled",
    number: "1",
    active: true,
  },
  {
    initials: "TS",
    name: "Tony Soup",
    status: "Enrolled",
    number: "2",
    active: false,
  },
  {
    initials: "EH",
    name: "Emaan Haqqi",
    status: "Enrolled",
    number: "3",
    active: false,
  },
  {
    initials: "AK",
    name: "Ahsan Khan",
    status: "Enrolled",
    number: "4",
    active: false,
  },
  {
    initials: "NA",
    name: "Nashit Ali",
    status: "Enrolled",
    number: "5",
    active: false,
  },
];

export default function RecentStudents() {
  return (
    <div className="bg-white rounded-2xl p-4 mb-4">
      {/* Heading */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-gray-800 pr-13">
            Recent Students
          </h2>
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4D44B5]">
            <PlusIcon className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="space-y-6">
        {students.map((student, idx) => (
          <div key={idx} className="flex items-center justify-between">
            {/* Left: Avatar + Info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-200 text-white flex items-center justify-center font-semibold"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {student.name}
                </p>
                <p className="text-xs text-gray-400">{student.status}</p>
              </div>
            </div>

            {/* Right: Email Icon Button */}
            <button className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 bg-white text-gray-500 hover:bg-[#4D44B5] hover:text-white transition">
              <EmailIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button className="px-15 py-4 bg-[#EDEBFB] text-[#4D44B5] rounded-full text-sm font-bold hover:bg-[#dad6fa] transition">
          View More
        </button>
      </div>
    </div>
  );
}
