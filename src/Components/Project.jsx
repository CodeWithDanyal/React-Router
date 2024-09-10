import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Project() {
  return (
    <>
    <section  className='flex justify-center items-center h-2/4 bg-slate-200'>
     <NavLink to="/projects/todo">
     <div className='w-full min-w-52 max-w-72 hover:shadow-custom-yellow duration-500 hover:scale-105 border-slate-300 border bg-white rounded-xl text-left'>
    <img src={"../public/Screenshot (50).png"} alt="" className='max-w-full h-auto rounded-lg'/>
    <div className='p-4'>
      <h1 className='font-bold text-slate-800'>Todo APP</h1>
      <p>React Taiwind Css</p>
    </div>
      </div>
     </NavLink>
    </section>
    </>
  )
}

export default Project
