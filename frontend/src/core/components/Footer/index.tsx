import React from 'react';
import LogoFace from 'core/assets/images/logo-face.png';
import './styles.scss';

const Footer = () => {
    return (
        <div className="footer">
            <h6 className="footer-title">Endereço: Av. Luiz de Camões, 1182 - Jardim Quitandinha</h6>
            <p className="footer-title-p">Araraquara - SP -- (16) 3332-3305</p>
            <div className="footer-div-img">
                <img src={LogoFace} alt="logo-face" className="footer-img"/>
                <a className="footer-p" href="https://www.facebook.com/postodemolastropical">https://www.facebook.com/postodemolastropical</a>
            </div>

        </div>
    );
}
export default Footer;