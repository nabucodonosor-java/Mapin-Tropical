import React from 'react';
import ButtonIcon from 'core/components/ButtonIcon';
import { Link } from 'react-router-dom';
import MainImage from 'core/assets/images/banner.jpg';
import Trucks from 'core/assets/images/trucks.jpg';
import TrucksView from 'core/assets/images/truck-view.jpeg';
import Van from 'core/assets/images/van.jpeg';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <img className="home-main-image" src={MainImage} alt="MainImage" />
        <div className="home-content">
            <h2 className="home-title">Sobre o Posto de Mola Tropical</h2>

            <p className="home-paraph">Localizada na cidade de Araraquara o <strong>Posto de Mola Tropical</strong> traz para o mercado o que há de melhor para o seu caminhão e utilitário.
                Fundada em XXXX, a empresa é destaque na cidade e conquista novos clientes a cada dia.</p>

            <p className="home-mission-paraph"><em>Nossa missão é: <strong className="red-title">"Executar o melhor serviço para seu caminhão e utilitário"</strong>.</em></p>

            <p className="home-paraph">A oficina tem a competência de profissionais qualificados e experientes com mais de 20 anos, utilizando o processo de manutenção e ferramentas de alta tecnologia com o que há de mais avançado no mercado.</p>
        </div>
        <h3 className="home-title-benefits">Nossos Principais Serviços</h3>

        <div className="product-container">
            <ul className="product-list">
                <li className="product-card">
                    <h2>Molejos</h2>
                    <img src={Trucks} alt="cabelo" className="product-img" />
                    <p className="list-p">Manutenções de todo o sistema de molejo</p>
                </li>
                <li className="product-card">
                    <h2>Tensores</h2>
                    <img src={Van} alt="cabelo" className="product-img" />
                    <p className="list-p">Manutenção de braços tensores</p>
                </li>
                <li className="product-card">
                    <h2>Balança</h2>
                    <img src={TrucksView} alt="cabelo" className="product-img" />
                    <p className="list-p">Manutenção e trocas de balanças tensores</p>
                </li>
            </ul>
        </div>
        <div className="home-product-search">
            <h3 className="home-title-benefits">Conheça nosso catálogo de peças</h3>
            <Link to="/pecas" className="btn-search">
                <ButtonIcon text="inicie agora a sua busca" />
            </Link>
        </div>
    </div>
);

export default Home;