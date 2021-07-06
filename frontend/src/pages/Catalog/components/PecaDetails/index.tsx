import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import { makePrivateRequest } from 'core/utils/request';
import './styles.scss';
import { Peca } from 'core/types/Peca';
import PecaInfoLoader from '../Loaders/PecaInfoLoader';
import PecaDescriptionLoader from '../Loaders/PecaDescriptionLoader';

type ParamsType = {
    pecaId: string;
}

const PecaDetails = () => { 

    const { pecaId } = useParams<ParamsType>();
    const [peca, setPeca] = useState<Peca>();
    const[isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        makePrivateRequest({ url: `/pecas/${pecaId}`})
        .then(response => setPeca(response.data))
        .finally(() => setIsLoading(false));
    }, [pecaId]);

    return (
        <div className="medico-details-container">
            <div className="card-base border-radius-20 medico-details">
                <Link to="/pecas" className="medico-details-goback">
                <ArrowIcon className="medico-details-icon-goback"/>
                <h1 className="medico-details-text-goback">voltar</h1>
                </Link>
                <div className="morador-details-div-info">
                        {isLoading ? <PecaInfoLoader /> : (
                    <div className="medico-details-card">
                        <div className="text-center">
                                <img src={peca?.imgUrl} alt={peca?.nome} className="medico-details-image" />
                        </div>
                            <h1 className="medico-details-name">
                                {peca?.nome}
                            </h1>
                            <div className="medico-details-specialty">
                                <h6 className="medico-details-specialty-title">
                                    {peca?.marcas.map(e => e.nome)}
                                </h6>
                            </div>
                        </div>
                        )}   
                    </div>
                    <div className="card-base border-radius-20 medico-details-info-card">
                        {isLoading ? <PecaDescriptionLoader /> : (
                              <div className="morador-details-info-fields">
                              <div className="mb-2">
                                <h6 className="medico-details-info-title">NOME</h6>
                                {peca?.nome}
                              </div>
                              <div className="mb-2">
                                <h6 className="medico-details-info-title">MARCAS COMPATÍVEIS</h6>
                                {peca?.marcas.map(marca => marca.nome + " ")}
                              </div>
                              <div className="mb-2">
                                <h6 className="medico-details-info-title">Categorias</h6>
                                {peca?.categorias.map(cat => cat.nome + " ")}
                              </div>
                              <h1 className="medico-details-large-text-title">
                                   Descrição da Peça
                                   </h1>
                               <p className="medico-details-large-text-text">
                                   {peca?.descricao}
                               </p>                              
                              </div>
                        )}   
                    </div>
                </div>
            </div>

    );
};

export default PecaDetails;