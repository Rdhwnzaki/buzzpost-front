import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  // Navigate,
  // Outlet,
} from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";

function Router() {
  //   const PrivateRoute = () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       return <Outlet />;
  //     } else {
  //       Swal.fire("Warning", "Please login first", "error");
  //       return <Navigate to='/login' />;
  //     }
  //   };
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<Register />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
