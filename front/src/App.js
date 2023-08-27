
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Componentes/layout/Footer';
import Header from './Componentes/layout/Header';
import Nav from './Componentes/layout/Nav';
import Home from './Pages/Home';
import Nosotros from './Pages/Nosotros';
import Novedades from './Pages/Novedades';
import Contacto from './Pages/Contacto';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='nosotros' element={<Nosotros/> }/>
          <Route path='novedades' element={<Novedades/>} />
          <Route path='contacto' element={<Contacto/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
