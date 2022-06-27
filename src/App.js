import styles from './app.module.scss';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Cart from './pages/Cart';
import Header from './components/Header';

import 'normalize.css';

function App() {
  // let shops = [
  //   { shopId: 1, percent: 10 },
  //   { shopId: 2, percent: 20 },
  //   { shopId: 3, percent: 35 },
  //   { shopId: 4, percent: 20 },
  // ];

  // let changedShops = [
  //   { shopId: 1, percent: 10 },
  //   { shopId: 4, percent: 40 },
  // ];

  // changedShops.map((getShopId) => {
  //   shops.find((o, i) => {
  //     if (o.shopId === getShopId.shopId) {
  //       shops[i] = { shopId: getShopId.shopId, percent: getShopId.percent };
  //       return true;
  //     }
  //   });
  // });
  // console.log(shops);

  return (
    <div className={styles.app}>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
