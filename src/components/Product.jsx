import React, { Component } from "react";

class Product extends Component {
  formatQuantity() {
    const quantity = this.props.product.quantity;
    return quantity === 0 ? "Zero" : quantity;
  }
  getBadgeClasses() {
    let classes = "badge me-2 ";
    classes +=
      this.props.product.quantity === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }

  render() {
    const { onIncrement, onDelete, onDecrement, product } = this.props;
    return (
      <div className="row m-2">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>
            {this.formatQuantity()}
          </span>
        </div>
        <div className="col">
          <span className="m-2">
            <button
              className="btn btn-secondary"
              onClick={() => onIncrement(product)}
            >
              +
            </button>
          </span>
          <span>
            <button
              className="btn btn-secondary"
              onClick={() => onDecrement(product)}
              disabled={product.quantity === 0}
            >
              -
            </button>
          </span>
          <span className="m-2">
            <button
              className="btn btn-danger"
              onClick={() => this.props.onDelete(this.props.product.id)}
            >
              X
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Product;
