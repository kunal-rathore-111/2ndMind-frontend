import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./Terms";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Share from "./pages/Share";
import ProtectedRoute from "./pages/ProtectedRoute";




export default function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Landing />} />
      <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/share/:hash" element={<Share />} />
      <Route path="/" element={<Terms />} />
    </Routes>
  </BrowserRouter>
}