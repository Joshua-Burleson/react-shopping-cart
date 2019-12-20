import React, { useContext } from 'react';

// Context 
import CartContext from '../contexts/CartContext';

const Item = props => {
	const {cart, removeItem} = useContext(CartContext);
	const itemId = props.id;

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={() => removeItem({ id: itemId })}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;
