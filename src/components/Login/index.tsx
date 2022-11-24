import Input from "../Input"
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Container } from "./style.module";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export interface ILoginForm{
    email: string;
    password: string;
}

const Login = () => {
    const schema = yup.object({
        email: yup.string().email("Deve ser um email").required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória").matches(
        /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Senha incorreta")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>({resolver: yupResolver(schema)})
    const { signIn } = useContext(AuthContext)

    return(
        <Container>  
            <header>
                <img src="./Logo.png" alt="Logo Kenzie hub" />
            </header>

            <form onSubmit = {handleSubmit(signIn)}>
                <h2>Login</h2>
                
                <Input label="Email" name="email" register={register} type="email" placeholder="Digite o seu email" />
                <div className="yup-notification"><p>{errors.email?.message}</p></div> 
                <Input label="Senha" name="password" register={register} type="password" placeholder="Digite o sua senha" />
                <div className="yup-notification"><p>{errors.password?.message}</p></div>
                <div className="centralize-button">
                    <button className="button-login" type="submit">Entrar</button>
                </div>
            </form>

            <p>Ainda não possui uma conta?</p>

            <div className="centralize-button-register">
                <button className="button-register"><Link to="/register">Cadastre-se</Link></button>    
            </div>
        </Container>
    )
}

export default Login