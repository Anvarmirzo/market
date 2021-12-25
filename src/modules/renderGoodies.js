import { addToCart } from './cart';
import { searchFilter } from './filters';
import { getData } from './getData';
export const renderGoodies = (goodies) => {
	const goodiesWrapper = document.querySelector('.goods');
	const fragment = document.createDocumentFragment();

	goodiesWrapper.innerHTML = '';
	goodies.forEach((item) => {
		const article = document.createElement('article');

		article.classList.add('col-12', 'col-md-6', 'col-lg-4', 'col-xl-3');
		article.innerHTML = `
			<div class="card" data-category="${item.category}">
			${item.sale ? `<div class='card-sale'>🔥Hot Sale🔥</div>` : ''}
				<div class="card-img-wrapper">
					<span class="card-img-top"
						style="background-image: url('${item.img}')"></span>
				</div>
				<div class="card-body justify-content-between">
					<div class="card-price">${item.price} ₽</div>
					<h5 class="card-title">${item.title}</h5>
					<button class="btn btn-primary">В корзину</button>
				</div>
			</div>
		`;

		fragment.appendChild(article);
	});
	goodiesWrapper.append(fragment);

	const goods = document.querySelectorAll('.card');
	goods.forEach((item) => {
		const btn = item.querySelector('button');
		const title = item.querySelector('.card-title').textContent;
		btn.addEventListener('click', async function (e) {
			const goodies = await getData();
			const product = searchFilter(goodies, title);
			product.length && addToCart(...product);
		});
	});
};
