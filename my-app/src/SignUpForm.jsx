/*import { Component } from 'react'

export default function SignUpForm() {

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, value } = event.target.value;
        setFormData({
          ...SignUpForm,
          [name]: value,
        });
        // log values from controlled inputs
    }

    return (
        <div>
            <h1>Day 2 form exercise</h1>
            <form onSubmit={handleSubmit}>

                <input placeholder='First Name' />

                <input placeholder='Last Name' />

                <input placeholder='Email' type="email" />

                <input placeholder='Date of Birth' type="date" />

                <br />

                <label>
                    <input type='radio'></input>
                    Male
                </label>

                <label>
                    <input type='radio'></input>
                    Female
                    </label>

                <br />

                <select name='country'>
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input type='checkbox' />
                    Likes Pineapple
                </label>

                <label>
                    <input type='checkbox' />
                    Likes Liquorice
                </label>

                <br />
                
                <button type="submit">Submit</button>
            </form>
            <div>
        <h2>Form Data:</h2>
        <p>First Name: {SignUpForm.FirstName}</p>
        <p>Last Name: {SignUpForm.LastName}</p>
        <p>Email: {SignUpForm.email}</p>
        <p>D.O.B: {SignUpForm.date}</p>
      </div>
        </div>
    )
}*/
import React, { useState } from 'react';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can perform further actions like submitting the form data to a server
  };

  return (
    <div>
        <h1>Day 2 form exercise</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
        <input type="Date" name="date" value={formData.date} onChange={handleChange}/>

        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Form Data:</h2>
        <p>First Name: {formData.firstName}</p>
        <p>Last Name: {formData.lastName}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>
    </div>
  );
};

export default SignUpForm;
