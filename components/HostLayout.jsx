import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
    
      <nav className="host-nav">
        {/* The role of 'end' is important to solve a problem of /host is always active ! you can try it without 'end' */}
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? "my-link-layout" : null)}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) => (isActive ? "my-link-layout" : null)}
        >
          Income
        </NavLink>

        <NavLink
          to="/host/vans"
          className={({ isActive }) => (isActive ? "my-link-layout" : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/reviews"
          className={({ isActive }) => (isActive ? "my-link-layout" : null)}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
