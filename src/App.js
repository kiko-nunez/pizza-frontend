import './App.css';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Main from './pages/Main'
import Login from './pages/login';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import Shop from './pages/Shop'
import Nav from './components/Nav'







function App() {
  return (
    <div className="App">
  <Router>
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path= "/Cart" element={<Cart />} />
      <Route path= "Checkout" element={<Checkout />} />
      <Route path= "Login" element={<Login />} />
      <Route path= "Shop" element={<Shop />} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
