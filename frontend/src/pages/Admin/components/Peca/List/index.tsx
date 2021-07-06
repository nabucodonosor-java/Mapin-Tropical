import React, { useState, useCallback, useEffect } from 'react';
import { Marca, PecaResponse } from 'core/types/Peca';
import { useHistory } from 'react-router-dom';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import CardLoader from '../Loaders/MedicoCardLoader';
import Card from '../Card';
import Pagination from 'core/components/Pagination';
import PecaFilters  from 'core/components/Filters/PecaFilters';
import './styles.scss';

const List = () => {
    const [pecaResponse, setPecaResponse] = useState<PecaResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);
    const history = useHistory();
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState<Marca>();

    const getPecas = useCallback(() => {
        const params = {
            page: activePage,
            linesPerPage: 20,
            direction: 'DESC',
            orderBy: 'id',
            nome,
            marcaId: marca?.id
        }
        setIsLoading(true);
        makePrivateRequest({ url: '/pecas', params })
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

    const handleCreate = () => { 
        history.push('/admin/pecas/create'); 
    }

    const onRemove = (pecaId: number) => {
        const confirm = window.confirm('Deseja realmente excluir esta peça?');

        if (confirm) {
            makePrivateRequest({ url: `/pecas/${pecaId}`, method: 'DELETE' })
            .then(() => {
                toast.info('Peça deletada com sucesso!');
                getPecas();
            })
            .catch(() => {
                toast.error('Erro ao deletar peça');
            })
        }
    }

    return (
        <div>
            <div className="d-flex justify-content-between admin-div-btn">
                <button className="btn btn-primary btn-lg admin-btn-add mr-5" onClick={handleCreate}>
                    ADICIONAR
                </button>
                <PecaFilters
                    nome={nome}
                    marca={marca}
                    handleChangeMarca={handleChangeMarca}
                    handleChangeName={handleChangeName}
                    clearFilters={clearFilters}
                    />
            </div>
            
            <div className="admin-list-container">
                {isLoading ? <CardLoader /> : (
                    pecaResponse?.content.map(peca => (
                        <Card peca={peca} key={peca.id} onRemove={onRemove} />
                    ))
                )}
                {pecaResponse && (
                <Pagination 
                totalPages={pecaResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
                />
            )}             
            </div>
        </div>
    )
}

export default List;