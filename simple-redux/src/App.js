import logo from './logo.svg';
import './App.css';
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Card Title='Card 1' Red>x </Card>
        <Card Title='Card 2' Green>x </Card>
      </div>
      <div className='linha'>
        <Card Title='Card 3'Blue>y </Card>
        <Card Title='Card 4'Purple>y </Card>
      </div>
    </div>
  );
}

export default App;
