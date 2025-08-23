import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default">
                <span className="sr-only">Open main menu</span>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex">
                <li>
                <Link href="/" className="block py-2 px-3">Home</Link>
                </li>
                <li>
                <Link href="/div-tracker" className="block py-2 px-3">Dividend Tracker</Link>
                </li>
                <li>
                <Link href="/reinvestment-calculator" className="block py-2 px-3">Reinvestment Calculator</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar


