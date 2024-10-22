import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='container-fluid' id='page-not-found'>
        <h1 className='display-1 text-center'>4O4</h1>
        <h1 className='display-6 text-center py-2'>OOPS! NOTHING WAS FOUND</h1>
        <p className='text-center py-2'>The page you are looking for might been removed had its changed or is temporarily unavailable</p>
        <Link to='/'><button className='btn btn-outline-success'>Return to homepage</button></Link>
    </div>
  )
}

export default PageNotFound