import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
<Router>
  <Routes>
      <Route index element={<Home />} />
     <Route path="/products/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product/>}/>
    
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />
     <Route path="/cart" element={<Cart />} />
       
          
          
        
  </Routes>
</Router>
 
  )
};

export default App;