import React, {Component} from "react";
import Slider from "react-slick";
import   './carousel.css'
import wallpaper1 from '../../../Assets/Background/Image/toursTitle/wallpaper-1.jpg'
import wallpaper2 from '../../../Assets/Background/Image/toursTitle/wallpaper-2.jpg'
import wallpaper3 from '../../../Assets/Background/Image/toursTitle/AidanaBack.jpg'
import wallpaper4 from '../../../Assets/Background/Image/toursTitle/AkylBack.jpg'
import wallpaper5 from '../../../Assets/Background/Image/toursTitle/ZamanBack.jpg'
import wallpaper6 from '../../../Assets/Background/Image/toursTitle/unsplash.jpg'

export default class AutoPlay extends Component {


    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 4000,
            autoplaySpeed: 3000,
            cssEase: "linear"
        };

        return (
            <div className="carousel">
                <Slider {...settings} >
                    <div>
                        <div className="page">
                            <img src={wallpaper1} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="page">
                            <img src={wallpaper2} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="page">
                            <img src={wallpaper3} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="page">
                            <img src={wallpaper4} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="page">
                            <img src={wallpaper5} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="page">
                            <img src={wallpaper6} alt="" className="img"/>
                            <div className="titleBlock">
                                <h2 className="title">Green Land</h2>
                                <button className="button">Подробнее</button>

                            </div>

                        </div>
                    </div>



                </Slider>
            </div>
        );
    }
}