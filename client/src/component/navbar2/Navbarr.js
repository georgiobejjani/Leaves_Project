import React from 'react'
import logo from "../../assets/images/logoo.png"
export default function Navbarr() {
    return (
        <>
            <div className='Nv-container'>
                <div className='container'>
                    <div className='header-container'>
                        <img src={logo} width="80px" alt='mojabet logo' />
                        <nav className='nav-menu'>
                            <ul className='links-container'>
                                <div className='dropdown'>
                                    <li className='navbar-link'>loteries</li>
                                    <ul className='dropdown-content'>
                                        <li>12</li>
                                        <li>123</li>
                                    </ul>
                                </div>
                                <div className='dropdown'>

                                    <li className='navbar-link'>casino</li>
                                    <ul className='dropdown-content'>
                                        <li>12</li>
                                        <li>123</li>
                                    </ul>
                                </div>
                                <div className='dropdown'>
                                    <li className='navbar-link'>grattage</li>
                                    <ul className='dropdown-content'>
                                        <li><img src={logo} width="200px"/></li>
                                        <li><img src={logo} width="200px"/></li>
                                    </ul>
                                </div>
                                <li className='navbar-link'>a propos de nous</li>
                                <li className='navbar-link'>contactez-nous</li>
                            </ul>
                        </nav>
                        <div className='header-action'>
                            <div className='btn-connexion'>connexion</div>
                            <div className='btn-inscription'>inscription</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
