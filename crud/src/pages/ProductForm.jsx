import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { addNewProduct, editProduct, getProductById } from '../api/productsApi';
import { useParams } from 'react-router-dom';
import { FaPlus, FaEdit, FaTag, FaDollarSign, FaBox, FaAlignLeft, FaImage } from 'react-icons/fa';
import '../css/ProductForm.css';

export default function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    if (id != 0) {
      getProductById(id)
        .then((response) => setFormData(response.data))
        .catch((error) => { console.error(error) })
    }
  }, [id])

  const inputHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const productHandler = async (e) => {
    e.preventDefault()
    try {
      if (id == 0) {
        await addNewProduct(formData)
      } else {
        await editProduct(id, formData)
      }
      navigate('/products')
    } catch (error) {
      console.error("Operation failed:", error);
    }
  }

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          {id == 0 ? (
            <>
              <FaPlus className="title-icon" />
              Add New Product
            </>
          ) : (
            <>
              <FaEdit className="title-icon" />
              Edit Product
            </>
          )}
        </h2>

        <form onSubmit={productHandler} className="product-form">
          <div className="form-grid">
            {/* Name Field */}
            <div className="input-group">
              <FaTag className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={inputHandler}
                required
              />
            </div>

            {/* Price Field */}
            <div className="input-group">
              <FaDollarSign className="input-icon" />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={inputHandler}
                required
              />
            </div>

            {/* Category Field */}
            <div className="input-group">
              <FaTag className="input-icon" />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={inputHandler}
                required
              />
            </div>

            {/* Quantity Field */}
            <div className="input-group">
              <FaBox className="input-icon" />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={inputHandler}
                required
              />
            </div>

            {/* Description Field */}
            <div className="input-group full-width">
              <FaAlignLeft className="input-icon" />
              <textarea
                name="description"
                placeholder="Product Description"
                value={formData.description}
                onChange={inputHandler}
                required
              />
            </div>

            {/* Image URL Field */}
            <div className="input-group full-width">
              <FaImage className="input-icon" />
              <input
                type="url"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={inputHandler}
                required
              />
            </div>
          </div>

          <button type="submit" className="submit-button">
            {id == 0 ? "Create Product" : "Update Product"}
          </button>
        </form>
      </div>
    </div>
  )
}