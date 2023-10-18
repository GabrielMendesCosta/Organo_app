import { useState } from 'react'
import Botao from '../botao'
import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './formulario.css'

function Formulario(props){

    const[nome,setNome] = useState('')
    const[cargo,setCargo] = useState('')
    const[imagem,setImagem] = useState('')
    const[time,setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto valor={nome} aoAlterado={valor=>setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto valor={cargo} aoAlterado={valor=>setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto valor={imagem} aoAlterado={valor=>setImagem(valor)} obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"/>
                <ListaSuspensa valor={time} aoAlterado={valor=>setTime(valor)} obrigatorio={true} label ="Time" itens={props.times}/>
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario