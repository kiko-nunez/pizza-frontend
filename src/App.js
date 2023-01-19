import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Shops from './pages/Shops'
import Navbar from './components/Nav';







function App() {
  return (
    <div className="App">
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Shops />} />
      <Route path= "/Cart" element={<Cart />} />
      <Route path= "Checkout" element={<Checkout />} />
      <Route path= "Login" element={<Register />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
