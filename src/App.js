import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Directory from './pages/Directory/Directory';
import Shop from './pages/Shop/Shop';
import Checkout from './pages/Checkout/Checkout';
import Authentication from './pages/Authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Directory />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
