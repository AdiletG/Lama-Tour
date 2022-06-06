import React from 'react';
import './map.css'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <div className="map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Adbd4b336a9931e94880bf23c6ac3ca58ac954e479f62bd40523184c8d84a6860&amp;source=constructor"
                        width="500" height="500" frameBorder="0"></iframe>
        </div>
    );
};

export default Map;