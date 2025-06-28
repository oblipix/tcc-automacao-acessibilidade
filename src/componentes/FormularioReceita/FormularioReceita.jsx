import React from 'react';
import { styled } from "styled-components";

const FormContainer = styled.section`
    padding: 32px;
    background: var(--branco, #FFF);
    border-radius: 16px;
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const FormTitulo = styled.h2`
    color: var(--verde-escuro, #21402E);
    text-align: center;
    font-family: Nunito Sans;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    margin-bottom: 16px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

// A tag LabelStyled será usada para estilizar os labels
const LabelStyled = styled.label`
    font-family: Nunito Sans;
    font-size: 16px;
    font-weight: 600;
    color: var(--verde-escuro, #21402E);
`;

const InputStyled = styled.input`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--cinza-claro, #D1D1D1);
    font-size: 16px;
    line-height: 150%;
`;

const TextAreaStyled = styled.textarea`
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid var(--cinza-claro, #D1D1D1);
    font-size: 16px;
    line-height: 150%;
    min-height: 120px;
    resize: vertical;
`;

const ButtonStyled = styled.button`
    padding: 12px 24px;
    border-radius: 8px;
    background: var(--verde-medio, #3D6D4A);
    color: var(--branco, #FFF);
    font-size: 18px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    align-self: center;
    &:hover {
        background: var(--verde-escuro, #21402E);
    }
`;

const FormularioReceita = () => {
    return (
        <FormContainer>
            <FormTitulo>Envie sua Receita</FormTitulo>

            <form>
                <FormGroup>
                    {/* CORREÇÃO: LABEL ASSOCIADO AO INPUT */}
                    <LabelStyled htmlFor="nomeReceita">Nome da sua Receita:</LabelStyled>
                    <InputStyled type="text" placeholder="Ex: Bolo de Chocolate" id="nomeReceita" />
                </FormGroup>
                
                <FormGroup>
                    {/* CORREÇÃO: LABEL ASSOCIADO AO TEXTAREA */}
                    <LabelStyled htmlFor="modoPreparo">Ingredientes e Modo de Preparo:</LabelStyled>
                    <TextAreaStyled placeholder="Descreva aqui os ingredientes e o passo a passo..." id="modoPreparo"></TextAreaStyled>
                </FormGroup>

                <FormGroup>
                    {/* CORREÇÃO: LABEL ASSOCIADO AO INPUT DE EMAIL */}
                    <LabelStyled htmlFor="emailContato">Seu e-mail para contato:</LabelStyled>
                    <InputStyled type="email" placeholder="email@exemplo.com" id="emailContato" />
                </FormGroup>

                <ButtonStyled type="submit">Enviar Receita</ButtonStyled>
            </form>
        </FormContainer>
    );
}

export default FormularioReceita;