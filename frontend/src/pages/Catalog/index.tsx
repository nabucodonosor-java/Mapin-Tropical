import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Marca, PecaResponse } from 'core/types/Peca';
import { makeRequest } from 'core/utils/request';
import PecaCard from './components/PecaCard';
import PecaCardLoader from './components/Loaders/PecaCardLoader';
import Pagination from 'core/components/Pagination';
import PecaFilters from 'core/components/Filters/PecaFilters';
import './styles.scss';

const Catalog = () => {

    const [pecaResponse, setPecaResponse] = useState<PecaResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState<Marca>();

    const getPecas = useCallback(() => {
        const params = { 
            page: activePage,
            linesPerPage: 15,
            nome,
            marcaId: marca?.id
        }

        setIsLoading(true);
        makeRequest({ url: '/pecas', params })
       .then(response => setPecaResponse(response.data))
       .finally(() => {
        setIsLoading(false);
       })
    }, [activePage, nome, marca]);

    useEffect(() => {
        getPecas();
    }, [getPecas]);

    const handleChangeName = (name: string) => {
        setActivePage(0);
        setNome(name);
    }

    const handleChangeMarca = (marca: Marca) => {
        setActivePage(0);
        setMarca(marca);
    }

    const clearFilters = () => {
        setActivePage(0);
        setMarca(undefined);
        setNome('');
    }

    return (
        <div className="catalog-container">
            <div className="catalog-filter-container">
               
                <PecaFilters
                    nome={nome}
                    marca={marca}
                    handleChangeMarca={handleChangeMarca}
                    handleChangeName={handleChangeName}
                    clearFilters={clearFilters}
                    />
            </div>
            <div className="catalog-pecas">
                {isLoading ? <PecaCardLoader /> : (
                    pecaResponse?.content.map(peca => (
                        <Link to={`/pecas/${peca.id}`} key={peca.id}>
                            <PecaCard peca={peca}/>
                        </Link> 
                     ))
                )}           
            </div>
            {pecaResponse && (
                <Pagination 
                totalPages={pecaResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
                />
            )}
        </div>
    )
}

export default Catalog;