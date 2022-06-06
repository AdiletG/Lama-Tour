import React, {useEffect, useState} from 'react';
import styles from './guide.module.css'
import axios from 'axios'
import {GrInstagram} from 'react-icons/gr' ;
import {ImWhatsapp} from 'react-icons/im' ;
import {SiTelegram} from 'react-icons/si' ;

const Guide = () => {
    const [guide, setGuide] = useState([]);
    const {list, listItem, avatar, contacts, left, right, wh, inst, tg, infoList, infoName,
            infoSurname, infoInfo, img, line, infoBlock, cardImg} = styles;

    useEffect(()=>{
        axios.get('http://localhost:8080/guide')
            .then(({data})=> setGuide(data))
            .catch(()=> console.log('error'));
    },[]);



    return (
        <>
            <ul className={list}>
                {
                    guide.map((item)=> (
                        <li className={listItem} key={item.id}>
                            <div className={left}>
                                <img src={item.backImg} alt="" className={cardImg}/>
                                <div className={avatar}>
                                    <img src={item.image} alt="avatar" className={img}/>
                                </div>

                            </div>
                            <div className={right}>
                                <ul className={infoList}>
                                        <li className={infoName}>{item.name}</li>
                                        <li className={infoSurname}>{item.surname}</li>
                                </ul>
                                    <div className={line}/>
                                <div className={infoBlock}>
                                    <p className={infoInfo}>{item.info}</p>
                                </div>

                                <div className={contacts}>
                                    <a href={item.links.instagram} target='_blank' className={inst}><GrInstagram/></a>
                                    <a href={item.links.whats} target='_blank' className={wh}><ImWhatsapp/></a>
                                    <a href={item.links.telegram} target='_blank' className={tg}><SiTelegram/></a>
                                </div>

                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    );
};

export default Guide;