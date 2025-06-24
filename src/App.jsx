import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import OperationDashboard from "./pages/OperationDashboard";
import BillingReports from "./pages/BillingReports";
import ManagementDashboard from "./pages/ManagementDashboard";
import StationOverview from "./pages/StationOverview";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="overview" element={<StationOverview />} />
        <Route path="operation" element={<OperationDashboard />} />
        <Route path="management" element={<ManagementDashboard />} />
        <Route path="billingReports" element={<BillingReports />} />
      </Route>
    </Routes>
  )
}

export default App