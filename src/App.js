import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductClicked from './ProductClicked.js'

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
      <Routes>
        
        <Route path='/product' element={[<Header />, <ProductClicked />, <Footer />]} />

        <Route path="/" element={[<Header />, <Home />, <Footer />]} />
      </Routes>
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;
