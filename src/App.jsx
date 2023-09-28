
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Navbar} from "./components/navbar.jsx"
import {Shop} from "./pages/shop/shop";
import {Cart} from "./pages/cart/cart";
import { Sell } from './pages/sell/sell.jsx';
import { ShopContextProvider } from './context/shop-context.jsx';

function App() {


  return (
    <div className="App marginOff">
    <ShopContextProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />}/>
          <Route path="/sell" element={<Sell />}/>
        </Routes>
      </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App
