import logo from './logo.svg';
import './App.css';
import { Form, Segment } from 'semantic-ui-react';
import Home from './views/home/Home';
import FormCliente from './views/cliente/FormCliente';
import FormProduto from './views/produto/FormProduto';
import FormEntregador from './views/entregador/FormEntregador';
import Rotas from './Rotas';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">

      <ToastContainer />
      <Rotas />

      <div style={{ marginTop: '6%' }}>
        <Segment vertical color='grey' size='tiny' textAlign='center'>
          &copy; 2024- Projeto WEB IV - IFPE Jaboatão dos Guararapes
        </Segment>
      </div>

    </div>
  );
}

export default App;