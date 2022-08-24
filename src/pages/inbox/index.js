import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";

export default function InboxLayout() {
  return (
    <div className="p-5">
      <div className="border border-gray-300 bg-white rounded h-[calc(100vh-97px)] flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
