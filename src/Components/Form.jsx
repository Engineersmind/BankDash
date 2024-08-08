import React from 'react'
import '../StyleSheets/Form.css';

export default function Form() {
  return (
    <>
    <form className='form-info'>
    <div className='form1'>
    <div className='YourName'>
      
        <label htmlFor="name" className='heading'>Your Name</label><br/>
        <input
          type="text"
          id="name"
          name="name"
          
          
        />
      </div>

      <div className='email'>
        <label htmlFor="email" className='heading'>Email</label><br/>
        <input
          type="email"
          id="email"
          name="email"
          
          
        />
      </div>

      <div className='Dob'>
        <label htmlFor="dob" className='heading'>Date of Birth</label><br/>
        <input
          type="date"
          id="dob"
          name="dob"
          
          
        />
      </div>
      
      <div className='permanentAddress'>
        <label htmlFor="permanentAddress" className='heading'>Permanent Address</label><br/>
        <textarea
          id="permanentAddress"
          name="permanentAddress"
          
          
        />
      </div>

      <div className='postalCode'>
        <label htmlFor="postalCode" className='heading'>Postal Code</label><br/>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          
        />
      </div>
      </div>
 
      <div className='form2'>
      <div className='username'>
        <label htmlFor="username" className='heading'>User Name</label><br/>
        <input
          type="text"
          id="username"
          name="username"
          
          
        />
      </div>

      <div className='password'>
        <label htmlFor="password" className='heading'>Password</label><br/>
        <input
          type="password"
          id="password"
          name="password"
         
       
        />
      </div>

      <div className='presentAddress'>
        <label htmlFor="presentAddress" className='heading'>Present Address</label><br/>
        <textarea
          id="presentAddress"
          name="presentAddress"
          
          
        />
      </div>

      <div className='city'>
        <label htmlFor="city" className='heading'>City:</label><br/>
        <input
          type="text"
          id="city"
          name="city"
         
        />
      </div>

      <div className='country'>
        <label htmlFor="country" className='heading'>Country:</label><br/>
        <input
          type="text"
          id="country"
          name="country"
          
        />
      </div>
      <button type="button" >Save</button>
      </div>
     </form>
      
      </>
     );
    }

{/* <form>
    {fields.map(field => ( 
        <div key={field.name}>
        <label htmlFor={field.name}>{field.label}</label>
        {field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
            />
          )}

        </div>
    ))} */}
    {/* <button type="button" onClick={handleSave}>Save</button>
</form> */}
      
//     </div>
  
