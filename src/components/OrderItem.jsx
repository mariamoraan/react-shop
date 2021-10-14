import React from 'react';
import '../styles/OrderItem.scss';

const OrderItem = () => {
	return (
		<div className="OrderItem">
			<figure>
				<img src="https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80" alt="bike" />
			</figure>
			<p>Bike</p>
			<p>$30,00</p>
			<img src="./icons/icon_close.png" alt="close" />
		</div>
	);
}

export default OrderItem;
