import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import Time from './componentes/time';

function App() {

  const[colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =(colaborador) =>{
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <Time nome="Programação"/>
    </div>
  );
}

export default App;
