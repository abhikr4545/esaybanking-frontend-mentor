import { useState } from 'react';
import logo from '../images/logo.svg';
import close from '../images/icon-close.svg';
import menu from '../images/icon-hamburger.svg';

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false);
  const links = ['Home', 'About', 'Contact', 'Blog', 'Careers'];

  return (
    <nav className='flex container py-6 items-center justify-between md:py-3'>
      {/* Logo */}
      <img src={logo} alt="easy banking" className='cursor-pointer' />
      {/* Links */}
      <ul className={`fixed text-center transition-all py-4 ease-in-out duration-500 z-20 w-[90%] left-[18px] rounded-xl text-[18px] space-y-7 md:z-auto md:space-y-0 md:text-left md:text-base md:static md:flex md:justify-center md:items-center gap-10 bg-off-white md:py-4 md:bg-white md:rounded-none ${showMenu ? 'top-20' : 'top-[-490px]'}`}>
        {links.map((link) => {
          return <li key={link} className='transition-all ease-in-out duration-300 md:border-b-4 md:border-transparent hover:md:border-b-lime-green md:flex md:items-center md:cursor-pointer'>{ link }</li>
        })}
      </ul>
      {/* Invite Button */}
      <button className="hidden bg-gradient-to-r from-lime-green to-bright-cyan text-white whitespace-nowrap px-4 
        rounded-3xl py-2 hover:opacity-50 transition-all ease-in-out duration-300 md:block">
        Request Invite
      </button>
      <img src={showMenu ? close : menu} className="md:hidden" onClick={() => setShowMenu(!showMenu)} alt="" />
    </nav>
  )
}

export default Navbar