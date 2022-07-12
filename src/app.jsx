import React, { Component } from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

class app extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container mt-4">
          <Products />
        </div>
      </>
    );
  }
}

export default app;
