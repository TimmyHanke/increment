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
  render() {
    return (
      <>
        {this.state.products.map((product) => (
          <Product
            onQuantity={this.state.products.quantity}
            onId={this.state.products.id}
          />
        ))}
      </>
    );
  }
}

export default Products;
