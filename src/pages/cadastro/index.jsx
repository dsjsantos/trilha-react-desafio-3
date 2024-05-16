import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleCadastro, SubTitleCadastro, Row, Wrapper, Mensagem, MensagemJaTenho, FacaLogin, FormError } from './styles';
import {InputContainer, InputText, IconContainer } from '../../components/Input/styles';

const Cadastro = () => {
    const navigate = useNavigate();
    const defaultValues = { username: "", email: "", senha: "" };
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues,
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            console.log('Realizar chamada da API com os dados:', formData);
            alert('Cadastro realizado com sucesso!')
        } catch(e) {
            //TODO: HOUVE UM ERRO
        }
    };

    //console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubTitleCadastro>Crie sua conta e make the change._</SubTitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <InputContainer>
                            <IconContainer><MdPerson /></IconContainer>
                            <InputText maxLength={20} type="text" placeholder="Usuário" {...register("username", {required: true, maxLength: 20})} />
                        </InputContainer>
                        {errors.username && <FormError>Usuário é obrigatório</FormError>}

                        <InputContainer>
                            <IconContainer><MdEmail /></IconContainer>
                            <InputText maxLength={256} type="text" placeholder="E-mail" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                        </InputContainer>
                        {errors.email && <FormError>Verifique o correto preenchimento do E-mail</FormError>}

                        <InputContainer>
                            <IconContainer><MdLock /></IconContainer>
                            <InputText maxLength={32} type="password" placeholder="Senha" {...register("senha", {required: true, maxLength: 32})} />
                        </InputContainer>
                        {errors.senha && <FormError>Senha é obrigatória</FormError>}

                        <Button title="Criar minha conta" variant="secondary" type="submit"/>
                        
                    </form>
                    <Row>
                        <Mensagem>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Mensagem>
                    </Row>
                    <Row>
                        <MensagemJaTenho>Já tenho conta.</MensagemJaTenho>
                        <FacaLogin onClick={() => navigate('/login')}>Fazer login</FacaLogin>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }