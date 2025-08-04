import "./formulario.css"
import Campos from "./Campos"

const formulariopresença = () => {
        return(
            <div formularioMain>
                <Campos label="Nome"></Campos>
                <Campos label="Grau de Parentesco"></Campos>
                <Campos label="Você comparecerá ao casamento?"></Campos>
                <Campos label=""></Campos>
            
            </div>
        )
}

export default formulariopresença