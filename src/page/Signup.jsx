import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Account created for ${formData.name}!`);
    };

    return (
        <div className="auth-page">
            <div className="auth-box">
                <h2>Sign Up</h2>
                <p className="auth-desc">Sign up and get 20% off your first order.</p>

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-btn">Create Account</button>
                </form>

                <div className="back-link">
                    <Link to="/">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;