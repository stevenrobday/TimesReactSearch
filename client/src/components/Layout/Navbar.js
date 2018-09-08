//make a navbar

import React from "react";

export const Navbar = () => (
  <nav className="navbar is-info" aria-label="main navigation">
    <div className="navbar-brand">
        <div className="has-text-white is-size-3">
          <i className="far fa-newspaper"></i> New York Times Search
        </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item has-text-white" href="/home">
          Home
        </a>
        <a className="navbar-item has-text-white" href="/saved">
          Saved
        </a>
      </div>
    </div>
  </nav>
);