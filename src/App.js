import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// Contexts
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
	const [products, setProducts] = useState(data);
	const [cart, setCart] = useState([]);
	const [localCart, setLocal] = useLocalStorage('cart', []);

	const addItem = item => {
		setCart([...cart, item]);
		setLocal([...localCart, item]);
	};

	const removeItem = item => {
		setCart(cart.filter(cartItem => cartItem.id !== item.id));
	}

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem, localCart}}>
				<div className="App">
					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</div>
				</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
