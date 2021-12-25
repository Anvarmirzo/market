import { cartCounter, renderCart } from './cart';
import { getCartData } from './getData';

export const deleteData = async (id) => {
	const response = await fetch(`http://localhost:3000/cart/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	});
	if (response.ok) {
		const cart = await getCartData();
		renderCart(cart);
		cartCounter(cart.length);
	}
};
