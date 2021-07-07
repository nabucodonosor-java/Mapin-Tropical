import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';

export type FormState = { 
    id: number;
    nome: string;
}

type ParamsType = {
    categoriaId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue } = useForm<FormState>();
    const history = useHistory();
    const { categoriaId } = useParams<ParamsType>();
    
    const isEditing = categoriaId !== 'create';
    const formTitle = isEditing ? 'Editar Categoria' : 'Cadastrar Categoria';

    useEffect(() => {
       if (isEditing) {
        makePrivateRequest({ url: `/categorias/${categoriaId}`})
        .then(response => {
            setValue('nome', response.data.nome);
        })
       }
    }, [categoriaId, isEditing, setValue]);  

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data
        }
        makePrivateRequest({
            url: isEditing ? `/categorias/${categoriaId}` : '/categorias',
            method: isEditing ? 'PUT' : 'POST',
            data: payload
            })
        .then(() => {
            toast.info('Categoria salva com sucesso!'); 
            history.push('/admin/categorias');
        })
        .catch(() => {
            toast.error('Erro ao salvar categoria!');
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title={formTitle}>
                <div className="row">
                    <input 
                        ref={register({required: "Campo obrigatório"})}
                        name="nome"
                        type="text" 
                        className="form-control input-base"
                        placeholder="Nome da categoria"
                    />
                    {errors.nome && (
                        <div className="invalid-feedback d-block">
                            {errors.nome.message}
                        </div>
                    )}
                </div>     
            </BaseForm>
        </form>
    )
}
export default Form;