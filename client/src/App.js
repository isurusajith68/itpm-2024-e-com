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
import Inventory from "./pages/dilmi/inventory-manager/Inventory";
import AddProduct from "./pages/dilmi/inventory-manager/AddProduct";
import ProductsList from "./pages/dilmi/inventory-manager/ProductsList";
import EditProduct from "./pages/dilmi/inventory-manager/EditProduct";
import Supply from "./pages/Piyumal/supply-manager/Supply";
import AddSupplier from "./pages/Piyumal/supply-manager/AddSupplier";
import SupplierList from "./pages/Piyumal/supply-manager/SupplierList";
import EditSupplier from "./pages/Piyumal/supply-manager/EditSupplier";
import PromotionManager from "./pages/maneth/promotion-manager/PromotionManager";
import PromotionItems from "./pages/maneth/promotion-manager/PromotionItems";
import AddCoupon from "./pages/maneth/promotion-manager/AddCoupon";
import CouponList from "./pages/maneth/promotion-manager/CouponList";
import EditCoupon from "./pages/maneth/promotion-manager/EditCoupon";
import ProductPage from "./pages/ProductPage";
import SupplyRequests from "./pages/Piyumal/supply-manager/SupplyRequests";
import Cart from "./pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

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
        <Route
          path="/dashboard/supply/request-list"
          element={<SupplyRequests />}
        />

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

        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
