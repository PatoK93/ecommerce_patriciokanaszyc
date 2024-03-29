import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer greeting="Todos nuestros productos" />
              }
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer greeting="Estamos filtrando" />}
            />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
