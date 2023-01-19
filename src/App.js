import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Main from './pages/Main'
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Shop from './pages/Shop'
import Navbar from './components/Nav';







function App() {
  return (
    <div className="App">
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path= "/Cart" element={<Cart />} />
      <Route path= "Checkout" element={<Checkout />} />
      <Route path= "Login" element={<Register />} />
      <Route path= "Shop" element={<Shop />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
