import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { makePrivateRequest } from 'core/utils/request';
import { toast } from 'react-toastify';
import BaseForm from '../../BaseForm';
import './styles.scss';

export type FormState = {
    id: number;
    nome: string;
}

type ParamsType = {
    marcaId: string;
}

const Form = () => {
    const { register, handleSubmit, errors, setValue } = useForm<FormState>();
    const history = useHistory();
    const { marcaId } = useParams<ParamsType>();
    
    const isEditing = marcaId !== 'create';
    const formTitle = isEditing ? 'Editar Marca' : 'Cadastrar Marca';

    useEffect(() => {
       if (isEditing) {
        makePrivateRequest({ url: `/marcas/${marcaId}`})
        .then(response => {
            setValue('nome', response.data.nome);
        })
       }
    }, [marcaId, isEditing, setValue]);  

    const onSubmit = (data: FormState) => {
        const payload = {
            ...data
        }
        makePrivateRequest({
            url: isEditing ? `/marcas/${marcaId}` : '/marcas',
            method: isEditing ? 'PUT' : 'POST',
            data: payload
            })
        .then(() => {
            toast.info('Marca salva com sucesso!'); 
            history.push('/admin/marcas');
        })
        .catch(() => {
            toast.error('Erro ao salvar marca!');
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
                        placeholder="Nome da marca"
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