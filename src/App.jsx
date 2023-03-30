import { useState } from 'react'
import './App.css'
import Tabela from './Tabela'


function App() {
  const [altura, setAltura] = useState(0)
  const [peso, setPeso] = useState(0)
  const calcImc = () => {
    return (
      (peso / (altura * altura)).toFixed(1)
    )
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
        <input type="number" placeholder='Digite seu peso em kg (Ex.: 80)' onChange={e => setPeso(e.target.value)} />
        <input type="number" placeholder='Digite sua altura em metros (Ex.: 1,80)' onChange={e => setAltura(e.target.value)} />
      </form>

      <h3>{mensagem()}</h3>

      <Tabela resultado={calcImc()}/>
    </div>
  )
}

export default App