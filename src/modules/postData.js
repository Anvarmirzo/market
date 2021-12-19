export const postData = async () => {
	const response = await fetch('http://localhost:3000/goods', {
		method: 'POST',
		body: JSON.stringify({
			title: 'Ведьмак 3',
			price: 3000,
			sale: true,
			img: 'https://cdn1.ozone.ru/multimedia/c400/1023547851.jpg',
			category: 'Игры и софт',
		}),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	});
	console.log(await response.json());
};
