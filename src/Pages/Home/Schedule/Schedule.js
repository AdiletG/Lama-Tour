import React, { useState } from 'react';
import styles from './schedule.module.css';
import Video from '../../../Assets/Background/Video/video-2.mp4'
const Schedule = () => {
    const {schedule, button, tabs, active, section, video, firstTitle, card,
    cardImg, top, bottom, tourTitle, price, people, locations, nameLocations, btn} = styles;

    const [select, setSelect] = useState('Default')
    console.log();
    

    return (
        <>

            <section className={schedule}>
                <div className={tabs}>
                    <button className={select === 'Monday' ?  active : button} onClick={()=> setSelect('Monday')}>Понидельник</button>
                    <button className={select === 'Tuesday' ? active : button} onClick={()=> setSelect('Tuesday')}>Вторник</button>
                    <button className={select === 'Wednesday' ? active : button} onClick={()=> setSelect('Wednesday')}>Среда</button>
                    <button className={select === 'Thursday' ? active : button} onClick={()=> setSelect('Thursday')}>Четверг</button>
                    <button className={select === 'Friday' ? active : button} onClick={()=> setSelect('Friday')}>Пятница</button>
                    <button className={select === 'Saturday' ? active : button} onClick={()=> setSelect('Saturday')}>Суббота</button>
                    <button className={select === 'Sunday' ? active : button} onClick={()=> setSelect('Sunday')}>Воскресение</button>
                </div>

                
            </section>
            <div>
                     {

                        select === 'Default' ?
                        <div className={section}>
                            <h1 className={firstTitle}>Выберите день тура</h1>
                            <video src={Video} autoPlay muted loop className={video}/>
                            </div>

                        : select === 'Monday' ?
                       <div className={section}>
                       
                       <div className={card}>
                           <div className={top}>
                           <img src='' className={cardImg}/>
                           </div>

                           <div className={bottom}>
                               <h2 className={tourTitle}>Название</h2>
                               <p className={price}>Цена</p>
                               <p className={people}>места на человек</p>

                               <div className={locations}>
                               <p className={nameLocations}>Локации</p>
                               </div>

                               <button className={btn}>Подробнее</button>

                             </div>

                       </div>

                       <div className={card}>
                           <div className={top}>
                           <img src='' className={cardImg}/>
                           </div>

                           <div className={bottom}>
                               <h2 className={tourTitle}>Название</h2>
                               <p className={price}>Цена</p>
                               <p className={people}>места на человек</p>

                               <div className={locations}>
                               <p className={nameLocations}>Локации</p>
                               </div>

                               <button className={btn}>Подробнее</button>
                               
                             </div>

                            

                       </div>

                       <div className={card}>
                           <div className={top}>
                           <img src='' className={cardImg}/>
                           </div>

                           <div className={bottom}>
                               <h2 className={tourTitle}>Название</h2>
                               <p className={price}>Цена</p>
                               <p className={people}>места на человек</p>

                               <div className={locations}>
                               <p className={nameLocations}>Локации</p>
                               </div>

                               <button className={btn}>Подробнее</button>
                               
                             </div>

                            

                       </div>

                       
                       </div>
                       
    
                        : select === 'Tuesday' ?
                        
                        <div className={section}>Tuesday</div>

                        : select === 'Wednesday' ?
                        
                        <div className={section}>Wednesday</div>

                        : select === 'Thursday' ?
                        
                        <div className={section}>Thursday</div>

                        : select === 'Friday' ?
                        
                        <div className={section}>Friday</div>

                        : select === 'Saturday' ?
                        
                        <div className={section}>Saturday</div>

                        : select === 'Sunday' ?
                        
                        <div className={section}>Sunday</div>

                        : ''
                    }
            

                </div>


        </>
    );
};

export default Schedule;