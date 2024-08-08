import React from 'react'
import { useState } from 'react';
import image from '../assets/image.png';
import Vector from '../assets/Vector.png'
import Form from './Form';
import '../StyleSheets/Profile.css';

export default function EditProfile() {
  // const fields = [
  //   { name: 'name', label: 'Name', type: 'text' },
  //   { name: 'email', label: 'Email', type: 'email' },
  //   { name: 'dob', label: 'Date of Birth', type: 'date' },
  //   { name: 'permanentAddress', label: 'Permanent Address', type: 'textarea' },
  //   { name: 'postalCode', label: 'Postal Code', type: 'text' },
  //   { name: 'username', label: 'Username', type: 'text' },
  //   { name: 'password', label: 'Password', type: 'password' },
  //   { name: 'presentAddress', label: 'Present Address', type: 'textarea' },
  //   { name: 'city', label: 'City', type: 'text' },
  //   { name: 'country', label: 'Country', type: 'text' }
  // ];

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   dob: '',
  //   permanentAddress: '',
  //   postalCode: '',
  //   username: '',
  //   password: '',
  //   presentAddress: '',
  //   city: '',
  //   country: ''
  // });

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const handleSave = () => {
  //   console.log('Form data saved:', formData);
  // };


  return (
    <section className='EditInfo'>
     <div className='image'>
        <img src={image} alt='image'></img>
     </div>
     <div>
        <img src={Vector} alt='image'></img>
     </div>
     <div className='form'>
      {/* <Form
      // fields={fields}
      // formData={formData}
      // handleChange={handleChange}
      // handleSave={handleSave} /> */}
      <Form/>
     </div>
    </section>
  );
}
