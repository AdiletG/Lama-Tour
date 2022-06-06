import React from 'react';
import styles from './footer.module.css'
import Map from "./Map/Map";
import Form from "./Form/Form";
import {ImFacebook2} from 'react-icons/im' ;
import {GrInstagram} from 'react-icons/gr' ;
import {ImWhatsapp} from 'react-icons/im' ;
import {SiTelegram} from 'react-icons/si' ;


const Footer = () => {

    const {footer, navLeft, navRight, connect, formBlock, iconWh, iconInst, iconFace, iconTg, title , links} = styles;

    return (
        <>
            <footer className={footer}>
                <nav className={navLeft}>
                    <div>
                        <Map/>
                    </div>
                </nav>
                <nav className={navRight}>
                        <div className={formBlock}>
                            <h2 className={title}>Есть <span style={{color: '#08c32f'}}>вопрос</span></h2>
                            <Form/>
                        </div>

                        <div className={connect}>
                            <div className={links}>
                                <a href="https://www.facebook.com" target='_blank' className={iconFace}><ImFacebook2/></a>
                                <a href="https://www.instagram.com" target='_blank' className={iconInst}><GrInstagram/></a>
                                <a href="https://www.whatsapp.com" target='_blank' className={iconWh}><ImWhatsapp/></a>
                                <a href="https://www.telegram.com" target='_blank' className={iconTg}><SiTelegram/></a>
                            </div>
                        </div>
                </nav>
            </footer>
        </>
    );
};

export default Footer;