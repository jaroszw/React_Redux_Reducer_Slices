import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const ProductItem = (props) => {
  // const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, title, price, description } = props;

  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        title: title,
      })
    );
    // const newTotalQuantity = cart.totalQuantity + 1;
    // const updatedItems = cart.items.slice();
    // const existingItem = updatedItems.find((item) => item.id === id);
    // if (existingItem) {
    //   const updatedItem = { ...existingItem };
    //   updatedItem.quantity++;
    //   updatedItem.totalPrice = updatedItem.totalPrice + price;
    //   const exititingItemIndex = updatedItems.findIndex(
    //     (item) => item.id === id
    //   );
    //   updatedItems[exititingItemIndex] = updatedItem;
    // } else {
    //   updatedItems.push({
    //     id: id,
    //     name: title,
    //     price: price,
    //     totalPrice: price,
    //     quantity: 1,
    //   });
    // }
    // console.log(updatedItems);
    // const newCart = {
    //   totalQuantity: newTotalQuantity,
    //   items: updatedItems,
    // };
    // dispatch(cartActions.replaceItems(newCart));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
