import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import OderSummary from './components/OderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import FeatureProducts from './components/FeatureProducts';
import NewProducts from './components/NewProducts';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order-summary' element={<OderSummary />} />
        <Route path='products' element={<Products />}>
          <Route index element={<FeatureProducts />} />
          <Route path='featured' element={<FeatureProducts />}></Route>
          <Route path='new' element={<NewProducts />}></Route>
        </Route>
        <Route path='users' element={<Users />}>
          <Route path=':userId' element={<UserDetails />} />
          <Route path='admin' element={<Admin />} />
        </Route>
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;
