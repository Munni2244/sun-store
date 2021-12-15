
import './App.css';
import Navigation from './Component/Home/Navigation/Navigation';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import MoreProducts from './Component/Home/Products/MoreProducts/MoreProducts';
import Contact from './Component/Home/Contact/Contact';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import MyOrders from './Component/Dashboard/Orders/MyOrders/MyOrders';

function App() {
  return (
    <div >
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home></Home>}>
        <Route path="home" element={<Home></Home>}></Route>
        </Route>
        <Route path="moreProducts" element={<MoreProducts></MoreProducts>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        
        <Route path="dashboard" element={<Dashboard></Dashboard>}>
        <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>

        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
