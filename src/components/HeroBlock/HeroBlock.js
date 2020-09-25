import React from 'react';
import './HeroBlock.scss';

const HeroBlock = ({ title, links, logos }) => {
    const logosImages = logos.map((logoItem, i) => <img key={i} src={logoItem} alt="partner-logo" className="partners__item" />);
    const navItems = links.map((link, i) => <a key={i} href={link.href} className="nav__item">{link.title}</a>);

    return (
        <section className="hero">
            <div className="container">
                <div className="partners">
                    {logosImages}
                </div>
                <nav className="nav">
                    {navItems}
                </nav>
                <h1 className="hero__title">{title}</h1>
                <a href="check" className="hero__link">Отследить</a>
            </div>
        </section>
    );
};

export default HeroBlock;