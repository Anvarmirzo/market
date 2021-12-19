export const getData = async () => {
	const response = await fetch('http://localhost:3000/goods');
	console.log(await response.json());
};
