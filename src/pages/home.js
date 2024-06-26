import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

function Home() {
  return (
    <div className="bg-slate-900 text-white">
      <Navbar />
      <PostList />
    </div>
  );
}

export default Home;
