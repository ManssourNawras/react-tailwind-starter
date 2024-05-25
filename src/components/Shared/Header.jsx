import React from 'react'
//lib
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='flex flex-col items-center justify-center space-y-1 w-full'>
        <h1 className='text-clr-warning text-4xl'>Header</h1>
        <ul className='flex flex-wrap S-550:justify-between justify-center items-center lg:w-6/12 S-450:8/12 mx-auto text-lg'>
            <li className='mt-2 px-5'>
                <Link className='w-full hover:text-clr-danger' to={'/'}>
                    Home
                </Link>
            </li>
            <li className='mt-2 px-5'>
                <Link className='w-full hover:text-clr-danger' to={'/contact'}>
                    Contact
                </Link>
            </li>
            <li className='mt-2 px-5'>
                <Link className='w-full hover:text-clr-danger' to={'/register'}>
                    Register
                </Link>
            </li>
            <li className='mt-2 px-5'>
                <Link className='w-full hover:text-clr-danger' to={'/login'}>
                    Login
                </Link>
            </li>
            <li className='mt-2 px-5'>
                <Link className='w-full hover:text-clr-danger' to={'/admin'}>
                    Dashboard
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header