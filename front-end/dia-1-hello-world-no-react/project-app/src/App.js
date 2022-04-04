import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  const compromissos = ['Aprender React', 'Comprar Leite', 'Verificar os produtos do estoque', 'Fazer os Projetos', 'Atualizar o portfolio'];

  return compromissos.map( (item) => Task(item));
}

export default App;
