import React from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import Molejo from 'core/assets/images/molejo.jpg';
import AboutImg from 'core/assets/images/trucks-combo.jpeg';
import Balanca from 'core/assets/images/balanca.jpg';
import Tensor from 'core/assets/images/tensor.jpg';
import Suporte from 'core/assets/images/suporte.jpg';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://mapin-tropical.s3.sa-east-1.amazonaws.com/main-ing.jpg)`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <img className="home-main-logo" src="https://mapin-tropical.s3.sa-east-1.amazonaws.com/logo-bco.jpg" alt="logo" />
                    <p className="home-container-title">Localizada na cidade de Araraquara o Posto de Molas <br />
                        Tropical traz para o mercado o que há de melhor <br /> para o seu caminhão e utilitário.
                        Fundada em 1998, <br />a empresa é destaque na cidade e conquista novos <br />
                        clientes a cada dia. </p>
                </div>

            </div>

        </section>

        <div className="home-content">

            <div>
                <h2 className="home-content-title">Sobre o Posto de Mola Tropical</h2>
                <p className="home-content-paraph">A oficina tem a
                    competência de profissionais qualificados e experientes com mais de 20 anos, utilizando o processo de
                    manutenção e ferramentas de alta tecnologia com o que há de mais avançado no mercado.</p>
            </div>
            <img className="home-content-img" src={AboutImg} alt="logo" />

        </div>

        <div className="home-pecas-search">
            <h3 className="home-title-benefits mb-2 mr-5">Conheça nosso catálogo de peças</h3>
            <Link to="/pecas" className="btn-search">
                <ButtonIcon text="inicie agora a sua busca" />
            </Link>
        </div>

        <h3 className="home-title-services">Nossos Principais Serviços</h3>

        <div className="home-service-list">
            <div className="service-card">
                <h2 className="service-card-title mb-1">Molejos</h2>
                <img src={Molejo} alt="tropical" className="service-img" />
            </div>
            <div className="service-card">
                <h2 className="service-card-title mb-1">Tensores</h2>
                <img src={Tensor} alt="cabelo" className="service-img" />

            </div>
            <div className="service-card">
                <h2 className="service-card-title mb-1">Balanças</h2>
                <img src={Balanca} alt="cabelo" className="service-img" />
            </div>
            <div className="service-card">
                <h2 className="service-card-title mb-1">Suportes</h2>
                <img src={Suporte} alt="cabelo" className="service-img" />
            </div>
        </div>
    </div>
);

export default Home;