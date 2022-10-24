import * as React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  // throw new Error("error!!!");
  return (
    <div className="page-content">
      <h3> Our Services </h3> <br />
      <p>We offer the best service.</p> <br />
      <p>Click to see the list of Users on our service</p>
      <Link to="/users">Users</Link> <br />
      <Link to="/us">Contact</Link>
    </div>
  );
};

export default Services;
