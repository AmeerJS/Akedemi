export default function FoodMenu() {
  return (
    <div className="bg-white rounded-2xl p-5">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Current Food Menus
      </h2>

      <div className="space-y-4">
        {/* Menu Item */}
        <div className="w-full">
          <div className="w-full h-28 bg-gray-200 rounded-xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Dish Name</h3>
          <p className="text-xs text-gray-500 mt-1">
            Short description of the dish goes here.
          </p>
        </div>

        {/* Repeat the structure for additional placeholders */}
        <div className="w-full">
          <div className="w-full h-28 bg-gray-200 rounded-xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Dish Name</h3>
          <p className="text-xs text-gray-500 mt-1">
            Short description of the dish goes here.
          </p>
        </div>

        <div className="w-full">
          <div className="w-full h-28 bg-gray-200 rounded-xl mb-2" />
          <h3 className="text-sm font-semibold text-gray-800">Dish Name</h3>
          <p className="text-xs text-gray-500 mt-1">
            Short description of the dish goes here.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-15 py-4 bg-[#EDEBFB] text-[#4D44B5] rounded-full text-sm font-bold hover:bg-[#dad6fa] transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
