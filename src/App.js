import { useState } from 'react';
import './App.css';

function App() {

  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Prod1", valor: 11, qtd: 2 },
    { id: 2, nome: "Prod2", valor: 22, qtd: 2 },
    { id: 3, nome: "Prod3", valor: 33, qtd: 4 }
  ])
  const somaProdutos = () => {
    let total = 0;
    produtos.forEach((item) => {
      total = total + item.valor * item.qtd
    })
    return total;
  }

  function removerUnidade(id) {
    console.log('remover no id', id)
    const produtosNovos = [...produtos]
    const produtoEncontrado = produtosNovos.find(produto => produto.id === id)
    if (produtoEncontrado.qtd > 0) {
      produtoEncontrado.qtd = produtoEncontrado.qtd - 1;
    }
    setProdutos(produtosNovos)
  }
  function adicionarUnidade(id) {
    console.log('adicionar no id', id)
    const produtosNovos = [...produtos]
    const produtoEncontrado = produtosNovos.find(produto => produto.id === id)
    produtoEncontrado.qtd = produtoEncontrado.qtd + 1;
    setProdutos(produtosNovos)
  }
  function modificarUnidade(id, event) {
    console.log('evento id', id)
    console.log('evento event.target.value', event.target.value)
    const produtosNovos = [...produtos]
    const produtoEncontrado = produtosNovos.find(produto => produto.id === id)
    produtoEncontrado.qtd = event.target.value;
    setProdutos(produtosNovos)
  }

  return (
    <div>
      <h2>Titulo</h2>
      {produtos.map((produto) => {
        return <div>
          <span>{produto.id} - </span>
          <span>{produto.nome}</span>
          <span>({produto.valor})</span>
          <button onClick={() => removerUnidade(produto.id)}>-</button>
          <input
            type="text"
            onChange={(event) => modificarUnidade(produto.id, event)}
            value={produto.qtd}
          />
          <button onClick={() => adicionarUnidade(produto.id)}>-</button>
          <span>({produto.qtd * produto.valor})</span>
        </div>
      })}

      <span>Valor total: ({somaProdutos()})</span>
    </div>
  );
}

export default App;
