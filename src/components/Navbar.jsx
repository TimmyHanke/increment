import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Navbar
              <span className="badge rounded-pill bg-secondary ms-2">hej</span>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
