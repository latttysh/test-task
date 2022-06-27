import React from 'react';
import styles from './main.module.scss';
import Item from '../../components/Item';
import { fetchItems } from '../../redux/slice/ItemSlice';
import { useDispatch, useSelector } from 'react-redux';

function Main() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  console.log(items);
  const isItemsLoading = items.status === 'loaded';

  console.log(isItemsLoading);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className={styles.main}>
      {isItemsLoading ? (
        items.count.map((obj) => (
          <Item
            title={obj.title}
            imgUrl={obj.imageUrl}
            price={obj.price}
            id={obj.id}
            key={obj.id}
          />
        ))
      ) : (
        <>False</>
      )}
    </div>
  );
}

export default Main;
