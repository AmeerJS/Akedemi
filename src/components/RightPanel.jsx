import RecentStudents from "./RecentStudent";
import Messages from "./Messages";
import FoodMenu from "./FoodMenu";

export default function RightPanel() {
  return (
    <div className="w-[300px] p-4 bg-white flex flex-col gap-4">
      <RecentStudents />
      <Messages />
      <FoodMenu />
    </div>
  );
}
