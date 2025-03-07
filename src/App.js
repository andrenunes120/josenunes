import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import correto
import './App.css';
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Loading from "./components/loading";  //REMOVER SE LOADING NÃO FOR NECESSÁRIO
import useLoading from "./components/useloading";       //REMOVER SE LOADING NÃO FOR NECESSÁRIO
import Footer from "./components/footer";


function App() {
  const loading = useLoading();   //REMOVER SE LOADING NÃO FOR NECESSÁRIO
  return (
    <div className="App">
      <Router>                          
      {loading && <Loading />}        
      {!loading && (              
        <>                        
        <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
         </Routes>
         <Footer/>
        </>
         )}
      </Router>
    </div>
  );
}

export default App;
