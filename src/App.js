//import logo from './logo.svg';
import './App.css';
import { HeaderMenu } from './componentes/HeaderMenu';
import { Jumbotron } from './componentes/Jumbotron';
import { Prueba } from './componentes/Prueba';
import { FooterMenu } from './componentes/FooterMenu';

function App() {
  return (
    <div className="App">
      <HeaderMenu ></HeaderMenu>
      <Jumbotron title="React" subTitle="Primer laboratorio de React"></Jumbotron>   
      <div class="container p-4"> 
        <Prueba></Prueba>   
      </div>
      <FooterMenu></FooterMenu>
    </div>
    
    
  );
}

export default App;
