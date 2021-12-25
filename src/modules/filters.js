export const searchFilter = (goodies, value) => {
	const regexp = new RegExp(value, 'gi');

	return goodies.filter((item) => {
		return item.title.match(regexp);
	});
};

export const categoryFilter = (goodies, value) => {
	const regexp = new RegExp(value, 'gi');
	return goodies.filter((item) => {
		return item.category.match(regexp);
	});
};
