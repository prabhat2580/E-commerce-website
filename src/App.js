import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import { useSelector } from 'react-redux';  //  useSelector from Redux

function App() {
  const user = useSelector((state) => state.user.user); // get from redux slice

  if (!user) {
    return <LoginSignup />;
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />} />
        <Route path='/jewelery' element={<ShopCategory category="jewelery" />} />
        <Route path='/electronics' element={<ShopCategory category="electronics" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
