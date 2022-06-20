import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription';

function App() {
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
      <div className='grid-container'>
        <header className='header'>
          <div className='brand'>
            <button onClick={openMenu}>&#9776;</button>
            <Link to='/'>bazarBD</Link>
          </div>
          <div className='header-links'>
            <a href='cart.html'>Cart</a>
            <a href='signin.html'>Sign in</a>
          </div>
        </header>
        <aside className='sidebar'>
          <h3>Shopping Categories</h3>
          <button className='sidebar-close-button' onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href='index.html'>Meat</a>
            </li>
            <li>
              <a href='index.html'>Fish</a>
            </li>
            <li>
              <a href='index.html'>Milk</a>
            </li>
            <li>
              <a href='index.html'>Beverages</a>
            </li>
            <li>
              <a href='index.html'>Snacks</a>
            </li>
            <li>
              <a href='index.html'>Fruits</a>
            </li>
          </ul>
        </aside>
        <main className='main'>
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products/:id' element={<ProductDescription />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
