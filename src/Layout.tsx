import { BrowserRouter, Route, Routes } from "react-router";
import Landing from "./Pages/Landing";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import SharedProfile from "./Pages/SharedProfile";
import SharedContent from "./Pages/SharedContent";
import Docs from "./Pages/Docs";
import ErrorPage from "./Pages/ErrorPage";

export default function Layout() {
  return (
    <div className="flex min-h-screen max-w-screen flex-col items-center justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route
            path="/user/public/shared/profile"
            element={<SharedProfile />}
          />
          <Route
            path="/user/public/shared/content"
            element={<SharedContent />}
          />
          <Route path="/docs" element={<Docs />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
