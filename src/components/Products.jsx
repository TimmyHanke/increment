import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {this.props.products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            products={this.props.products}
          />
        ))}
      </>
    );
  }
}

export default Products;
