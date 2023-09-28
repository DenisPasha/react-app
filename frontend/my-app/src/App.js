import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import NoPage from "./NoPage";
import Contact from "./Contact";
import Navbar from "./Navbar";
import SingIn from "./SingIn";
import Dashboard from "./Dashboard";
import Profile from "./Profile";


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/login" element={<SingIn/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
