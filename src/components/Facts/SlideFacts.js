import React from 'react';

const SlideFacts = ({ item }) => {
    return (
        <div className="facts__slide">
            <img src={item.imgUrl} alt="slideimg"></img>
            <p className="facts__desc">{item.desc}</p>
        </div>
    );
};

export default SlideFacts;