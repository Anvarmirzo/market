import { renderGoodies } from './renderGoodies';
import { getData } from './getData';

export const load = async () => {
	renderGoodies(await getData());
};
