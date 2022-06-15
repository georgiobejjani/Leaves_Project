import React from 'react'
import companylogo from '../../assets/images/company-name-logo-png-1.png';
export default function Navbar() {
  return (
      <>
    <nav className="Navbar">
        <div className='Navbar__imgcontainer'>
            <img src={companylogo} alt='company-logo' className='Navbar__imgcontainer-img'/>
        </div>
       <div className='Navbar__userstats'>
            <div className='Navbar__userstats-user'>Hello Georgio Bejjani</div>
            <button className='Navbar__userstats-btn'>Logout</button>
       </div>
    </nav>
    </>
  )
}
