import React from 'react'
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <nav className='nav'>
                <div>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </div>
                <div>
                    <NavLink to='*'>News</NavLink>
                </div>
                <div>
                    <NavLink to='*'>Music</NavLink>
                </div>
                <div>
                    <NavLink to='*'>Settings</NavLink>
                </div>
            </nav>
        </>

    )
}