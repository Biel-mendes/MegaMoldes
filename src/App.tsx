import './style/App.css'
import NavBar from './components/NavBar'
import Hero from './components/Header'
import Steps from './components/Staps'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Propaganda from './components/Propaganda'
import Orcamento from './components/Orcamento'
import Contato from './components/Contato'
import Rodape from './components/Rodape'
import BotaoContato from './components/BotaoContato'

function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <Steps />
      <Sobre />
      <Servicos />
      <Propaganda />
      <Orcamento />
      <Contato />
      <Rodape />
      <BotaoContato />
    </>
  )
}

export default App
