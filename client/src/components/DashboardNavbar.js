import { useEffect, useState } from "react";
import { FaMessage, FaUserGear } from "react-icons/fa6";
import { IoIosNotifications } from "react-icons/io";
import { Input } from "@nextui-org/react";
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
const DashboardNavbar = () => {
  const [user, setUser] = useState(null);
  console.log(user);
  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      window.location.href = "/login";
    }

    setUser(JSON.parse(user));
  }, []);

  return (
    <div>
      <nav className="bg-white p-2 rounded-lg ">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Input
              isClearable
              radius="full"
              placeholder="Type to search..."
              startContent={<IoSearch />}
            />
            <button className="bg-blue-600 text-white px-2 py-1 rounded-xl  h-10">
              Search
            </button>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="flex gap-2 items-center text-sm font-semibold text-green-500">
              <FaMessage size={16} className="text-green-500" />
              Message
            </div>
            <div className="flex gap-2 items-center text-sm font-semibold text-red-500">
              <IoIosNotifications size={20} />
              Notification
            </div>
            <div className="flex items-center gap-2 p-1 px-4 text-blue-500">
              <FaUserCircle size={20} />
              <div>
                <h1 className="font-semibold">{user?.username}</h1>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default DashboardNavbar;
