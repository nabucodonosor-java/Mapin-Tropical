import React, { useState, useCallback, useEffect } from 'react';
import { CategoriaResponse } from 'core/types/Peca';
import { useHistory } from 'react-router-dom';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import CardLoader from '../Loaders/MedicoCardLoader';
import Card from '../Card';
import Pagination from 'core/components/Pagination';
import CategoriaFilters  from 'core/components/Filters/CategoriaFilters';
import './styles.scss';

const List = () => {
    const [categoriaResponse, setCategoriaResponse] = useState<CategoriaResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();
    const [nome, setNome] = useState('');

    const getCategorias = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 20,
            direction: 'ASC',
            orderBy: 'id',
            nome
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/categorias', params })
       .then(response => setCategoriaResponse(response.data))
       .finally(() => {
        setIsLoading(false);
       })
    }, [activePage, nome]);

    useEffect(() => {
        getCategorias();    
    }, [getCategorias]);
    
    const handleChangeName = (name: string) => {
        setActivePage(0);
        setNome(name);
    }

    const clearFilters = () => {
        setActivePage(0);
        setNome('');
    }

    const handleCreate = () => { 
        history.push('/admin/categorias/create'); 
    }

    const onRemove = (categoriaId: number) => {
        const confirm = window.confirm('Deseja realmente excluir esta categoria?');

        if (confirm) {
            makePrivateRequest({ url: `/categorias/${categoriaId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Categoria deletada com sucesso!');
                getCategorias();
            })
            .catch(() => {
                toast.error('Erro ao deletar categoria');
            }) 
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between admin-div-btn">
                <button className="btn btn-primary btn-lg admin-btn-add mr-3" onClick={handleCreate}>
                    ADICIONAR
                </button>

                <CategoriaFilters
                nome={nome}
                handleChangeName={handleChangeName}
                clearFilters={clearFilters}
                />
            </div>
            
            <div className="admin-list-container">
                {isLoading ? <CardLoader /> : (
                    categoriaResponse?.content.map(categoria => (
                        <Card categoria={categoria} key={categoria.id} onRemove={onRemove} />
                    ))
                )}
                {categoriaResponse && (
                <Pagination 
                totalPages={categoriaResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
                />
            )}             
            </div>
        </div>
    )
}

export default List;