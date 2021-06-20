import Link from 'next/link';
import { useState } from 'react';

const NavBar = () => {
    const [showDropdown, setShowDropDown] = useState(false)

    return (
        <div className="md:col-span-1 md:flex md:justify-end">
            <nav className="text-right">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold uppercase p-4 border-b border-gray-100">
                        <Link href="/">
                            <a className="hover:text-gray-800">Food App</a>
                        </Link>
                    </h1>
                    <div className="px-4 cursor-pointer md:hidden" onClick={() => setShowDropDown(!showDropdown)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </div>
                </div>
                <ul className={`text-right mt-6 ${showDropdown ? 'block' : 'hidden'} md:block`}>
                    <li className="font-bold my-1">
                        <Link href="/">
                            <a className="flex items-center justify-end px-4 border-r-4 border-red-500">
                                <span>Home</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </a>
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link href="/">
                            <a className="flex items-center justify-end px-4 border-r-4 border-white">
                                <span>About</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </a>
                        </Link>
                    </li>
                    <li className="my-1">
                        <Link href="/">
                            <a className="flex items-center justify-end px-4 border-r-4 border-white">
                                <span>Contact</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
};

export default NavBar;