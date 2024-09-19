import React, { useState } from 'react';
import axios from 'axios';

const UserDetailsForm = ({ userId, productId, quantity }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userDetails = { name, email, address };
            await axios.post('http://localhost:8000/api/cart/add', { 
                userId, 
                productId, 
                quantity,
                userDetails
            });
            alert('Product added to cart with user details!');
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Address</label>
                <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Add to Cart</button>
        </form>
    );
};

export default UserDetailsForm;
