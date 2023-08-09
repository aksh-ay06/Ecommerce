import './App.css';
import HomePage from './pages/homepage/homepage.components.jsx';
import ShopPage from './pages/shop/shop.component';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route exact path='/shop' Component={ShopPage} />
      </Routes>
    </div>
  );
}

export default App;
