import "./botao.css"

function Botao(props){
    return(
        <button>
            {props.texto}
        </button>
    )
}

export default Botao