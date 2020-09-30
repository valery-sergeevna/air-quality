import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    //state of open/hide hamburger-menu
    const [isMenuShowing, setMenuShowing] = useState(false);
    const toggleMenu = () => {
        setMenuShowing(!isMenuShowing);
    }
    return (
        <div className="menu">
            <div className="hamburger" onClick={toggleMenu}>
                <span></span>
            </div>
            {
                //open/hide hamburger-menu
                isMenuShowing && <div className="menu-nav">
                    <div className="close" onClick={toggleMenu}></div>
                    <div className="hamburger hamb-in-menu">
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <a href="#facts" className="menu-links__item">Основные факты</a>
                        <a href="#airQuality" className="menu-links__item">Индекс качества воздуха</a>
                        <a href="#policy" className="menu-links__item">Политика по уменьшению загрязнений</a>
                    </div>
                    <div className="menu-nav__text">
                        <p >
                            2020, Все права защищены
                        </p>
                        <p >
                            Согласие на обработку персональных данных <br />
                            Политика конфиденциальности
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default Navbar;