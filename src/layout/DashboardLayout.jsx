import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightPanel from "../components/RightPanel";

export default function DashboardLayout({ children }) {
    return (
        <div className="flex bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex-col ">
                <Navbar />
                <main className="flex-1 p-4">{children}</main>
            </div>
            <div>
                <RightPanel />
            </div>
        </div>
    )
}
