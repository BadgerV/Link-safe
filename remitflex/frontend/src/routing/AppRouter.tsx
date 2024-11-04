import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomHashLoader } from "../components/HashLoader/Hashloader";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const LandingPage = lazy(() => import("../pages/Landing"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Bills = lazy(() => import("../pages/Bills"));
const SendMoney = lazy(() => import("../pages/SendMoney"));
const VaultPage = lazy(() => import("../pages/VaultScanner"));
const ServicePay = lazy(() => import("../pages/ServicePay"));
const AppRouter = () => {
  const vault = useSelector((state: RootState) => state?.currentUser?.currentVault);

  return (
    <Suspense fallback={<CustomHashLoader color="#409099" size={60} />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app/:vaultKey" element={<VaultPage />} />
        <Route path="/dashboard" element={vault ? <Dashboard /> : <VaultPage />} />
        <Route path="/products" element={vault ? <Bills /> : <VaultPage />} />
        <Route path="/remit" element={vault ? <SendMoney /> : <VaultPage />} />
        <Route path="/app" element={<VaultPage />} />
        <Route path="/services/pay" element={vault ? <ServicePay /> : <VaultPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
