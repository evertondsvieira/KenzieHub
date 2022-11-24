import Input from "../Input"
import { Container, Header } from "./style.module";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext, IRegister } from '../../contexts/AuthContext';

const Register = () => {
    const schema = yup.object({
        name: yup.string().required("O nome é obrigatório"),
        email: yup.string().email("Deve ser um email").required("O email é obrigatório"),
        password: yup.string().required("A senha é obrigatória").matches(
            /^(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"),
        confirmPassword: yup.string().oneOf([yup.ref("password")], "A confirmação deve ser igual a senha").required("A confirmação é obrigatória"),
        bio: yup.string().required("A bio é obrigatória"),
        contact: yup.string().required("O contato é obrigatório"),
        course_module: yup.string().required().oneOf(["primeiro-modulo", "segundo-modulo", "terceiro-modulo", "quarto-modulo", "quinto-modulo"], "O módulo é obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<IRegister>({resolver: yupResolver(schema)})
    const { subRegister } = useContext(AuthContext)
      
    return(
        <>
            <Header>
                <div>
                <img src="./Logo.png" alt="Logo Kenzie hub" />
                    <button><Link to="/">Voltar</Link></button>
                </div>
            </Header>

            <Container onSubmit = {handleSubmit(subRegister)}>
                <h2>Crie sua conta</h2>
                <p>Rapido e grátis, vamos nessa</p>
                <Input label="Nome" name="name" register={register} type="text" placeholder="Digite aqui seu nome" />
                <div className="yup-notification"><p>{errors.name?.message}</p></div>
                <Input label="Email" name="email" register={register} type="email" placeholder="Digite aqui seu email"/>
                <div className="yup-notification"><p>{errors.email?.message}</p></div> 
                <Input label="Senha" name="password" register={register} type="password" placeholder="Digite aqui sua senha"/>
                <div className="yup-notification"><p>{errors.password?.message}</p></div> 
                <Input label="Confirmar senha" name="confirmPassword" register={register} type="password" placeholder="Digite novamente sua senha"/> 
                <div className="yup-notification"><p>{errors.confirmPassword?.message}</p></div> 
                <Input label="Bio" name="bio" type="text" register={register} placeholder="Fale sobre você"/>                   
                <div className="yup-notification"><p>{errors.bio?.message}</p></div> 
                <Input label="Contato" name="contact" register={register} type="number" placeholder="Opção de contato"/>              
                <div className="yup-notification"><p>{errors.contact?.message}</p></div>
                <div>
                    <label>Selecionar módulo</label>
                    <select id="course_module" {...register("course_module")}>
                        <option value="choose-module">Selecione um módulo</option>
                        <option value="primeiro-modulo">Primeiro Módulo</option>
                        <option value="segundo-modulo">Segundo Módulo</option>
                        <option value="terceiro-modulo">Terceiro Módulo</option>
                        <option value="quarto-modulo">Quarto Módulo</option>
                        <option value="quinto-modulo">Quinto Módulo</option>
                    </select>
                    <div className="yup-notification"><p>{errors.course_module?.message}</p></div> 
                </div>
                <div className="centralize-button">
                    <button>Cadastrar</button>
                </div>
            </Container>
        </>
    )
}

export default Register