import React from 'react'
import './nav.css'
import { NavLink, withRouter } from 'react-router-dom'





const Nav = () => {
    return (
        <nav> <div className='myname'><h3 >Dunba Tehinse</h3><p id='justportfolio'>Portfolio</p></div>
            <ul className='nav-links'>
                <NavLink activeClassName='activetab' className='linkstyle' exact to='/'> <li>ABOUT</li></NavLink>
                <NavLink activeClassName='activetab' className='linkstyle' exact to='/Resume'> <li>RESUME</li> </NavLink>
                <NavLink activeClassName='activetab' className='linkstyle' exact to='/Projects'> <li>PROJECTS</li> </NavLink>
                <NavLink activeClassName='activetab' className='linkstyle' exact to='/Videos'> <li>VIDEOS</li></NavLink>


                <NavLink activeClassName='activetab' className='linkstyle' to='/Contact'> <li>CONTACT</li> </NavLink>
            </ul>


        </nav>
    )
}
export default Nav