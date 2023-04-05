import logo from './logo.svg';
import './App.css';

import react, { useState } from 'react'
import Intervalo from './componentes/Intervalo'
import Soma from './componentes/Soma';
import Media from './componentes/Media';
import Sorteio from './componentes/Sorteio';

function App() {


  const [min, setMin] = useState(10)
  const [max, setMax] = useState(20)


  return (
    <div className="App">
      <h1>Exercicio React-Redux Simples</h1>
      <div className='linha'>
        <Intervalo min={min} max={max}
         onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>
      <div className='linha'>
        <Media min={min} max={max}></Media>
        <Soma min={min} max={max}></Soma>
        <Sorteio min={min} max={max}></Sorteio>
      </div>
    </div>
  )
}

export default App;