import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h1 className='md:text-5xl md:mx-5 font-mono font-bold bg-green-500 text-white p-5 rounded-lg'>Welcome to our AmaderShop</h1>
            <div>
                <div className='md:hidden m-5' onClick={() => setOpen(!open)}>
                    {
                        open ? <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    }
                </div>
                <div className={`md:flex justify-around items-center m-5 font-bold ${open ? "block" : "hidden"}`}>
                    <CustomLink to="/" className=" md:bg-slate-500 md:text-white md:p-2 md:rounded-md md:font-bold">Home</CustomLink>
                    <CustomLink to="/search" className=" md:bg-slate-500 md:text-white md:p-2 md:rounded-md md:font-bold">Search</CustomLink>
                    <CustomLink to="/account" className=" md:bg-slate-500 md:text-white md:p-2 md:rounded-md md:font-bold">Account</CustomLink>
                    <CustomLink to="/about" className=" md:bg-slate-500 md:text-white md:p-2 md:rounded-md md:font-bold">About</CustomLink>
                </div>
            </div>
        </div >
    );
};

export default Header;