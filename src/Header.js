import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';
import {Link} from "react-router-dom"

function Header() {
    return (
        <div >
            <h1 className='header'>Header</h1>
            <p id='em1'>< HiOutlineMail/>info@simtekway.com</p>
           <Link> <p id='em'> Employee Login<IoIosArrowForward/></p></Link>
      
        </div>
    )
}

export default Header;
