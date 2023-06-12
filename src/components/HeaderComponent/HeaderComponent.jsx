import React from 'react'
import {Link} from 'react-router-dom'
import './HeaderComponent.css'

function HeaderComponent() {
  return (
    <React.Fragment>
        <div className='header'>
            <div className='home'>
                <Link to='/' className='home-con'>
                    <p>Phoenix Travel Agency Home</p>
                </Link>
            </div>
            <div className='about'>
                <Link to='/about' className='about-con'>
                    <p>About Us</p>
                </Link>
            </div>
            <div className='Contact Us'>
                <Link to='/contact' className='contact-con'>
                    <p>Contact Us</p>
                </Link>
            </div>
            <div className='Book a trip'>
                <Link to='/book' className='book-con'>
                    <p>Book a trip</p>
                </Link>
            </div>
        </div>
    </React.Fragment>
  )
}

export default HeaderComponent