import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 8 },
      { id: 3, quantity: 6 },
      { id: 4, quantity: 9 },
    ],
  };
  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  handleDecrement = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };
  handleDelete = (id) => {
    const products = this.state.products.filter((p) => p.id !== id);
    this.setState({ products });
  };
  handleReset = () => {
    const products = this.state.products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    return (
      <>
        <button onClick={this.handleReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.state.products.map((product) => (
          <Product
            key={product.id}
            onQuantity={product.quantity}
            id={product.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
      </>
    );
  }
}

export default Products;
