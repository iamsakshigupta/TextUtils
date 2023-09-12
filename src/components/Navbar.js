import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div className='navbar bg-cyan-50 py-5 mb-2'>
      <div className='max-w-7xl mx-auto box-border px-4'>
        <div className='flex justify-between items-center'>
          <a href="#"><p className='text-2xl font-semibold text-gray-800 tracking-wide'>{props.title}</p></a>

          <ul className='flex'>
            <li><a className='ml-7' href="">About Us</a></li>
            <li><a className='ml-7' href="">PortFolio</a></li>
            <li><a className='ml-7' href="">Services</a></li>
            <li><a className='ml-7' href="">Contact Us</a></li>
            

          </ul>
          <div className='button bg-gray-600 rounded px-7 py-2 cursor-pointer hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600'>
              <a className='text-white' href="#">Get in Touch</a>
            </div>
        </div>


      </div>

    </div>
  )

}
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}
