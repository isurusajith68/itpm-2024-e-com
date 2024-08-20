import { useEffect, useState } from "react";
import { FaOpencart } from "react-icons/fa6";

import { MdOutlinePriceChange } from "react-icons/md";
import { Link } from "react-router-dom";
import { Divider } from "@nextui-org/divider";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPriceChange } from "react-icons/md";
const SideBar = () => {
  const pathname = window.location.pathname;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(user));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    window.location.href = "/login";
  };
  return (
    <div className="sticky left-0 top-0 bg-white  w-80 flex flex-col justify-between rounded-lg  shadow-lg">
      <div className="px-2">
        <Link
          to="/dashboard"
          className="flex gap-5 items-center justify-center mt-6 p-2"
        >
          <FaOpencart size={40} className="text-blue-700 font-bold" />
          <span>
            <h1 className="text-2xl font-semibold text-blue-700">
              E - Dashboard
            </h1>
          </span>
        </Link>
        <Divider className="mt-4" />
        <div className="flex flex-col">
          <div className="flex flex-col px-4 mt-2 gap-4 border-t p-2 border-white">
            <Link
              to="/dashboard/staff"
              className={
                pathname.startsWith("/dashboard/staff")
                  ? "p-2  flex gap-2 text-blue-600 hover:bg-blue-800 hover:rounded-lg border transition duration-300 border-white shadow-sm bg-blue-900 rounded-lg cursor-pointer  items-center"
                  : "p-2  flex gap-2 hover:bg-blue-500 hover:rounded-lg border transition duration-300  border-white shadow-sm bg-blue-700 rounded-lg cursor-pointer  items-center"
              }
            >
              <IoMdPersonAdd size={20} className="text-white" />
              <span className="ml-2 text-white">Staff Management</span>
            </Link>
          </div>
          <div className="flex flex-col px-4 mt-2 gap-4 border-t p-2 border-white">
            <Link
              to="/dashboard/salary"
              className={
                pathname.startsWith("/dashboard/salary")
                  ? "p-2  flex gap-2 text-blue-600 hover:bg-blue-800 hover:rounded-lg border transition duration-300 border-white shadow-sm bg-blue-900 rounded-lg cursor-pointer  items-center"
                  : "p-2  flex gap-2 hover:bg-blue-500 hover:rounded-lg border transition duration-300  border-white shadow-sm bg-blue-700 rounded-lg cursor-pointer  items-center"
              }
            >
              <MdOutlinePriceChange size={20} className="text-white" />
              <span className="ml-2 text-white">Salary Management</span>
            </Link>
          </div>
          <div className="flex flex-col px-4 gap-4 border-t p-2 border-white ">
            <Link
              to="/dashboard/products"
              className={
                pathname.startsWith("/dashboard/products")
                  ? "p-2  flex gap-2 text-blue-800 hover:bg-blue-500 hover:rounded-lg border transition duration-300 border-white shadow-sm bg-blue-900 rounded-lg cursor-pointer items-center"
                  : "p-2  flex gap-2 hover:bg-blue-500 hover:rounded-lg border transition duration-300 border-white shadow-sm bg-blue-700 rounded-lg cursor-pointer  items-center"
              }
            >
              <MdPriceChange size={20} className="text-white" />
              <span className="ml-2 text-white">Products</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-4 gap-4 border-t p-2 border-white mb-4">
        <button
          onClick={handleLogout}
          className="p-2  flex gap-2 text-blue-600 hover:bg-red-500 hover:rounded-lg border transition duration-300 border-white shadow-sm bg-red-700 rounded-lg cursor-pointer items-center"
        >
          <RiLogoutBoxLine size={20} className="text-white" />
          <span className="ml-2 text-white">Logout</span>
        </button>
      </div>
    </div>
  );
};
export default SideBar;
