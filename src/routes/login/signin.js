import { getCollection } from '../../lib/db';

export const post = async ({ request }) => {
	const cridentials = await request.json();
	console.log(cridentials);
	const users = await getCollection('users');
	try {
		const res = await users.findOne(cridentials);
		console.log(res);

		if (res._id) {
			return {
				body: {
					status: 200,
					user: res
				}
			};
		} else {
			return {
				body: {
					status: 403
				}
			};
		}
	} catch (err) {
		return {
			body: {
				status: 500
			}
		};
	}
};
