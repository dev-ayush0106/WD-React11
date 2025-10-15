import React, { useState } from 'react'

const Form1 = () => {
    // Empty state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })

    const [errors, setErrors] = useState({});

    // Onchange in the input field
    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prev) => (
            { ...prev, [name]: value }
        ))
        
        // Clear errors when user starts typing
        if (errors[name] || errors.err) {
            setErrors({});
        }
    }

    function validate() {
        let newErrors = {};
        
        // Name validation
        if (formData.name.trim().length === 0) {
            newErrors.name = "Name is required!";
        } else if (formData.name.length < 4) {
            newErrors.name = "Minimum 4 characters required";
        } else if (formData.name.length > 10) {
            newErrors.name = "Maximum 10 characters allowed";
        }
        
        // Email validation (basic)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (formData.email.trim().length === 0) {
            newErrors.email = "Email is required!";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    // On submitting the form 
    function handleSubmit(e) {
        e.preventDefault(); // prevents page refresh
        
        if (validate()) {
            console.log("Form submitted:", formData);
            
            // reset the states
            setFormData({
                name: "",
                email: ""
            });
            setErrors({});
        } else {
            console.log("Form has errors:", errors);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input 
                    onChange={handleChange} 
                    type="text" 
                    name='name' 
                    value={formData.name} 
                />
                {errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                <br />
                
                <label htmlFor="email">Email:</label>
                <input 
                    onChange={handleChange} 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                />
                {errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                <br />
                
                <input 
                    type="submit" 
                    value="Submit"
                    disabled={formData.name.length === 0 || formData.email.length === 0} 
                />
            </form>
        </div>
    )
}

export default Form1