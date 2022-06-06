import React from 'react';
import styles from './layout.module.css'
import { Routes, Route, useLocation} from "react-router-dom";
import Home from "../Home/Home";
import Header from "./Header/Header";
import Golova from "./Header/Golova";
import Tour from "../Tour/Tour";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import Footer from "./Footer/Footer";
import Enroll from "../Enroll/Enroll";


const Layout = () => {
    const {layout,} = styles;

    const location = useLocation();
    return (
        <>
            <section className={layout}>
                {
                    location.pathname.includes('tour') || location.pathname.includes('gallery') || location.pathname.includes('contact')
                    || location.pathname.includes('enroll') ? <Golova/> : <Header/>
                }

                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/tour' element={<Tour/>}/>
                    <Route path='/gallery' element={<Gallery/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/enroll' element={<Enroll/>}/>
                </Routes>

                <Footer/>

            </section>

        </>
    );
};

export default Layout;