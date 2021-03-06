import React from 'react';
import { ReactComponent as SearchIcon } from 'core/assets/images/lupa.svg';
import './styles.scss';

type Props = {
    nome?: string; 
    handleChangeName: (nome: string) => void;
    clearFilters: () => void; 
}

const CategoriaFilters = ({ nome, handleChangeName, clearFilters }: Props) => {

    return (
        <div className="card-base especialidade-filters-container">
            <div className="especialidade-input-search">
                <input
                    type="text"
                    value={nome}  
                    className="form-control"
                    placeholder="Pesquisar categorias"
                    onChange={event => handleChangeName(event.target.value)}                  
                />
                <SearchIcon />
            </div>
            <button 
                className="btn btn-outline-secondary border-radius-10"
                onClick={clearFilters}
                >
                LIMPAR FILTRO
            </button>
        </div>
    )
}

export default CategoriaFilters;