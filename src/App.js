
import './App.css';
import Navigation from './Component/Home/Navigation/Navigation';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './Component/Home/Home/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}>
        <Route path="home" element={<Home></Home>}></Route>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
