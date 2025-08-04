import "./Campos.css"

const Campos = (props) => {
    const vasilhameModificado = `${props.vasilhame}...`    
    return (
        <div className="campos">
            <label>{props.label}</label>
            <input vasilhame={vasilhameModificado}/>
        </div>

        );
};

export default Campos