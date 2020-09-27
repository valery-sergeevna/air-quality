import React from 'react';
import "./Footer.scss";

const Footer = ({ partners, links, author, designer }) => {
    const partnersLogos = partners.map((logo, i) => <img key={i} src={logo} alt='partner logo' className='footer-partners__item'></img>);
    const navLinks = links.map((link, i) => <a className="footer-nav__item" href={link.href} key={i}>{link.title}</a>);
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-partners">
                    {partnersLogos}
                </div>

                <div className="footer-text__wrap">
                    <div className="footer-nav">
                        {navLinks}
                    </div>

                    <p className="footer-nav__text">
                        Сайт был разработан <span className="text-yellow">{author}</span> в учебных целях, в рамках образовательной программы IT nation. Дизайн сайта создан <span className="text-yellow">{designer}</span>.
					</p>
                </div>

                <p className="footer__text">
                    2020, Все права защищены
				</p>
                <p className="footer__text">
                    Согласие на обработку персональных данных <br />
					Политика конфиденциальности
				</p>
            </div>
        </footer>
    );
};

export default Footer;