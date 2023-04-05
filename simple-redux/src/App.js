import logo from './logo.svg';
import './App.css';
import Media from './componentes/Media';
import Intervalo from './componentes/Intervalo';
import Soma from './componentes/Soma';
import Sorteio from './componentes/Sorteio';


function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo ></Intervalo>
       
      </div>
      <div className='linha'>
      <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
