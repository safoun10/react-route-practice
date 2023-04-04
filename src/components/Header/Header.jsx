import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'
import "./Header.css";
import Link from '../link/Link';

const Header = () => {

    const navItems = [
        {
          id: 1,
          name: "Home",
          path: "/"
        },
        {
          id: 2,
          name: "About Us",
          path: "/about-us"
        },
        {
          id: 3,
          name: "Products",
          path: "/products"
        },
        {
          id: 4,
          name: "Services",
          path: "/services"
        },
        {
          id: 5,
          name: "Contact Us",
          path: "/contact-us"
        }
      ];

      const [open , setOpen] = useState(false)
      

    return (
        <nav>
            <div className='d-md-none' onClick={() => setOpen(!open)}>
                <span>{open === true ?
                  <XMarkIcon className='hero-icon'></XMarkIcon>
                  :
                  <Bars3Icon className='hero-icon'></Bars3Icon>
                  }</span>
                
                
            </div>
            <div>
                <ul className={`d-md-flex my-md-4 mx-md-1 gap-4 justify-content-end ${open ? "": "d-none"}`}>
                    {
                        navItems.map(item => <Link key={item.id} item={item}></Link>)
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;