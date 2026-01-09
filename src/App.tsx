import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ErrorPage from "./pages/ErrorPage";



export default function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<LandingPage />} />
        <Route path='/sign-up' element={<LandingPage />} />
        <Route path='/privacy' element={<LandingPage />} />
        <Route path='/terms' element={<LandingPage />} />
        <Route path='/contact' element={<LandingPage />} />
        <Route path='/home' element={<LandingPage />} />
        <Route path='/*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}