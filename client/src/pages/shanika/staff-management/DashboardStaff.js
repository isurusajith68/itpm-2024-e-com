import Layout from "../../../layout/Layout";
import staff from "../../../assets/staff-management.png";
import listStaff from "../../../assets/accountable.png";
import { Link } from "react-router-dom";

const DashboardStaff = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-28  p-10 h-full items-center min-h-full">
        <Link
          className="bg-blue-700 max-w-[300px] flex-1 h-72 rounded-lg shadow-lg cursor-pointer hover:bg-blue-800 transition duration-300 border-2 border-blue-800"
          to="/dashboard/staff/add"
        >
          <div className="flex  justify-center items-center h-full flex-col gap-6">
            <img src={staff} alt="profile" className="h-32 w-32" />
            <span className="text-xl font-semibold text-white">Add Staff</span>
          </div>
        </Link>
        <Link
          to="/dashboard/staff/list"
          className="bg-blue-700 max-w-[300px] flex-1 h-72 rounded-lg shadow-lg cursor-pointer hover:bg-blue-800 transition duration-300 border-2 border-blue-800"
        >
          <div className="flex justify-center items-center h-full flex-col gap-6">
            <img src={listStaff} alt="profile" className="h-32 w-32" />
            <span className="text-xl font-semibold text-white">Staff List</span>
          </div>
        </Link>
      </div>
    </Layout>
  );
};
export default DashboardStaff;
