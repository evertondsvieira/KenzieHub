import { Container } from "./style.module"
import { Link } from "react-router-dom";

interface IHeaderProps {
    botao: string
}

const Header = ( {botao}:IHeaderProps ) => {
    const Logout = () => {
        localStorage.clear()
    }

    return(
        <Container>
            <div>
                <img src="./Logo.png" alt="Logo Kenzie hub" />
                <button onClick={Logout}><Link to="/"> {botao} </Link></button>
            </div>
        </Container>
    )
}

export default Header