import React, { useEffect, useRef, useState } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZXJpaWE3NzciLCJhIjoiY2tmbGFxaDRtMHoyaTMwcWhlMzJxcjY5cyJ9.hDJihE0BoZdayrcQe0hasA';

const AirQuality = () => {
    const mapContainer = useRef(null);
    const [locationInfo, setLocationInfo] = useState({
        lng: 31.2804,
        lat: 49.0980,
        zoom: 4.82,
    });

    let map;
    useEffect(() => {
        map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
        //control map
        let nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'bottom-left');
        map.addControl(new mapboxgl.FullscreenControl());

        let markerone = new mapboxgl.Marker({ "color": "rgb(255, 0, 0)" })
            .setLngLat([37.54131, 47.09514])
            .setPopup(new mapboxgl.Popup().setHTML("Нездоровый: <strong>163</strong>"))
            .addTo(map);
        let markertwo = new mapboxgl.Marker({ "color": "rgb(255, 0, 0)" })
            .setLngLat([37.8022, 48.023])
            .setPopup(new mapboxgl.Popup().setHTML("Нездоровый: <strong>169</strong>"))
            .addTo(map);
        let markerthree = new mapboxgl.Marker({ "color": "#EEE851" })
            .setLngLat([24.70972, 48.9215])
            .setPopup(new mapboxgl.Popup().setHTML("Умеренный: <strong>58</strong>"))
            .addTo(map);
        let markerfour = new mapboxgl.Marker({ "color": "#96D962" })
            .setLngLat([30.5238, 50.4547])
            .setPopup(new mapboxgl.Popup().setHTML("Высокий: <strong>13</strong>"))
            .addTo(map);
        let markerfive = new mapboxgl.Marker({ "color": "#96D962" })
            .setLngLat([36.25272, 49.98081])
            .setPopup(new mapboxgl.Popup().setHTML("Высокий: <strong>20</strong>"))
            .addTo(map);
        let markersix = new mapboxgl.Marker({ "color": "#FFBD3E" })
            .setLngLat([35.1903, 47.8229])
            .setPopup(new mapboxgl.Popup().setHTML("Нездоровый для чувствительных групп: <strong>114</strong>"))
            .addTo(map);
        let markerseven = new mapboxgl.Marker({ "color": "#96D962" })
            .setLngLat([30.72771, 46.482])
            .setPopup(new mapboxgl.Popup().setHTML("Высокий: <strong>1</strong>"))
            .addTo(map);
    });

    return (
        <section className={'air-q container'}>
            <h2 className="air-q__title">Индекс качества воздуха в режиме реального времени</h2>

            <div className="air-q-map" ref={mapContainer}>
                <div id="state-legend" className="legend">
                    <div className='one'>
                        <span>-</span>
                        <span>302</span>
                    </div>
                    <div className='two'>
                        <span>0-50</span>
                        <span>411</span>
                    </div>
                    <div className='three'>
                        <span>51-100</span>
                        <span>20</span>
                    </div>
                    <div className='four'>
                        <span>101-150</span>
                        <span>3</span>
                    </div>
                    <div className='five'>
                        <span>151-200</span>
                        <span>9</span>
                    </div>
                    <div className='six'>
                        <span>201-300</span>
                        <span>0</span>
                    </div>
                    <div className='seven'>
                        <span>301+</span>
                        <span>0</span>
                    </div>
                </div>
            </div>
            <p className="air-q__desc">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    );
};

export default AirQuality;