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
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/analytics": [3],
		"/andalusia-tourism-situation-surveys": [4],
		"/andalusia-tourism-situation-surveys/[province]/[year]": [5],
		"/apartment-occupancy-surveys": [6],
		"/apartment-occupancy-surveys/[province]/[year]": [7],
		"/graph/andalusia-tourism-situation-surveys": [8],
		"/graph/apartment-occupancy-surveys": [9],
		"/hotel-occupancy-surveys": [10],
		"/hotel-occupancy-surveys/[province]/[year]": [11],
		"/integrations": [12],
		"/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy": [13],
		"/integrations/andalusia-tourism-situation-surveys/uses": [14],
		"/integrations/andalusia-tourism-situation-surveys/uses/IMDb": [15],
		"/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo": [16],
		"/integrations/apartment-occupancy-surveys": [17],
		"/integrations/apartment-occupancy-surveys/graficas": [18],
		"/integrations/apartment-occupancy-surveys/graficas/withProxy": [20],
		"/integrations/apartment-occupancy-surveys/graficas/withoutProxy": [19],
		"/integrations/apartment-occupancy-surveys/usos": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';