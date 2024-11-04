import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import LandingPage from "../pages/Landing";
// import CreateLinkPage from "../pages/Create";
// import LaunchVaultPage from "../pages/LaunchVault";
import CustomHashLoader from "../components/CustomHashLoader";
const LandingPage = lazy(() => import("../pages/Landing"));
const CreateLinkPage = lazy(() => import("../pages/Create"));
const LaunchVaultPage = lazy(() => import("../pages/LaunchVault"));

const AppRouter = () => {
  return (
    <Suspense fallback={<CustomHashLoader color="#014854" size={20} />}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreateLinkPage />} />
          <Route path="/:vaultKey" element={<LaunchVaultPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
