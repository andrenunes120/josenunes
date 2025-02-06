import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import correto
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home"
import TopLinks from "./components/toplinks";
import Products from "./pages/products"; // Importar a página Products


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <TopLinks/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/pages/products" element={<Products />} /> {/* Adicionar rota */}
         </Routes>
      </Router>
    </div>
  );
}

export default App;
