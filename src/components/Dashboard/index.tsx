import Header from "../Header"
import { Container, Title, List } from "./style.module"
import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { TechContext } from "../../contexts/TechContext"

export interface IOpenModal{
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashBoard = ( {openModal, setOpenModal}:IOpenModal ) => {
  const { user } = useContext(AuthContext)
  const { loading } = useContext(AuthContext)
  const { deleteTech } = useContext(TechContext)

  function deleteBotao(item:string){
    deleteTech(item)
  }
  
  const history = useHistory()
  if(loading) {
    return (
      <div> Carregando... </div>
    )
  }

  if(user.course_module === "primeiro-modulo"){
    user.course_module = "Primeiro Módulo (Introdução ao Frontend)"
  }

  if(user.course_module === "segundo-modulo"){
    user.course_module = "Segundo Módulo (Aprimorando conhecimentos em JavaScript)"
  }

  if(user.course_module === "terceiro-modulo"){
    user.course_module = "Terceiro Módulo (Frontend com ReactJS)"
  }

  if(user.course_module === "quarto-modulo"){
    user.course_module = "Quarto Módulo (Backend com Node.js)"
  }

  if(user.course_module === "quinto-modulo"){
    user.course_module = "Quinto Módulo (Backend com Python)"
  }

  return(
    <>
    {
      user ?
      <>
        <Header botao="Sair" />
        <Container>
          <div>
            <h2>Olá, {user.name} </h2>
            <p> {user.course_module} </p>
          </div>
        </Container>

        <Title>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={() => setOpenModal(!openModal)}><img src="./+.png" alt="Botão de adicionar"/></button>
          </div>
        </Title>

        <List>
          <div className="centralize-container">
            <div className="centralize-context">
            {user?.techs?.map((item, index) => (
              <li key={index}>
                  <h2>{item.title}</h2>
                  <div className="centralize-status">
                    <p>{item.status}</p>
                    <button className="trash" onClick={() => deleteBotao(item.id)}><img src="./trash.png" alt="lixeira"/></button>
                  </div>
              </li>
              ))}
            </div>
          </div>
        </List>
      </> 
      :
      history.push("/")
    }
    </>
  )
}

export default DashBoard