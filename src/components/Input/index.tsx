import {Container} from "./style.module"

interface IInputForm{
    name: string
    register: any;
    label: string;
    type: string;
    placeholder: string;
}

const Input = ({name, register, label, type, placeholder}: IInputForm)=> {
    return(
        <Container>
            <div>
                <span> {label} </span>
                <input name={name} type={type}  placeholder={placeholder} {...register(name)} />
            </div>
        </Container>
    )
}

export default Input