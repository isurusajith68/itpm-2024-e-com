import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import DashboardStaff from "./pages/shanika/staff-management/DashboardStaff";
import DashboardAddStaff from "./pages/shanika/staff-management/DashboardAddStaff";
import DashboardEditStaff from "./pages/shanika/staff-management/DashboardEditStaff";
import DashboardStaffList from "./pages/shanika/staff-management/DashboardStaffList";
// import DashboardProducts from "./pages/shanika/product-management/DashboardProducts";
import DashboardSalary from "./pages/shanika/salary-management/DashboardSalary";
import CalculateSalary from "./pages/shanika/salary-management/CalculateSalary";
import SalaryPayments from "./pages/shanika/salary-management/SalaryPayments";
import EditSalary from "./pages/shanika/salary-management/EditSalary";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/staff" element={<DashboardStaff />} />
        <Route path="/dashboard/staff/add" element={<DashboardAddStaff />} />
        <Route
          path="/dashboard/staff/edit/:id"
          element={<DashboardEditStaff />}
        />
        <Route path="/dashboard/staff/list" element={<DashboardStaffList />} />
        {/* <Route path="/dashboard/products" element={<DashboardProducts />} /> */}
        <Route path="/dashboard/salary" element={<DashboardSalary />} />
        <Route path="/dashboard/salary/add" element={<CalculateSalary />} />
        <Route path="/dashboard/salary/list" element={<SalaryPayments />} />
        <Route
          path="/dashboard/salary/edit/:id"
          element={<EditSalary />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
