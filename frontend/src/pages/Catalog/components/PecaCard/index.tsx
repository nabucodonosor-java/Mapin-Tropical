import { Peca } from 'core/types/Peca';
import React from 'react';
import './styles.scss';

type Props = {
    peca: Peca; 
}

const PecaCard = ({ peca }: Props) => (
    <div className="card-base border-radius-10 medico-card">
        <img src={peca.imgUrl} alt={peca.nome} className="medico-card-image"/>
        <div className="medico-card-info">
            <h6 className="medico-card-name">
                {peca.nome}
            </h6>
            <div className="medico-card-especialidade">
                {peca.marcas.map(e => " - " + e.nome + " - ")}
            </div>
            <div className="medico-card-especializacao">
                        
                <span className="badge rounded-pill bg-secondary mr-2">
                        {peca?.categorias.map(c => " - " + c.nome + " - ")}
                </span>
                         
            </div>  
        </div>
    </div>
);

export default PecaCard;