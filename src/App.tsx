import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";



export default function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/privacy' element={<LandingPage />} />
        <Route path='/terms' element={<LandingPage />} />
        <Route path='/contact' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}