import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from './Home.js'
import Footer from './Footer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="App">
      <Routes>
        <Route path='/' element={[<Home />, <Footer />]} />
      </Routes>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
