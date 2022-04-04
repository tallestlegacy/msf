import { getCollection } from '../../lib/db';

export const post = async ({ request }) => {
	try {
		const users = await getCollection('users');
		const user = await request.json();
		const res = await users.insertOne(user);

		return {
			status: 200,
			body: {
				res,
				user
			}
		};
	} catch (err) {
		return {
			status: 500,
			body: {
				error: 'Failed'
			}
		};
	}
};
