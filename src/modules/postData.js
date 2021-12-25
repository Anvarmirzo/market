import { getCartData } from './getData';

export const postData = async (url = '', data) => {
	const response = await fetch(`http://localhost:3000/${url}`, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json; charset=UTF-8',
		},
	});
	if (response.ok) {
		return await getCartData();
	}
};
