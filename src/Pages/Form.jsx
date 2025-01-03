import React, { useState } from 'react'

const Form = () => {

    const [result, setResult] = useState("");
    const [formData, setFormData] = useState({
        name : '',
        // age : '',
        mobile : '',
        time : '',
        height : '',
        weight : ''
    });
    const [submitted, setSubmitted] = useState(false);

    // /////////////////////////////////////////////////////
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
    
        // Name validation
        if (!formData.name) {
          newErrors.name = "Name is required.";
        } 
    
        // Mobile number validation
        if (!formData.mobile) {
          newErrors.mobile = "Mobile number is required.";
        } else if (!/^\d{10}$/.test(formData.mobile)) {
          newErrors.mobile = "Mobile number must be 10 digits.";
        }
    
        // Age validation
        // if (!formData.age) {
        //   newErrors.age = "Age is required.";
        // } else if (isNaN(formData.age) || formData.age < 1 || formData.age > 120) {
        //   newErrors.age = "Enter a valid age between 1 and 120.";
        // }
    
        // Time validation
        if (!formData.time) {
          newErrors.time = "Please select a time.";
        }

        // Height validation
        if (!formData.height) {
          newErrors.time = "Please enter height in inches.";
        }

        // Time validation
        if (!formData.weight) {
          newErrors.time = "Please enter weight in kgs.";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };


    //   ///////////////////////////////////////////////////////////

    const handleSubmit = async(e) => {
      e.preventDefault();

      console.log("submitted")

    if (!validateForm()) return;

      const formData = new FormData(e.target);
  
      // formData.append("access_key", "bfefc8d7-c15d-4f49-8c6d-81f5b95a2ae4");
      formData.append("access_key", "a3123de8-0f31-409a-90f2-fc83a4174ad7")
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        e.target.reset();
      } else {
        setResult(data.message);
      }

      setFormData({name: '', mobile: '', time: '', height: '', weight: ''})
      setSubmitted(true)
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : [e.target.value]})
    }

  return (
    <div className='py-5 px-5 d-flex align-items-center justify-content-center flex-column'>
        <h2 className='text-center text-uppercase text-dark'>Know About you</h2>
        <p className='text-center text-body-secondary' id='form-para'> Fill out the form to help us serve you better</p>
        {submitted ? (
            <div className="card my-5 p-5 d-flex align-items-center justify-content-center shadow rounded-0">
                <i className='bx bxs-check-circle' id='check' ></i>
                <h1 className='text-muted mt-5'>THANK YOU!</h1>
                <h5 className='text-muted mt-3 text-center'>Your form has been submitted successfully!!</h5>
            </div>
        ) : (
            <form onSubmit={handleSubmit} className='p-5 rounded-0'>
            <div className="mb-4">
                <label htmlFor="Name" className="form-label">Enter Your Name</label>
                <input type="text" name='name' className={`form-control ${errors.name ? 'is-invalid' : ""}`} id="Name" value={formData.name} onChange={handleChange} required/>
                <span className='text-danger'>{errors.name}</span>
            </div>
            <div className="mb-4">
                <label htmlFor="Number" className="form-label">Enter Your Mobile Number</label>
                <input type="tel" name='mobile' className={`form-control ${errors.mobile ? 'is-invalid' : ""}`} id="Number" value={formData.mobile} onChange={handleChange} required/>
                <span className='text-danger'>{errors.mobile}</span>
            </div>
            {/* <div className="mb-4">
                <label htmlFor="Age" className="form-label">Enter Your Age</label>
                <input type="number" name='age' className={`form-control ${errors.age ? 'is-invalid' : ""}`} id="Age" value={formData.age} onChange={handleChange} required/>
                <span className='text-danger'>{errors.age}</span>
            </div> */}
            <div className="mb-4">
                <label htmlFor="Height" className="form-label">Enter Your Height(in cm/inch)</label>
                <input type="number" name='height' className={`form-control ${errors.height ? 'is-invalid' : ""}`} id="Height" value={formData.height} onChange={handleChange} required/>
                <span className='text-danger'>{errors.height}</span>
            </div>
            <div className="mb-4">
                <label htmlFor="Age" className="form-label">Enter Your Weight(in kg)</label>
                <input type="number" name='weight' className={`form-control ${errors.weight ? 'is-invalid' : ""}`} id="Age" value={formData.weight} onChange={handleChange} required/>
                <span className='text-danger'>{errors.weight}</span>
            </div>
            <div className="mb-4">
                <label htmlFor="Call" className="form-label">Enter Time for Call</label>
                <input type="time" name='time' className={`form-control ${errors.time ? 'is-invalid' : ""}`} id="Call" value={formData.time} onChange={handleChange} required/>
                <span className='text-danger'>{errors.time}</span>
            </div>
            <button type="submit" className="btn btn float-end" id='submit'>Submit</button>
        </form>
        )}
    </div>
  )
}

export default Form