import { useState } from 'react'
import './App.css'


function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const calcImc = () => {
    return (
      (peso / (altura * altura)).toFixed(1)
    )
  }
  

  const printResultado = () => {
    
    if (calcImc() < 18.5) {
      return (
        <>
          <td>Menor que 18,5</td>
          <td>Abaixo do peso ideal (Magreza)</td>
        </>
      )
    } else if (calcImc() <= 24.9) {
      return (
        <>
          <td>Entre 18,5 e 24,9</td>
          <td>Peso normal</td>
        </>
      )
    } else if (calcImc() <= 29.9) {
      return (
        <>
          <td>Entre 25 e 29,9</td>
          <td>Sobrepeso</td>
        </>
      )
    } else if (calcImc() <= 34.9) {
      return (
        <>
          <td>Entre 30 e 34,9</td>
          <td>Obesidade (Grau I)</td>
        </>
      )
    } else if (calcImc() <= 39.9) {
      return (
        <>
          <td>Entre 35 e 39,9</td>
          <td>Obesidade (Grau II)</td>
        </>
      )
    } else if (calcImc() > 40) {
      return (
        <>
          <td>Maior que 40</td>
          <td>Obesidade (Grau III)</td>
        </>
      )
    }
  }

const mensagem = () => {
  if (calcImc() > 1) {
    return (
      `Seu IMC é de: ${calcImc()} kg/m².`
    )
  }
    
  }

  return (
    <div className='container'>
      <h1>Calculadora de IMC - Índice de Massa Corpórea</h1>

      <form>
        <input type="number" placeholder='Digite seu peso' onChange={e => setPeso(e.target.value)} />
        <input type="number" placeholder='Digite sua altura' onChange={e => setAltura(e.target.value)} />
      </form>

      <h3>{mensagem()}</h3>

      <table className='table-area'>
        <thead>
          <th>IMC</th>
          <th>Classificação</th>
        </thead>
        <tr>
          {printResultado()}
        </tr>
      </table>
    </div>
  )
}

export default App
