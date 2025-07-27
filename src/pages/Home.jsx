import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#4B2AAD] to-[#4D44B5] text-white px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight drop-shadow">
            Welcome to <span>Akademi</span>
          </h1>
          <p className="text-lg mb-8 opacity-90">
            Your smart school companion — managing students, teachers, events, and more.
          </p>
        </div>
      </header>

      {/* Feature Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#4D44B5]">
          What You Can Do with Akademi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            {
              title: "Student Records",
              desc: "Maintain comprehensive student profiles and monitor progress.",
            },
            {
              title: "Finance Management",
              desc: "Track school budgets, payments, and expenses effortlessly.",
            },
            {
              title: "Food Menus",
              desc: "Design nutritious, rotating meal plans with daily updates.",
            },
            {
              title: "Event Planning",
              desc: "Organize school events and academic calendars smoothly.",
            },
            {
              title: "Secure Messaging",
              desc: "Communicate with staff and students using built-in chat.",
            },
            {
              title: "Role Management",
              desc: "Manage admin, teachers, and student permissions easily.",
            },
          ].map(({ title, desc, emoji }, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl mb-4">{emoji}</div>
              <h3 className="text-xl font-semibold text-[#4D44B5] mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#4D44B5] text-white py-16 text-center px-4">
        <h2 className="text-2xl font-semibold mb-4">Ready to streamline your school operations?</h2>
        <Link
          to="/dashboard"
          className="bg-white text-[#4B2AAD] font-semibold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-[#4B2AAD] text-white text-center py-6 text-sm mt-auto">
        © {new Date().getFullYear()} Akademi. Made with ❤️ by Ameer Ali
      </footer>
    </div>
  );
}
