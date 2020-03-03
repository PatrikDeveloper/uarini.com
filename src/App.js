import React, { useEffect } from 'react';
import Routes from './Routes';
import fetchProducts from './api/fetchProducts';

function App() {
  // "componentDidMount"
  useEffect(() => {
    
    // Criar uma função async para pegar dados da API
    async function fetchData() {
      // Aguardar a função responder
      const response = await fetchProducts();
      // Mostrar produtos no console
      console.log('Products from api: ', {
        status: response.status,
        products: response.data
      });
    }
    
    // Chamar função acima imediatamente
    fetchData();

  }, []);

  return (
    <div id="App">
      <Routes />
    </div>
  );
}

export default App;
