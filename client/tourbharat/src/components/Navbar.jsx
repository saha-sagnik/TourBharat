import {useState} from 'react';
import { navLinks } from '../constants';


const Navbar = () => {
const [toggle, settoggle] = useState(false)
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <a href=""><img src="/logo.png" alt="tourbharat" className='w-[100px] h-[60px]' /></a>

      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav,index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-10' : 'mr-10'} text-white`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      
    </nav>
  );
};

export default Navbar;
