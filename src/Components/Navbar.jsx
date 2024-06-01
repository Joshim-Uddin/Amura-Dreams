import React, { useState } from 'react';
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import sale from "../assets/sale.png"
import { Link } from 'react-router-dom';
import bars from './../assets/menu.png';
import simbolo from "./../assets/simbolo.png";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    
    document.addEventListener("click", (e)=>{
        if(Array.from(e.target.classList).includes("bar")||Array.from(e.target.classList).includes("hamburger")){
            setToggle(true)
        }else{
            setToggle(false)
        }
    })

    return (
        <div>
            <nav className="desktop max-[600px]:hidden">
                <div className='flex items-center gap-5'>
                    <div className='w-full ms-36'>
                    <Link to="/"><img src={logo} alt="" className='mx-auto w-[244px] h-[189px]' /></Link>
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
            <nav className="mobile min-[600px]:hidden relative">
            <div className='w-full mx-auto'>
                    <div className='flex justify-center'>
                    <Link to="/"><img src={logo} alt="" className='w-[148px] h-[114px]' /></Link>
                    </div>
                    <div className='flex justify-between ps-2 pr-3 pb-6'>
                        <img src={bars} alt="" className='bar' />
                        <div className='flex justify-center items-center gap-3'>
                <img src={search} alt="" className='max-h-6'/>
                <img src={sale} alt="" className='max-h-6'/>
                </div>
                    </div>
                    </div>
                <div className={toggle?"hamburger absolute top-0":"hamburger absolute top-0 hidden"}>
                    <div className='flex flex-col justify-center items-center pb-20'>
                    <Link to="/"><img src={simbolo} alt="" /></Link>
                    </div>
                    <ul className='flex flex-col justify-center'>
                    <li className='pb-8'>
                        <a href="" className='uppercase navlink'>para ella</a>
                    </li>
                    <li className='pb-8'>
                    <a href="" className='uppercase navlink'>para él</a>
                    </li>
                    <li className='pb-8'>
                    <a href="" className='uppercase navlink'>regalar</a>
                    </li>
                    <li className='pb-8'>
                    <Link to="/colección" className='uppercase navlink'> colección amura</Link>
                    </li>
                    <li className='pb-8'>
                    <a href="" className='uppercase navlink'>boutique</a>
                    </li>
                </ul>

                </div>
            </nav>
        </div>
    );
};

export default Navbar;