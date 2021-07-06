import React, { useEffect, useState } from 'react';
import { Categoria, Marca } from 'core/types/Peca';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import Select from 'react-select';
import ImageUpload from '../ImageUpload';
import './styles.scss';

export type FormState = {
    id: number;
    imgUrl: string;
    nome: string;
    descricao: string;
    categorias: Categoria[];
    marcas: Marca[];
}

type ParamsType = {
    pecaId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue, control } = useForm<FormState>();
    const history = useHistory();
    const { pecaId } = useParams<ParamsType>();
    const [isLoadingCategorias, setIsLoadingCategorias] = useState(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isLoadingMarcas, setIsLoadingMarcas] = useState(false);
    const [marcas, setMarcas] = useState<Marca[]>([]);

    const [uploadedImgUrl, setUploadedImgUrl] = useState('');
    const [pecaImgUrl, setPecaImgUrl] = useState('');
    const isEditing = pecaId !== 'create';
    const formTitle = isEditing ? 'Editar Peça' : 'Cadastrar Peça';

    useEffect(() => {
        if (isEditing) {
            makePrivateRequest({ url: `/pecas/${pecaId}` })
                .then(response => {

                    setValue('nome', response.data.nome);
                    setValue('descricao', response.data.descricao);

                    setValue('categorias', response.data.categorias);
                    setValue('marcas', response.data.marcas);

                    setPecaImgUrl(response.data.imgUrl);
                })
        }
    }, [pecaId, isEditing, setValue]);

    useEffect(() => {
        setIsLoadingCategorias(true);
        makePrivateRequest({ url: '/categorias' })
            .then(response => setCategorias(response.data.content))
            .finally(() => setIsLoadingCategorias(false));
    }, []);

    useEffect(() => {
        setIsLoadingMarcas(true);
        makePrivateRequest({ url: '/marcas' })
            .then(response => setMarcas(response.data.content))
            .finally(() => setIsLoadingMarcas(false));
    }, []);

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data,
            imgUrl: uploadedImgUrl || pecaImgUrl
        }
        makePrivateRequest({
            url: isEditing ? `/pecas/${pecaId}` : '/pecas',
            method: isEditing ? 'PUT' : 'POST',
            data: payload
        })
            .then(() => {
                toast.info('Peça salva com sucesso!');
                history.push('/admin/pecas');
            })
            .catch(() => {
                toast.error('Erro ao salvar peça!');
            })
    }

    const onUploadSuccess = (imgUrl: string) => {
        setUploadedImgUrl(imgUrl);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title={formTitle}>
                <div className="row">
                    <div className="col-6">
                        <div className="margin-bottom-30">
                            <Controller
                                as={Select}
                                name="categorias"
                                rules={{ required: true }}
                                control={control}
                                isLoading={isLoadingCategorias}
                                options={categorias}
                                getOptionLabel={(option: Categoria) => option.nome}
                                getOptionValue={(option: Categoria) => String(option.id)}
                                classNamePrefix="especializacoes-select"
                                className="input-select"
                                placeholder="Categoria da peça"
                                inputId="categorias"
                                defaultValue=""
                                isMulti
                            />
                            {errors.categorias && (
                                <div className="invalid-feedback d-block">
                                    Campo obrigatório!
                                </div>
                            )}

                            <Controller
                                as={Select}
                                name="marcas"
                                rules={{ required: true }}
                                control={control}
                                isLoading={isLoadingMarcas}
                                options={marcas}
                                getOptionLabel={(option: Marca) => option.nome}
                                getOptionValue={(option: Marca) => String(option.id)}
                                classNamePrefix="especializacoes-select"
                                className="input-select"
                                placeholder="Marcas compatíveis"
                                inputId="marcas"
                                defaultValue=""
                                isMulti
                            />
                            {errors.marcas && (
                                <div className="invalid-feedback d-block">
                                    Campo obrigatório!
                                </div>
                            )}
                        </div>

                        <div className="margin-bottom-30 d-flex">

                            <input
                                ref={register({ required: "Campo obrigatório" })}
                                name="nome"
                                type="text"
                                className="form-control input-base"
                                placeholder="Nome da peça"
                            />
                            {errors.nome && (
                                <div className="invalid-feedback d-block">
                                    {errors.nome.message}
                                </div>
                            )}
                        </div>            

                        <div className="margin-bottom-30">
                            <ImageUpload onUploadSuccess={onUploadSuccess} pecaImgUrl={pecaImgUrl} />
                        </div>
                    </div>
                    
                    <h6>Descrição Técnica da Peça</h6>
                    <textarea
                        ref={register({ required: false })}
                        name="descricao"
                        className="form-control input-base mb-3 mt-2"
                        placeholder="Descrição Técnica da Peça"
                        cols={30}
                        rows={10}
                    />
                </div>
            </BaseForm>
        </form>
    )
}
export default Form;