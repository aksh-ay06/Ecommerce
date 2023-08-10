import './App.css';
import HomePage from './pages/homepage/homepage.components.jsx';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/shop" Component={ShopPage} />
        <Route path='/signin' Component={SignInAndSignUpPage}/>
      </Routes>
    </div>
  );
}

export default App;
