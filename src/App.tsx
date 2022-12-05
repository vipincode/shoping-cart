import { Global } from '@emotion/react';
import { CSSReset } from './utils/Global';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';

const App = () => {
  return (
    <>
      <Global styles={CSSReset} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
