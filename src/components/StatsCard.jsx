export default function StatsCard({ label, value, icon, color, textColor }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 flex items-center space-x-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
        <span className={`text-xl ${textColor}`}>{icon}</span>
      </div>
      <div>
        <h4 className="text-sm text-gray-500">{label}</h4>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
}
