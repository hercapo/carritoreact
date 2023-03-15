import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Button from './components/button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos a mi Ecommerce'}/>
      <Counter />
      <CartWidget />
      <Button />

    </div>
  );
}

export default App;