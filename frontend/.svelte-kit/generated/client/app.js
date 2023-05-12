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
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/about": [3],
		"/analytics": [4],
		"/andalusia-tourism-situation-surveys": [5],
		"/andalusia-tourism-situation-surveys/[province]/[year]": [6],
		"/apartment-occupancy-surveys": [7],
		"/apartment-occupancy-surveys/[province]/[year]": [8],
		"/graph/andalusia-tourism-situation-surveys": [9],
		"/graph/apartment-occupancy-surveys": [10],
		"/hotel-occupancy-surveys": [11],
		"/hotel-occupancy-surveys/[province]/[year]": [12],
		"/integrations": [13],
		"/integrations/andalusia-tourism-situation-surveys": [14],
		"/integrations/andalusia-tourism-situation-surveys/integrations": [15],
		"/integrations/andalusia-tourism-situation-surveys/integrations/withProxy": [17],
		"/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy": [16],
		"/integrations/andalusia-tourism-situation-surveys/uses": [18],
		"/integrations/andalusia-tourism-situation-surveys/uses/IMDb": [19],
		"/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo": [20],
		"/integrations/apartment-occupancy-surveys": [21],
		"/integrations/apartment-occupancy-surveys/graficas": [22],
		"/integrations/apartment-occupancy-surveys/graficas/withProxy": [24],
		"/integrations/apartment-occupancy-surveys/graficas/withoutProxy": [23],
		"/integrations/apartment-occupancy-surveys/usos": [25]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';