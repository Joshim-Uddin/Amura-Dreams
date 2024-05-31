import React from 'react';
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import sale from "../assets/sale.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="desktop">
                <div className='flex items-center gap-5'>
                    <div className='w-full ms-36'>
                    <img src={logo} alt="" className='mx-auto w-[244px] h-[189px]' />
                    </div>
                <div className='flex justify-center items-center gap-5 pr-14'>
                <img src={search} alt="" />
                <img src={sale} alt="" />
                </div>
                </div>
                <ul className='flex justify-center'>
                    <li className='px-10 pb-8'>
                        <a href="" className='uppercase navlink'>para ella</a>
                    </li>
                    <li className='px-10 pb-8'>
                    <a href="" className='uppercase navlink'>para él</a>
                    </li>
                    <li className='px-10 pb-8'>
                    <a href="" className='uppercase navlink'>regalar</a>
                    </li>
                    <li className='px-10 pb-8'>
                    <Link to="/colección" className='uppercase navlink'> colección amura</Link>
                    </li>
                    <li className='px-10 pb-8'>
                    <a href="" className='uppercase navlink'>boutique</a>
                    </li>
                </ul>

            </nav>
        </div>
    );
};

export default Navbar;