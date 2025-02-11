import React from "react";

function ProductCard({ product }) {

    let buttonClass = "btn ";
    let buttonText = "Buy Now";
    let isDisabled = false;


    if (product.quantity === 1) {
        buttonClass += "btn-danger";
        buttonText = "Hurry up, Buy Now";

    } else if (product.quantity === 0){
        buttonClass += "btn-secondary"
        buttonText = "Sorry, Not Available";
        isDisabled = true;
    } else {
        buttonClass += "btn-success";
    }


  return (
    <div className="col">
      <div className="card h-100">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text"><strong>Price:</strong> ${product.price}</p>
          <p className="card-text"><strong>Category:</strong> {product.category}</p>
          <p className="card-text"><strong>Quantity:</strong> {product.quantity}</p>
          <p className="card-text">{product.description}</p>
          <button className={buttonClass}  disabled={isDisabled}  style={{ cursor: isDisabled ? "not-allowed" : "pointer" }}
          >
            
            {buttonText}
            
            
            </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
