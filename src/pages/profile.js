import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import ProfileUser from "../components/Profile";

function Profile() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <ProfileUser />
    </div>
  );
}

export default Profile;
