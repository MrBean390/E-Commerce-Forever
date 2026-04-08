import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolore numquam aliquam provident expedita a et totam cumque quas, minima aut eum voluptates.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/about'}><li>About</li></Link>
                <Link to={'/cart'}><li>Delivery</li></Link>
                <Link to={'/contact'}><li>Contact Us</li></Link>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+91 96XXX 90006</li>
                <li>forever@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
