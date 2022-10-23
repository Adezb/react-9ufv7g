import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import "./style.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Users from "./pages/Users";
import ErrorPage from "./pages/ErrorPage";
import Fallback from "./pages/Fallback";

const MyNavLink = ({ to, ...props }) => {
  let activeStyle = {
    textDecoration: "underline",
    color: "green",
    transition: "all 2s",
  };

  return (
    <NavLink
      style={({ isActive }) =>
        isActive ? activeStyle : { textDecoration: "none", color: "white" }
      }
      to={to}
      end
      {...props}
    />
  );
};

function NavBar() {
  return (
    <nav className="nav-bar">
      <MyNavLink to="/" className="nav-link">
        Home
      </MyNavLink>
      <MyNavLink to="/services" className="nav-link">
        Services
      </MyNavLink>
      <MyNavLink to="/users" className="nav-link">
        Users
      </MyNavLink>
    </nav>
  );
}

export default function App() {
  const errorHandler = (error, errorInfo) => {
    console.log("Logging", error, errorInfo);
  };

  return (
    <div>
      <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="users" element={<Users />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}
