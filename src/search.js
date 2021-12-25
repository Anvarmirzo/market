import { searchFilter } from './modules/filters';
import { getData } from './modules/getData';
import { renderGoodies } from './modules/renderGoodies';

export const search = () => {
	const searchInput = document.querySelector('.search-wrapper_input');

	searchInput.addEventListener('input', async function (e) {
		const value = e.target.value;
		const goodies = await getData();
		const foundGoodies = await searchFilter(goodies, value);
		renderGoodies(foundGoodies);
	});
};
