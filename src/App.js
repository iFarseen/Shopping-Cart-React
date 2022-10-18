import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Context
import ProductContextProvider from './Context/ProductContextProvider';
import CartContextProvider from './Context/CartContextProvider';

// Components
import Store from './Components/Store';
import ProductDetailes from './Components/ProductDetails';
import Navbar from './Components/shared/Navbar';
import ShopCart from './Components/ShopCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetailes/>} />
          <Route path="/products" element={<Store/>} />
          <Route path="/cart" element={<ShopCart/>} />
          <Route path="/*" element={<Navigate to="/products" />}/>
        </Routes>

      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
