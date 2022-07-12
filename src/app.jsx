import React, { Component } from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

class app extends Component {
  state = {
    products: [
      { id: 1, quantity: 2 },
      { id: 2, quantity: 8 },
      { id: 3, quantity: 6 },
      { id: 4, quantity: 9 },
    ],
  };
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDecrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity--;
    this.setState({ products });
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
    const { products } = this.state;
    return (
      <>
        <Navbar productCount={products.length} />

        <Products
          products={this.state.products}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          productQuantity={this.state.products.quantity}
        />
      </>
    );
  }
}

export default app;
