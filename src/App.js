
import './App.css';
import Navigation from './Component/Home/Navigation/Navigation';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';
import MoreProducts from './Component/Home/Products/MoreProducts/MoreProducts';
import Contact from './Component/Home/Contact/Contact';
import Dashboard from './Component/Dashboard/Dashboard/Dashboard';
import MyOrders from './Component/Dashboard/Orders/MyOrders/MyOrders';
import DashboardHome from './Component/Dashboard/Dashboard/DashboardHome';
import AllOrders from './Component/Dashboard/Orders/AllOrders/AllOrders';
import ManageProducts from './Component/Dashboard/ManageProducts/ManageProducts';
import AddAdmin from './Component/Dashboard/AddAdmin/AddAdmin';
import AddReviews from './Component/Dashboard/AddReviews/AddReviews';
import OrderPlace from './Component/OrderPlace/OrderPlace';
import Login from './Component/UserLogin/Login/Login';
import AuthProvider from './Component/Context/AuthProvider';
import Register from './Component/UserLogin/Register/Register';
import AddProducts from './Component/Dashboard/Dashboard/AddProducts/AddProducts';
import PrivateRoute from './Component/UserLogin/PrivateRoute';
import DashBoardRoute from './Component/UserLogin/DashBoardRoute';
import Products from './Component/Home/Products/Products/Products';
import WomenShoes from './Component/Home/Categories/WomenShoes';
import ManShoes from './Component/Home/Categories/ManShoes';
import Pay from './Component/Dashboard/Pay/Pay';

function App() {
  return (
    <div >
     <AuthProvider>
     <BrowserRouter>
     
     <Routes>
       <Route path="/" element={<Home></Home>}>  
       <Route path="products" element={<Products></Products>}></Route>
         <Route path="women" element={<WomenShoes></WomenShoes>}></Route>
         <Route path="/" element={<WomenShoes></WomenShoes>}></Route>
         <Route path="home" element={<WomenShoes></WomenShoes>}></Route>
         <Route path="man" element={<ManShoes></ManShoes>}></Route>
         </Route>
       <Route path="home" element={<Home></Home>}>
        

       </Route>
   
       <Route path="/moreProducts" element={<MoreProducts></MoreProducts>}></Route>
       <Route path="contact" element={<Contact></Contact>}></Route>
       
       <Route path="dashboard" element={<Dashboard></Dashboard>}>
       <Route path="/dashboard" element={<DashboardHome/>}></Route>
       <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
       <Route path="allOrders" element={<AllOrders></AllOrders>}></Route>
       <Route path="manageProducts" element={<ManageProducts></ManageProducts>}></Route>
       <Route path="addAdmin" element={<AddAdmin></AddAdmin>}></Route>
       <Route path="review" element={<AddReviews></AddReviews>}></Route>
       <Route path="addProducts" element={<AddProducts></AddProducts>}></Route>     
       <Route path={`pay/:id`} element={<Pay></Pay>}></Route>

       </Route>

       <Route path="/products/:orderId" element={<PrivateRoute><OrderPlace></OrderPlace></PrivateRoute>}></Route>
       <Route path="login" element={<Login></Login>}></Route>
       <Route path="register" element={<Register></Register>}></Route>
     </Routes>
     </BrowserRouter>
     </AuthProvider>
   
    </div>
  );
}

export default App;
