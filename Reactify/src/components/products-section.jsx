import React from "react";

function productsCategory() {

    let products = [
        {
            id: 1,
            name: "Product1",
            price: 250,
            category: "Category1",
            quantity: 10,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
        }
    ]

    return (
        <div className='bg-dark p-5 text-light'>
            <div className="container">
                <div className="row g-3">
                    <div className="col-sm-4 g-2 border rounded">
                        <div className='p-3'>
                            <h2>Product Name</h2>
                            <p>Price$</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default productsCategory;
