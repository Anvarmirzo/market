import { deleteData } from './deleteData';
import { getCartData } from './getData';
import { postData } from './postData';

export const cart = () => {
	const cartBtn = document.getElementById('cart');
	const cartModal = document.querySelector('.cart');
	const cartCloseBtn = document.querySelector('.cart-close');

	const openCart = () => {
		cartModal.style.display = 'flex';
	};

	const closeCart = () => {
		cartModal.style.display = 'none';
	};

	cartBtn.addEventListener('click', () => {
		openCart();
	});

	cartCloseBtn.addEventListener('click', closeCart);
};

export const addToCart = async ({ id, ...product }) => {
	const cart = await postData('cart', product);
	renderCart(cart);
	cartCounter(cart.length);
};

export const renderCart = async (cart) => {
	const cartWrapper = document.querySelector('.cart-wrapper');

	let price = 0;

	const ol = document.createElement('ol');
	ol.classList.add('cart-list');

	cart.forEach((item) => {
		price += item.price;
		const li = document.createElement('li');

		li.dataset.id = item.id;

		li.innerHTML = `<span>${item.title}</span> <span>${item.price}₽</span> <button class="cart-delete" title="Remove product"></button>`;

		li.addEventListener('click', function (e) {
			if (e.target.classList.contains('cart-delete')) {
				deleteData(e.target.parentElement.dataset.id);
			}
		});

		ol.appendChild(li);
	});
	cartWrapper.innerHTML = '';
	cartWrapper.append(ol);
	cartTotal(price);
};

export const cartCounter = async (count = 0) => {
	const cart = await getCartData();
	renderCart(cart);

	const counter = document.querySelector('.counter');
	counter.textContent = cart.length || count;
};

export const cartTotal = (price) => {
	const total = document.querySelector('.cart-total span');
	total.textContent = price;
};
