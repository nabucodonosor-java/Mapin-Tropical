import React from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import Trucks from 'core/assets/images/trucks.jpg';
import AboutImg from 'core/assets/images/trucks-combo.jpeg';
import TrucksView from 'core/assets/images/truck-view.jpeg';
import Van from 'core/assets/images/van.jpeg';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://mapin-tropical.s3.sa-east-1.amazonaws.com/truck-main.jpeg)`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <img className="home-main-logo" src="https://mapin-tropical.s3.sa-east-1.amazonaws.com/logo-bco.jpg" alt="logo" />
                    <p className="home-container-title">Localizada na cidade de Araraquara o Posto de Mola <br />
                        Tropical traz para o mercado o que há de melhor <br /> para o seu caminhão e utilitário.
                        Fundada em XXXX, <br />a empresa é destaque na cidade e conquista novos <br />
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

        <div className="home-product-search">
            <h3 className="home-title-benefits mr-5">Conheça nosso catálogo de peças</h3>
            <Link to="/pecas" className="btn-search">
                <ButtonIcon text="inicie agora a sua busca" />
            </Link>
        </div>

        <h3 className="home-title-services">Nossos Principais Serviços</h3>

            <div className="home-service-list">
                <div className="product-card">
                    <h2 className="product-card-title">Molejos</h2>
                    <img src={Trucks} alt="tropical" className="product-img" />
                    <p className="list-p">Manutenções de todo o sistema de molejo</p>
                </div>
                <div className="product-card">
                    <h2>Tensores</h2>
                    <img src={Van} alt="cabelo" className="product-img" />
                    <p className="list-p">Manutenção de braços tensores</p>
                </div>
                <div className="product-card">
                    <h2>Balança</h2>
                    <img src={TrucksView} alt="cabelo" className="product-img" />
                    <p className="list-p">Manutenção e trocas de balanças tensores</p>
                </div>
            </div>
    </div>
);

export default Home;