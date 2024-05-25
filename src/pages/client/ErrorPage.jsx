import React from 'react'
// lib
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <main className="h-screen flex justify-center items-center text-center text-clr-off-white">
        <section className='flex flex-col space-y-8'>
          <h1 className="text-9xl font-semibold text-primary-custom-red">404</h1>
          <h3 className="tracking-wide font-medium capitalize mb-8 leading-5 text-2xl text-primary-dark-blue">Sorry, the page you tried cannot be found</h3>
          <Link to="/"
            className="group relative w-[70%] mx-auto flex items-center space-x-2 justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-clr-success bg-gradient-to-r from-primary-custom-red to-primary-custom-orange hover:button-brightness hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            back home
          </Link>
        </section>
    </main>
  )
}

export default ErrorPage