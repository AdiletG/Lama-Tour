import React from 'react';
import styles from './home.module.css';
import Carousel from "./Carousel/Carousel";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import Guide from "./Guide/Guide";
import Schedule from "./Schedule/Schedule";
import Comments from './Comments/Comments';

const Home = () => {
    const {home, titleBlock, title, carouselSection, guides, schedule, comments} = styles;


    return (
        <>
            <section className={home}>


                    <div className={titleBlock}>
                        <h1 className={title}>Горячие <span style={{color: '#08c32f'}}>туры</span></h1>
                    </div>
                <div className='container'>

                    <div className={carouselSection}>
                        <Carousel/>
                    </div>

                    <div className={schedule}>
                        <h1 style={{color: '#326b9b', fontSize: 38+"px"}} className={title}>Расписание <span style={{color: '#08c32f'}}>Туров</span></h1>
                        <Schedule/>
                    </div>

                    <div className={guides}>
                        <h1 style={{color: '#326b9b', fontSize: 38+"px"}} className={title}>Лучшие <span style={{color: '#08c32f'}}>Гиды</span></h1>
                        <Guide/>
                    </div>

                    <div className={comments}>
                    <h1 style={{color: '#326b9b', fontSize: 38+"px"}} className={title}>Отзывы <span style={{color: '#08c32f'}}>по туру</span></h1>
                        <Comments/>
                    </div>

                </div>

            </section>
        </>
    );
};

export default Home;