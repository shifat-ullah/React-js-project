/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BoltIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [navber,setNavber]=useState(false);
    return (
        <div className=''>
            <div className='bg-gray-100 px-5 py-5 mx-auto w-[86%] flex items-center  my-container justify-between'>
                <Link to="/" className='inline-flex items-center '>
                    <span><BoltIcon className="h-6 w-6 text-blue-500" /></span>
                    <span className='text-xl font-bold'>nextPage</span>
                </Link>

                <div className='  gap-5 '>
                    <div onClick={()=> setNavber(!navber)} className='lg:hidden'>
                        <span>{navber === true ? <XMarkIcon className="h-6 w-6 text-blue-500 " /> :<Bars3Icon className="h-6 w-6 text-blue-500 " />}</span>
                    </div>
                
                    <ul className={`md:flex gap-4 md:static absolute ${navber? 'top-20' : '-top-40'}`}>
                        <li>
                        <NavLink to="/" className={({isActive}) =>(isActive ? 'text-blue-900' : '')}>Home</NavLink> 
                        </li>
                        <li>
                        <NavLink to="/books" className={({isActive}) =>(isActive ? 'text-blue-600' : '')}>Books</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about" className={({isActive}) =>(isActive ? 'text-blue-600' : '')}>About us</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Header;