import { error } from '@sveltejs/kit';
import { peopleData } from '$lib/data/people';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const person = peopleData.find((p) => p.slug === params.slug);

	if (!person) {
		throw error(404, 'The person you are looking for does not exist.');
	}

	return {
		person
	};
};
