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
	() => import('./nodes/10')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/andalusia-tourism-situation-surveys": [3],
		"/andalusia-tourism-situation-surveys/[province]/[year]": [4],
		"/apartment-occupancy-surveys": [5],
		"/apartment-occupancy-surveys/[province]/[year]": [6],
		"/graph/apartment-occupancy-surveys": [7],
		"/hotel-occupancy-surveys": [8],
		"/hotel-occupancy-surveys/[province]/[year]": [9],
		"/integrations": [10]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';