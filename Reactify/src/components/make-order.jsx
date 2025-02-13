import React, { useState } from "react";
// import "../css/make-order.css";

function CoffeeOrderForm() {


  return (
    <div className="container">
      <h2 className="text-center mb-4">Order Your Coffee Now</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="col-md-6">
            <label htmlFor="coffeeType" className="form-label">Coffee Type</label>
            <select className="form-select" id="coffeeType">
              <option>Espresso</option>
              <option>Americano</option>
              <option>Cappuccino</option>
              <option>Latte</option>
              <option>Mocha</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="size" className="form-label">Size</label>
            <select className="form-select" id="size">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="sugar" className="form-label">Sugar Level</label>
            <select className="form-select" id="sugar">
              <option>No Sugar</option>
              <option>Less Sugar</option>
              <option>Normal</option>
              <option>Extra Sweet</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="specialInstructions" className="form-label">Special Instructions</label>
          <textarea className="form-control" id="specialInstructions" rows="3" placeholder="Any special requests?"></textarea>
        </div>

        <button type="submit" className="btn btn-submit text-danger bg-dark w-100">Place Order</button>
      </form>


    </div>
  );
}

export default CoffeeOrderForm;
