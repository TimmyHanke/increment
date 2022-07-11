import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div>
        <span>
          <button type="button" className="btn btn-primary">
            0 <span className="badge bg-secondary"></span>
          </button>
          <span>
            <button type="button" class="btn btn-secondary">
              +
            </button>
          </span>
          <span>
            <button type="button" class="btn btn-secondary">
              -
            </button>
          </span>
          <span>
            <button type="button" class="btn btn-danger">
              X
            </button>
          </span>
        </span>
      </div>
    );
  }
}

export default Product;
