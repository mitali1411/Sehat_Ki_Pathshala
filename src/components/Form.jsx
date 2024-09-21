import React from 'react'

const Form = () => {
  return (
    <div className='p-3 d-flex align-items-center justify-content-center flex-column'>
        <h2 className='text-center'>Know about you</h2>
        <form className='w-75 p-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Enter Your Name</label>
                <input type="text" className="form-control" id="exampleInputName" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputNumber" className="form-label">Enter Your Mobile Number</label>
                <input type="number" className="form-control" id="exampleInputNumber" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputAge" className="form-label">Enter Your Age</label>
                <input type="number" className="form-control" id="exampleInputAge" required/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputCall" className="form-label">Enter Time for Call</label>
                <input type="time" className="form-control" id="exampleInputCall" required/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form