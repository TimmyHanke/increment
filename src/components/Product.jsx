import React, { Component } from "react";

class Product extends Component {
  formatQuantity() {
    const quantity = this.props.onQuantity;
    return quantity === 0 ? "Zero" : quantity;
  }
  getBadgeClasses() {
    let classes = "badge me-2 ";
    classes +=
      this.props.onQuantity === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>

        <span className="m-2">
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onIncrement(this.props.onProduct)}
          >
            +
          </button>
        </span>
        <span>
          <button
            className="btn btn-secondary"
            onClick={() => this.props.onDecrement(this.props.onProduct)}
          >
            -
          </button>
        </span>
        <span className="m-2">
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.id)}
          >
            X
          </button>
        </span>
      </div>
    );
  }
}

export default Product;
