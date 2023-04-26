export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/andalusia-tourism-situation-surveys": [3],
		"/andalusia-tourism-situation-surveys/[province]/[year]": [4],
		"/apartment-occupancy-surveys": [5],
		"/apartment-occupancy-surveys/[province]/[year]": [6],
		"/graph/apartment-occupancy-surveys": [7],
		"/graph/group": [8],
		"/hotel-occupancy-surveys": [9],
		"/hotel-occupancy-surveys/[province]/[year]": [10],
		"/integrations/apartment-occupancy-surveys": [11],
		"/integrations/apartment-occupancy-surveys/withProxy": [13],
		"/integrations/apartment-occupancy-surveys/withoutProxy": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';