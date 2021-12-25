import { categoryFilter, searchFilter } from './filters';
import { getData } from './getData';
import { renderGoodies } from './renderGoodies';

export const catalogToggle = () => {
	const btnCatalog = document.getElementById('catalog-btn');
	const modalCatalog = document.querySelector('.catalog');
	const modalCatalogItems = document.querySelectorAll('.catalog-list li');
	let isOpen = false;
	const showList = (e) => {
		isOpen = !isOpen;

		isOpen
			? (modalCatalog.style.display = 'block')
			: (modalCatalog.style.display = '');
		document.addEventListener('click', hideList);
	};

	const hideList = ({ target }) => {
		if (
			!target.closest(
				'.catalog, .catalog-list, .catalog-list__switcher, #catalog-btn',
			)
		) {
			modalCatalog.style.display = '';
		}
	};
	btnCatalog.addEventListener('click', showList);

	modalCatalogItems.forEach((item) => {
		item.addEventListener('click', async function (e) {
			const text = item.textContent;
			const goodies = await getData();
			const foundGoodies = await categoryFilter(goodies, text);
			renderGoodies(foundGoodies);
		});
	});
};
