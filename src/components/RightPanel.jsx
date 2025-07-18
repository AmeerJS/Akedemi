import RecentStudents from "./RightPanel/RecentStudent";
import Messages from "./RightPanel/Messages";
import FoodMenu from "./RightPanel/FoodMenu";

export default function RightPanel() {
  return (
    <div className="w-[300px] p-4 bg-white flex flex-col gap-4">
      <RecentStudents />
      <Messages />
      <FoodMenu />
    </div>
  );
}
