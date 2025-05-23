// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-light text-gray-800">Admin Dashboard</h1>
        <p className="text-sm text-gray-500">WFO Exception Tracker</p>
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/pending-requests"
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              Pending Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employee-uploads"
              className={({ isActive }) => 
                `block px-4 py-2 rounded-md ${isActive ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-100'}`
              }
            >
              EG Employee Uploads
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;