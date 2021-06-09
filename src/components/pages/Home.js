import React, { Fragment } from "react";
import Users from "./../users/Users";
import Search from "./../users/Search";
/**
 * @author
 * @function Home
 **/

const Home = (props) => {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
};

export default Home;
