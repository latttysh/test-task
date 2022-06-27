import React from 'react';
import styles from './cartItem.module.scss';

function CartItem({ title, imgUrl, price }) {
  return (
    <div className={styles.cartitem}>
      <div className={styles.left}>
        <img src={imgUrl} alt="" />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.price}>{price} ₽</div>
    </div>
  );
}

export default CartItem;
