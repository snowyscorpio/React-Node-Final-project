import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import axios from 'axios';

function CreatePost() {
  const navigate = useNavigate();
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    detailedDescription: '',
    instruction: '',
    price: null,
    image: null,
    type: '',
  });

  useEffect(() => {
    console.log('CreatePost component mounted');
  }, []);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      if (file) {
        setNewItem((prev) => ({
          ...prev,
          image: file,
        }));
      }
    } else {
      setNewItem((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newItem.type) {
      window.alert('Please select an item type (Bouquet or Houseplant)');
      return;
    }

    if (!newItem.image) {
      window.alert('Please upload an image');
      return;
    }

    try {

      const formData = new FormData();
      formData.append('name', newItem.name);
      formData.append('description', newItem.description);
      formData.append('detailedDescription', newItem.detailedDescription);
      formData.append('instruction', newItem.instruction);
      formData.append('type', newItem.type);
      formData.append('price', newItem.price);
      formData.append('stock', newItem.stock);
      formData.append('image', newItem.image);

      await axios.post('/products', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      console.log(formData);
      window.alert('Item added successfully!');

      setNewItem({
        name: '',
        description: '',
        detailedDescription: '',
        instruction: '',
        price: null,
        image: null,
        type: '',
        stock: 0,
      });

      navigate('/');

    } catch (error) {
      console.error('Error adding item:', error);
      window.alert('Error adding item');
    }
  };




  return (
    <div className="main">
      <Title />
      <div className="container">
        <h2 className="add-item-title">Add a New Item</h2>
        <div className="add-item-container">
          <form onSubmit={handleSubmit} className="add-item-form">
            <input type="text" name="name" placeholder="Name" value={newItem.name} onChange={handleChange} required />
            <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleChange} required />
            <textarea name="detailedDescription" placeholder="Detailed Description" value={newItem.detailedDescription} onChange={handleChange} required />
            <textarea name="instruction" placeholder="Care Instructions" value={newItem.instruction} onChange={handleChange} required />
            <input type="text" name="price" placeholder="Price" value={newItem.price} onChange={handleChange} required />
            <input type="text" name="stock" placeholder="Stock" value={newItem.stock} onChange={handleChange} required />
            <div className="file-input-container">
              <input type="file" name="image" accept="image/*" onChange={handleChange} required className="file-input" />
              {newItem.image && <img src={URL.createObjectURL(newItem.image)} alt="Preview" className="image-preview" />}
            </div>

            <p className="choose-item-type-p">Choose Item's Type</p>
            <div className="choose-item-type">
              <label>
                <input type="radio" name="type" value="bouquet" checked={newItem.type === 'bouquet'} onChange={handleChange} required /> Bouquet
              </label>
              <label>
                <input type="radio" name="type" value="houseplant" checked={newItem.type === 'houseplant'} onChange={handleChange} required /> Houseplant
              </label>
            </div>

            <button type="submit" disabled={!newItem.type}>Add Item</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
