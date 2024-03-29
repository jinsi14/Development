import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <main>
      <Routes>
        <Route path='/welcome' element={<Welcome />}> </Route>
        <Route path='/products' element={<Products />}> </Route>
        <Route path='/products/:productId' element={<ProductDetail />}></Route>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
 