import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CartItem } from "../../types/types";
import { addToCart, removeFromCart } from "../../store/slices/cartSlice";
import { motion } from "framer-motion";

const cartVariants = {
  open: {
    clipPath: `circle(2000px at calc(100% - 40px) 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.coffee.price * item.quantity,
    0
  );

  const handleAddOne = (item: CartItem) => {
    dispatch(addToCart({ coffee: item.coffee, quantity: 1 }));
  };

  const handleRemoveOne = (item: CartItem) => {
    dispatch(removeFromCart({ coffee: item.coffee }));
  };

  return (
    <motion.div
      variants={cartVariants}
      className="cart"
      initial="closed"
      animate="open"
      exit="closed"
    >
      <h2 className="cart__title">Din beställning</h2>
      {cartItems.length === 0 ? (
        <p className="cart__empty-message">Din varukorg är tom.</p>
      ) : (
        <>
          <ul className="cart__list">
            {cartItems.map((item) => (
              <li key={item.coffee.id} className="cart__item">
                <div className="cart__item-info">
                  <h3 className="cart__item-title">{item.coffee.title}</h3>
                  <p className="cart__price">{item.coffee.price} kr</p>
                </div>
                <div className="cart__item-actions">
                  <button
                    className="cart__quantity-button"
                    onClick={() => handleRemoveOne(item)}
                  >
                    -
                  </button>
                  <p className="cart__item-quantity">{item.quantity}</p>
                  <button
                    className="cart__quantity-button"
                    onClick={() => handleAddOne(item)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__total-wrapper">
            <div className="cart__total-container">
              <h3 className="cart__total-title">Total</h3>
              <h3 className="cart__total-price">{totalPrice} kr</h3>
            </div>
            <p className="cart__fineprint">inkl moms + drönarleverans</p>
          </div>
          <button className="cart__order-button">Take my money!</button>
        </>
      )}
    </motion.div>
  );
}
