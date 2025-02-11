import { useState } from "react";
import ProductCard from "./productCard";

function NewProductCard() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showProducts, setShowProducts] = useState(true);

  let products = [
    {
      id: 1,
      name: "Playstation",
      image: "https://images.pexels.com/photos/4219892/pexels-photo-4219892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 200,
      category: "Electronic",
      quantity: 0,
      description: "Gray Sony Play Station Game Console."

    },

    {
      id: 2,
      name: "iPhone 8 pro",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 250,
      category: "Mobile",
      quantity: 9,
      description: "Silver Iphone X With Airpods."
    },

    {
      id: 3,
      name: "Samsung mobile phone",
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 350,
      category: "Mobile",
      quantity: 9,
      description: "Silver Samsung Smartphone."
    },

    {
      id: 4,
      name: "Canon EOS M50 Camera",
      image: "https://images.pexels.com/photos/15253216/pexels-photo-15253216/free-photo-of-a-close-up-shot-of-a-canon-eos-m50.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 150,
      category: "Camera",
      quantity: 5,
      description: "A Close-Up Shot of a Canon EOS M50."
    },

    {
      id: 5,
      name: "School Pen",
      image: "https://images.pexels.com/photos/544115/pexels-photo-544115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 75,
      category: "School",
      quantity: 1,
      description: "White Spiral Notebook Beside Orange Pencil."
    },

    {
      id: 6,
      name: "School Supplies",
      image: "https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 500,
      category: "School",
      quantity: 12,
      description: "Pencils in Stainless Steel Bucket."
    },

    {
      id: 7,
      name: "Bike",
      image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 50,
      category: "Vehicle",
      quantity: 1,
      description: "Black and White Hardtail Bike on Brown Road Between Trees."
    },

    {
      id: 8,
      name: "Men Jeans",
      image: "https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 32,
      category: "Fashion",
      quantity: 5,
      description: "Blue Jeans. "
    },

    {
      id: 9,
      name: "Women Dress",
      image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 1200,
      category: "Fashion",
      quantity: 1,
      description: "Photo of a Woman Wearing Green Dress."
    },

    {
      id: 10,
      name: "Digital Camera",
      image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 188,
      category: "Camera",
      quantity: 0,
      description: "Black Fujifilm Dslr Camera."
    },

    {
      id: 11,
      name: "Sibaristica Coffee",
      image: "https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 132,
      category: "Coffee",
      quantity: 10,
      description: "White and Black Plastic Pack."
    },

    {
      id: 12,
      name: "Red Bell Pepper",
      image: "https://images.pexels.com/photos/4066828/pexels-photo-4066828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      price: 22,
      category: "Vegetable",
      quantity: 0,
      description: "Red Bell Pepper."
    },



  ]

  let categories = ["All", ...new Set(products.map((p) => p.category))]

  const filteredProducts = selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="p-3">
      <h1 className="m-5">All Products</h1>

      <button className="btn btn-secondary m-2"
        onClick={() => setShowProducts(!showProducts)}

      > {showProducts ? "Hide Products" : "Show products"}  </button>

      {showProducts && (
        <div className="mb-4">
          <h4 className="text text-dark">You can choose between categories</h4>
          <span className="text text-muted">For easy search 👌</span>
          <ul className="list-inline">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`list-inline-item badge p-2 m-1 ${selectedCategory === category ? 'bg-primary' : 'bg-secondary'}`}
                onClick={() => setSelectedCategory(category)}
                style={{ cursor: "pointer" }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div> */}

      {showProducts && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default NewProductCard;
