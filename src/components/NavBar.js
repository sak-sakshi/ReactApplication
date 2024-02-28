import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='nav_main'>
                <nav>
                  <li>
                    <Link className='link' to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link className='link' to={"about"}>About us</Link>
                  </li>
                  <li>
                    <Link className='link' to={"contact"}>Contact us</Link>
                  </li>
                </nav>
            </div>
        </>
    )
}
export default NavBar