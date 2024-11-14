import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

const router = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/details/:id" element={<CarDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
};

export default router;
