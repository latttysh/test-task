import React from 'react';
import styles from './cart.module.scss';
import CartItem from '../../components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { removeCart } from '../../redux/slice/ItemSlice';

function Cart() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <div className={styles.title}>Корзина</div>
        <div onClick={() => dispatch(removeCart())} className={styles.delete}>
          Отчистить всё
        </div>
      </div>
      <div className={styles.items}>
        {items.cart.map((obj) => (
          <CartItem title={obj.title} imgUrl={obj.imgUrl} price={obj.price} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
