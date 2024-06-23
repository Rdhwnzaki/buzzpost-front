import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-slate-800">
      <div className="flex-1">
        <span className="text-xl text-white font-bold">Buzz</span>
        <span className="text-xl text-black bg-amber-600 font-bold rounded-sm ms-1 px-1">Post</span>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
