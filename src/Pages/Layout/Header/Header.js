import React , {useState}from 'react';
import './header.css'
import {NavLink} from "react-router-dom";
import lama from '../../../Assets/logo/lama.png'

const Header = () => {

    const [navbar, setNavbar] = useState(false);

    const navbarChange = () => {
      if (window.scrollY >= 10){
          setNavbar(true)
      } else{
          setNavbar(false)
      }
    };

    window.addEventListener('scroll', navbarChange);



    return (
            <header className={navbar ? 'header active' : 'header'}>
                <nav className='nav'>

                    <NavLink to='/' className="logo-block">
                        <img src={lama} alt="lama-logo"/>
                        <h1 className='logo-title'>Lama <span style={{color: '#08c32f'}}>Tour</span></h1>
                    </NavLink>


                    <ul className="navList">

                        <NavLink to='/tour' className="navItem">Туры</NavLink>
                        <NavLink to='/gallery' className="navItem">Галерея</NavLink>
                        <NavLink to='/contact' className="navItem">Контакты</NavLink>

                    </ul>
                </nav>
            </header>
    );
};

export default Header;