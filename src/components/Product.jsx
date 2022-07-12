import React, { Component } from "react";

class Product extends Component {
  formatQuantity() {
    const quantity = this.props.onQuantity;
    return quantity === 0 ? "Zero" : quantity;
  }

  render() {
    let classes = "badge me-2 ";
    classes +=
      this.props.onQuantity === 0 ? "bg-warning text-dark" : "bg-primary";
    return (
      <div className="m-2">
        <span className={classes}>{this.formatQuantity()}</span>
        <span>
          <span className="m-2">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => this.props.onIncrement(this.props.product)}
            >
              +
            </button>
          </span>
          <span>
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => this.props.onDecrement(this.props.product)}
            >
              -
            </button>
          </span>
          <span className="m-2">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              X
            </button>
          </span>
        </span>
      </div>
    );
  }
}

export default Product;
