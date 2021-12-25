import { renderGoodies } from './renderGoodies';

export const getData = async (str = '') => {
	const response = await fetch(`http://localhost:3000/goods/${str}`);
	const goodies = await response.json();
	return goodies;
};
