import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaFolder } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { BiX, BiMenu } from "react-icons/bi";


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className='w-full fixed bg-white left-0 right-0 top-0 p-[0.5rem] shadow-md'>

        <div className='flex justify-between items-center mx-auto max-w-screen-lg'>

            <div className="logo">
              <a href="#home"><img src={logo} alt="logo" className="max-w-[55px] cursor-pointer hover:border-2 border-green-800"/></a>
            </div>

            <div className='desktopLinks'>
              <ul className='hidden md:flex justify-center items-center gap-10 cursor-poniter'>
                <li className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1'><IoInformationCircleSharp /><a href="#about-me">About</a></li>
                <li className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1'><FaFolder /><a href="#my-projects">Projects</a></li>
                <li className='hover:text-green-800 hover:border-b-2 border-green-800 flex items-center gap-1'><RiContactsBook2Fill /><a href="#contact">Contact</a></li>
              </ul>            
            </div>

            <div className='contact-button'>
              <ul className='hidden md:flex justify-center items-center'>
                <button type='button' className='btn text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 flex items-center gap-1'>
                <IoIosCall /> Contact Me
                </button>
              </ul>
            </div>

            {isOpen ? (
            <BiX className='block md:hidden text-4xl' onClick={menuOpen}/>
            ) : (
            <BiMenu className='block md:hidden text-4xl' onClick={menuOpen}/>
            )}

            {isOpen && (
              <div className={'fixed right-0 top-[70px] flex h-screen w-1/2 flex-col item-start justify-start gap-10 border-black bg-green-700 p-12 ${isOpen ? "block" : "hidden"}'}>
                <ul className='flex flex-col gap-8 text-white font-bold'>
                  <a href="#home" className='cursor-pointer transition-all duration-300 hover-opacity-100'><li>Home</li></a>
                  <a href="#about-me" className='cursor-pointer transition-all duration-300 hover-opacity-100'><li>About</li></a>
                  <a href="#my-projects" className='cursor-pointer transition-all duration-300 hover-opacity-100'><li>Projects</li></a>
                  <a href="#contact" className='cursor-pointer transition-all duration-300 hover-opacity-100'><li>Contact</li></a>
                </ul>
              </div>
            )}

        </div>

    </nav>
  )
}

export default NavBar
