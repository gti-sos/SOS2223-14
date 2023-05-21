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
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33')
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
		"/graph/hotel-occupancy-surveys": [11],
		"/hotel-occupancy-surveys": [12],
		"/hotel-occupancy-surveys/[province]/[year]": [13],
		"/integrations": [14],
		"/integrations/andalusia-tourism-situation-surveys": [15],
		"/integrations/andalusia-tourism-situation-surveys/integrations": [16],
		"/integrations/andalusia-tourism-situation-surveys/integrations/withProxy": [18],
		"/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy": [17],
		"/integrations/andalusia-tourism-situation-surveys/uses": [19],
		"/integrations/andalusia-tourism-situation-surveys/uses/IMDb": [20],
		"/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo": [21],
		"/integrations/apartment-occupancy-surveys": [22],
		"/integrations/apartment-occupancy-surveys/graficas": [23],
		"/integrations/apartment-occupancy-surveys/graficas/withProxy": [25],
		"/integrations/apartment-occupancy-surveys/graficas/withoutProxy": [24],
		"/integrations/apartment-occupancy-surveys/usos": [26],
		"/integrations/hotel-occupancy-surveys": [27],
		"/integrations/hotel-occupancy-surveys/integraciones": [28],
		"/integrations/hotel-occupancy-surveys/integraciones/withProxy": [30],
		"/integrations/hotel-occupancy-surveys/integraciones/withoutProxy": [29],
		"/integrations/hotel-occupancy-surveys/usos": [31],
		"/integrations/hotel-occupancy-surveys/usos/DrinksDigital": [32],
		"/integrations/hotel-occupancy-surveys/usos/GamerPower": [33]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';