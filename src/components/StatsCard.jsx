export default function StatsCard({ label, value, icon, bgColor }) {
  return (
    <div className="rounded-xl shadow px-6 py-4 flex items-center space-x-4">
      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${bgColor}`}>{icon}</div>
      <div>
        <h4 className="text-sm text-gray-500">{label}</h4>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
