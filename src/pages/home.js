import React, { Fragment } from "react";
import Navbar from "../components/Navbar";
import PostList from "../components/PostList";

function Home() {
  return (
    <Fragment>
      <Navbar />
      <PostList />
    </Fragment>
  );
}

export default Home;
