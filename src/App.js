import Navbar from './components/Navbar';
import Popup from './components/Login';
import Product from './pages/product/Product';
import Stores from './pages/stores/Stores';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product />
    </div>
  );
}

export default App;
