import React from 'react';
import { Marca } from 'core/types/Peca';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    marca: Marca;
    onRemove: (marcaId: number) => void;
} 

const Card = ({ marca, onRemove }: Props) => {

    return ( 
        <div className="card-base especialidade-card-admin">
                <div className="col-9 py-3">
                   <h6>{marca.nome}</h6>
                         
                </div>
                <div className="col-3 especialidade-card-btn">
                    <Link
                    to={`/admin/atendimento/${marca.id}`}
                    type="button"
                    className="btn btn-outline-secondary border-radius-10 mr-5"
                    >
                    EDITAR
                    </Link>

                    <button
                    type="button"
                    className="btn btn-outline-danger border-radius-10"
                    onClick={() => onRemove(marca.id)}
                    >
                    EXCLUIR
                    </button>
                </div>
            </div>
    )
}

export default Card;