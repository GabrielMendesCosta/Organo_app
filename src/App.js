import { useState } from 'react';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';

function App() {

  const[colaboradores,setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =(colaborador) =>{
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
    </div>
  );
}

export default App;
