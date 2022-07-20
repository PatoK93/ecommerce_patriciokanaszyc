import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <ItemCount/>
        <ItemListContainer greeting="BIENVENIDOS AL ECOMMERCE DE PAK"/>
    </div>
  );
};

export default App;
