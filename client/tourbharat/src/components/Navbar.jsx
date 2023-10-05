import {useState} from 'react';
import { navLinks } from '../constants';
import {logo, menu, close} from '../assets';
import Button from './Button';

const Navbar = () => {

const [toggle, settoggle] = useState(false)
  return (
    <nav className='w-full flex py-2 justify-between items-center navbar'>
      <a href=""><img src={logo} alt="hoobank" className="w-[125px] h-[70px]" /></a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-10' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
        ))}
        
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
       
      </div>
    </nav>
  );
};

export default Navbar;
