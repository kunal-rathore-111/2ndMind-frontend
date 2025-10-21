
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SignUp } from "./components/signComp/Signup";
import { SignIn } from "./components/signComp/Signin";
import { Dashboard } from "./components/Dashboard";

const App = () => {

  return <BrowserRouter>
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>

}


export default App;