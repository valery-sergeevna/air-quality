import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import './AirQuality.scss';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsZXJpaWE3NzciLCJhIjoiY2tmbGFxaDRtMHoyaTMwcWhlMzJxcjY5cyJ9.hDJihE0BoZdayrcQe0hasA';

const AirQuality = () => {
    const mapContainer = useRef(null);
    const [locationInfo, setLocationInfo] = useState({
        lng: 31.1828699,
        lat: 48.383022,
        zoom: 5,
    });

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [locationInfo.lng, locationInfo.lat],
            zoom: locationInfo.zoom
        });
    }, [])

    return (
        <section className={'air-q container'}>
            <h2 className="air-q__title">Индекс качества воздуха в режиме реального времени</h2>

            <div className="air-q-map" ref={mapContainer} />
            <p className="air-q__desc">Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше.</p>
        </section>
    );
};

export default AirQuality;