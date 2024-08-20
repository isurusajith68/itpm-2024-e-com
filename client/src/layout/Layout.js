import DashboardNavbar from "../components/DashboardNavbar";
import SideBar from "../components/SideBar";

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen min-h-screen bg-[#eef3fd] p-4 ">
      <SideBar />
      <div className="flex flex-col w-full pl-5  gap-4">
        <DashboardNavbar />
        <div className="flex-grow bg-white  rounded-lg shadow-lg">{children}</div>
      </div>
    </div>
  );
};
export default Layout;
