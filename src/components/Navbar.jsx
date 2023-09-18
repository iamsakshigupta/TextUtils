import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {

  const toggleMode = () => {
    const darkToggle = document.querySelector('.dark-toggle');
    darkToggle.addEventListener('click', (event) => {
      event.preventDefault();
      document.documentElement.classList.toggle('dark')

    })


  }
  document.body.style.backgroundColor = "#fffff";


  return (

    <div className='navbar bg-cyan-50 dark:bg-slate-800 py-5 mb-0 '>
      <div className='max-w-7xl mx-auto box-border px-4'>
        <div className='flex items-center justify-between'>
          <a href="/"><p className='text-2xl font-semibold text-gray-800 dark:text-white tracking-wide'>{props.title}</p></a>

          <div className='mr-auto items-center ml-7 font-semibold dark:text-slate-400'>
            <a href="/About">About Us</a>
          </div>

          <div className='button relative right-0 dark-toggle bg-gray-600 rounded px-7 py-2 cursor-pointer hover:bg-cyan-600 focus:outline-none focus:bg-cyan-600'>
            <button onClick={toggleMode} className='text-white' href="#">Dark Mode</button>
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
document.body.style.backgroundColor = "#fffff";

