import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import Inicio from './components/pages/Inicio'
import Administrador from './components/pages/Administrador'

function App() {
 
  return (
    <>
      <Menu></Menu>
      <Inicio></Inicio>
      {/* <Administrador></Administrador> */}
      <Footer></Footer>
    </>
  )
}

export default App
