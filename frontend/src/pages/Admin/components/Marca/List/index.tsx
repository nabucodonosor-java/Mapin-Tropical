import React, { useState, useCallback, useEffect } from 'react';
import { MarcaResponse } from 'core/types/Peca';
import { useHistory } from 'react-router-dom';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import CardLoader from '../Loaders/MedicoCardLoader';
import Card from '../Card';
import Pagination from 'core/components/Pagination';
import MarcaFilters  from 'core/components/Filters/MarcaFilters';
import './styles.scss';

const List = () => {
    const [marcaResponse, setMarcaResponse] = useState<MarcaResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();
    const [nome, setNome] = useState('');

    const getMarcas = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 20,
            direction: 'ASC',
            orderBy: 'id',
            nome
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/marcas', params })
       .then(response => setMarcaResponse(response.data))
       .finally(() => {
        setIsLoading(false);
       })
    }, [activePage, nome]);

    useEffect(() => {
        getMarcas();    
    }, [getMarcas]);
    
    const handleChangeName = (name: string) => {
        setActivePage(0);
        setNome(name);
    }

    const clearFilters = () => {
        setActivePage(0);
        setNome('');
    }

    const handleCreate = () => { 
        history.push('/admin/marcas/create'); 
    }

    const onRemove = (marcaId: number) => {
        const confirm = window.confirm('Deseja realmente excluir esta marca?');

        if (confirm) {
            makePrivateRequest({ url: `/marcas/${marcaId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Marca deletada com sucesso!');
                getMarcas();
            })
            .catch(() => {
                toast.error('Erro ao deletar marca');
            })
        }
    }

    return ( 
        <div>
            <div className="d-flex justify-content-between admin-div-btn">
                <button className="btn btn-primary btn-lg admin-btn-add mr-3" onClick={handleCreate}>
                    ADICIONAR
                </button>

                <MarcaFilters
                nome={nome}
                handleChangeName={handleChangeName}
                clearFilters={clearFilters}
                />
            </div>
            
            <div className="admin-list-container">
                {isLoading ? <CardLoader /> : (
                    marcaResponse?.content.map(marca => (
                        <Card marca={marca} key={marca.id} onRemove={onRemove} />
                    ))
                )}
                {marcaResponse && (
                <Pagination 
                totalPages={marcaResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
                />
            )}             
            </div>
        </div>
    )
}

export default List;