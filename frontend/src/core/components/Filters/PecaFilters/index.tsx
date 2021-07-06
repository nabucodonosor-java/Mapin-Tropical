import React, { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from 'core/assets/images/lupa.svg';
import { Marca } from 'core/types/Peca';
import { makePrivateRequest } from 'core/utils/request';
import Select from 'react-select';
import './styles.scss';

type Props = {
    nome?: string;
    handleChangeName: (nome: string) => void;
    handleChangeMarca: (marca: Marca) => void;
    clearFilters: () => void;
    marca?: Marca; 
}

const PecaFilters = ({ nome, handleChangeName, marca, handleChangeMarca, clearFilters }: Props) => {

    const [isLoadingMarca, setIsLoadingMarca] = useState(false);
    const [marcas, setMarcas] = useState<Marca[]>([]);

    useEffect(() => { 
        setIsLoadingMarca(true);
        makePrivateRequest({ url: '/marcas' })
            .then(response => setMarcas(response.data.content))
            .finally(() => setIsLoadingMarca(false));
    }, []);  

    return (
        <div className="card-base medico-filters-container">
            <div className="medico-input-search">
                <input
                    type="text"
                    value={nome}  
                    className="form-control"
                    placeholder="Pesquisar peça"
                    onChange={event => handleChangeName(event.target.value)}                  
                />
                <SearchIcon />
            </div>
            <Select
                name="marcas"
                key={`select-${marca?.id}`}
                value={marca}
                isLoading={isLoadingMarca}
                options={marcas}
                getOptionLabel={(option: Marca) => option.nome}
                getOptionValue={(option: Marca) => String(option.id)}
                className="medico-filter-select-container"
                classNamePrefix="medico-especializacoes-select"
                placeholder="Pesquisar por marcas"
                inputId="marcas"
                onChange={value => handleChangeMarca(value as Marca)}
                isClearable
            />
            <button 
                className="btn btn-outline-secondary border-radius-10"
                onClick={clearFilters}
                >
                LIMPAR FILTRO
            </button>
        </div>
    )
}

export default PecaFilters;