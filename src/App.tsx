import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import NewPassword from "./pages/NewPassword";
import OtpVerification from "./pages/OtpVerification";
import Dashboard from "./pages/Dashboard";
import DocumentReception from "./pages/DocumentReception";
import DocumentDetail from "./pages/DocumentDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/new-password" element={<NewPassword />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/document-reception" element={<DocumentReception />} />
        <Route path="/document-detail" element={<DocumentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;