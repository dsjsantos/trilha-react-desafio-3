import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    max-width: 90%;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const SubTitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const Mensagem = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 0.9rem;
    margin-top: 20px;
`

export const MensagemJaTenho = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 0.9rem;
`

export const FacaLogin = styled.span`
    cursor: pointer;
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 0.9rem;
    color: #23DD7A;
    margin-left: 0.5em;
`

export const FormError = styled.div`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 0.8rem;
    margin-bottom: 1rem;
    color: red;
`
