import Colaborador from "../colaborador"
import "./time.css"

function Time(props){
    return(
        <section className="time" style={{backgroundColor:props.corSecundaria}}>
            <h3 style={{borderColor:props.corPrimaria}}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}

export default Time