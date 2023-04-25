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
	() => import('./nodes/12')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/andalusia-tourism-situation-surveys": [3],
		"/andalusia-tourism-situation-surveys/[province]/[year]": [4],
		"/apartment-occupancy-surveys": [5],
		"/apartment-occupancy-surveys/[province]/[year]": [6],
		"/graph": [7],
		"/graph/apartment-occupancy-surveys": [8],
		"/graph/apartment-occupancy-surveys/[province]/[year]": [9],
		"/hotel-occupancy-surveys": [10],
		"/hotel-occupancy-surveys/[province]/[year]": [11],
		"/integrations": [12]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';