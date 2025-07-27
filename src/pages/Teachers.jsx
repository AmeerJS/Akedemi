// src/pages/TeachersPage.jsx
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TeacherCard from "../components/TeacherCard";

const teachers = [
  { name: "Dimitres Viga", subject: "Mathematics" },
  { name: "Tom Housenburg", subject: "Science" },
  { name: "Dana Benevista", subject: "Art" },
  { name: "Salvadore Morbeau", subject: "Biology" },
  { name: "Maria Historia", subject: "History" },
  { name: "Jack Sally", subject: "Physics" },
  { name: "Lula Beatrice", subject: "Algorithm" },
  { name: "Nella Vita", subject: "English" },
  { name: "Nadia Laravela", subject: "Programming" },
  { name: "Dakota Farral", subject: "Science" },
  { name: "Miranda Adila", subject: "Art" },
  { name: "Indiana Barker", subject: "Biology" },
];

export default function Teachers() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          {/* Top controls */}
          <div className="flex justify-end mb-6 gap-4">
            <select className="appearance-none text-sm px-9 py-2 border border-[#4D44B5] rounded-full bg-gray-100 text-[#4D44B5] hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition">
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <button className="bg-[#4D44B5] text-white px-5 py-2 rounded-full hover:bg-indigo-700 hover:shadow-lg transition font-medium">
              + New Teacher
            </button>
          </div>

          {/* Teacher Cards Grid */}
          <div className="grid grid-cols-4 gap-6">
            {teachers.map((teacher, idx) => (
              <TeacherCard
                key={idx}
                name={teacher.name}
                subject={teacher.subject}
              />
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
      </div>
    </div>
  );
}
