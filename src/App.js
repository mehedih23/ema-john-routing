import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop/Shop';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
