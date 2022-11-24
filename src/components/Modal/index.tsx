import { Container } from "./style.module"
import { MdClose } from 'react-icons/md'
import { useContext, useEffect, useRef } from "react"
import { TechContext } from "../../contexts/TechContext"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { AuthContext, ITech, ITechRequest } from "../../contexts/AuthContext"
import { IOpenModal } from "../Dashboard"


const Modal = ({setOpenModal}:IOpenModal) => {
    const schema = yup.object({
        title: yup.string().required("O título é obrigatório"),
        status: yup.string().required().oneOf(["Iniciante", "Intermediario", "Avancado"], "O status é obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ITechRequest>({resolver: yupResolver(schema)})
    const { createTech } = useContext(TechContext)

    const { user, setUser } = useContext(AuthContext)

    async function handleCreateTech(data:ITechRequest){
        const response = await createTech(data)
        if(response.data){
            const creatTech = ({id: response.data.id, title: response.data.title, status: response.data.status})
            const techs = ([...user.techs, creatTech] as ITech[])
            setUser({...user, techs})
        }
        setOpenModal(false)
    }

    const modalRef = useRef<HTMLFormElement | null>(null)
    useEffect(() => {
        function handleOutClick(event:any) {
            if(!modalRef.current?.contains(event.target)){
                setOpenModal(false)
            }
        }
        document.addEventListener('mousedown', handleOutClick)
        return() => {
          document.removeEventListener('mousedown', handleOutClick)
        }
    }, [])

    return(
        <Container>
            <form onSubmit = {handleSubmit(handleCreateTech)} className="modal-box" ref={modalRef}>
                <div className="modal-centralize-main">
                    <p className="modal-name-register">Cadastrar tecnologia</p>
                    <button className="close-button" onClick={() => setOpenModal(false)}>
                        <MdClose />
                    </button>
                </div>
                <div className="centralize-context">
                    <p className="modal-title">Nome</p>
                    <input {...register("title")} className="modal-input" type="text" placeholder="Digite o nome da tecnologia" id="modal-input"></input>
                    <div className="yup-notification"><p>{errors.title?.message}</p></div> 
                    <span className="modal-status">Selecionar status</span>
                    <select id="status" className="modal-select" {...register("status")}>
                        <option value="selecet">Selecione um status</option>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">Avançado</option>
                    </select>
                    <div className="yup-notification"><p>{errors.status?.message}</p></div> 
                    <div className="centralize-button-register">
                        <button className="modal-register-button">Cadastrar Tecnologia</button>
                    </div>
                </div>
            </form>
        </Container>
    )
}

export default Modal