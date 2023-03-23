import React, { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


export default function CheckoutItem({ item }) {
  const { imageUrl, name, quantity, price } = item;
  const { addItemToCart, reduceItemFromCart, removeItemFromCart } = useContext(CartContext);

  const handleAddItem = () => addItemToCart(item);
  const handleReduceItem = () => reduceItemFromCart(item);
  const handleRemoveItem = () => removeItemFromCart(item);
  
  return (
    <div className='checkout-item-container'>
      <img className='image' src={imageUrl} alt={name} />
      <span className='name'>{name}</span>
      <button onClick={handleReduceItem}>-</button>
      <span className='quantity'>{quantity}</span>
      <button onClick={handleAddItem}>+</button>
      <span className='price'>{price}</span>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  )
}
