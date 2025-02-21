import React, { useContext, useState } from "react";
import { NavLink, Outlet } from "react-router"; 
import {
  FaHome,
  FaUsers,
  FaBox,
  FaSignOutAlt,
  FaTruck,
  FaChartBar,
  FaClipboardList,
  FaStar,
  FaUser,
  FaTasks,
  FaShippingFast,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { AuthContext } from "../../Auth/AuthProvider";

const DashBoard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { path: "Add_Task", label: "Add Task", icon: <FaChartBar /> },
    { path: "All_Task", label: "All Task", icon: <FaChartBar /> },
  ];

  return (
    <div className="flex h-screen pt-16">
      {/* Sidebar */}
      <div className={`bg-[#3085d6] text-white p-4 transition-all ${isCollapsed ? "w-16" : "w-60"}`}>
        <button onClick={toggleSidebar} className="text-2xl mb-4">
          <IoMdMenu />
        </button>
        <nav className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 p-2 rounded ${isActive ? "bg-blue-700" : "hover:bg-blue-600"}`
              }
            >
              {item.icon}
              {!isCollapsed && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={logout}
          className="flex items-center gap-2 mt-4 p-2 bg-red-500 hover:bg-red-600 rounded"
        >
          <FaSignOutAlt />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
