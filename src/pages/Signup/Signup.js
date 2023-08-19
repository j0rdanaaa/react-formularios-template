import React, { useState } from 'react'
import { ContainerForm, ContainerSignup, Input } from './styled'
import useForm from '../../hooks/useForm'

export default function Signup() {

   const { form, onChangeInputs, clearInputs }= useForm ({
    nomeUsuario:'',
    email:'',
    senha:'',
    confirmasenha:''

   })
    const enviarCadastro = (event) => {
        event.preventDefault()
        //* EXTRA: validando a senha - ter certeza que o usuário sabe qual senha cadastrou
        if (form.senha === form.confirmaSenha) {
            console.log(form)
            clearInputs()
        } else {
            alert('Senhas diferentes')
        }
    }

    return (
        <ContainerSignup>
            <ContainerForm onSubmit={enviarCadastro}>
                <label htmlFor='nome'>Nome de usuario:</label>
                <Input
                    id='nome'
                    name='nomeUsuario'
                    value={form.nomeUsuario}
                    onChange={onChangeInputs}
                    placeholder="username"
                    required
                />
                <label htmlFor='email'>Email:</label>
                <Input
                    id='email'
                    name='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    placeholder="nome@email.com"
                    required
                />
                <label htmlFor='senha'>Senha:</label>
                <Input
                    id='senha'
                    name='senha'
                    value={form.senha}
                    onChange={onChangeInputs}
                    placeholder="Crie sua senha"
                    pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$'
                    title='deve conter ao menos um número, uma letra minúscula, uma letra maiúscula, um caractere especial e ao menos 8 dos caracteres mencionados'
                    required

                />
                <label htmlFor='confirma-senha'>Confirmação de senha:</label>
                <Input
                    id='confirma-senha'
                    name='confirmaSenha'
                    value={form.confirmaSenha}
                    onChange={onChangeInputs}
                    placeholder="Confirme a senha"
                    required
                />
                <button>Cadastrar</button>
            </ContainerForm>
        </ContainerSignup>
    )
}
