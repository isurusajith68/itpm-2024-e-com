import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/product" element={<ProductPage />} />

        {/* Shanika */}
        <Route path="/dashboard/staff" element={<DashboardStaff />} />
        <Route path="/dashboard/staff/add" element={<DashboardAddStaff />} />
        <Route
          path="/dashboard/staff/edit/:id"
          element={<DashboardEditStaff />}
        />
        <Route path="/dashboard/staff/list" element={<DashboardStaffList />} />

        {/* Salary management */}
        <Route path="/dashboard/salary" element={<DashboardSalary />} />
        <Route path="/dashboard/salary/add" element={<CalculateSalary />} />
        <Route path="/dashboard/salary/list" element={<SalaryPayments />} />
        <Route path="/dashboard/salary/edit/:id" element={<EditSalary />} />

        {/* Product management */}
        <Route path="/dashboard/products" element={<Inventory />} />
        <Route path="/dashboard/products/add" element={<AddProduct />} />
        <Route path="/dashboard/products/list" element={<ProductsList />} />
        <Route path="/dashboard/products/edit/:id" element={<EditProduct />} />

        {/*Supply manager*/}
        <Route path="/dashboard/supply" element={<Supply />} />
        <Route path="/dashboard/supply/add" element={<AddSupplier />} />
        <Route path="/dashboard/supply/list" element={<SupplierList />} />
        <Route path="/dashboard/supply/edit/:id" element={<EditSupplier />} />

        {/*Promotion manager*/}
        <Route path="/dashboard/promotion" element={<PromotionManager />} />
        <Route path="/dashboard/promotion/items" element={<PromotionItems />} />
        <Route path="/dashboard/promotion/coupon/add" element={<AddCoupon />} />
        <Route
          path="/dashboard/promotion/coupon/list"
          element={<CouponList />}
        />
        <Route
          path="/dashboard/promotion/coupon/edit/:id"
          element={<EditCoupon />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
