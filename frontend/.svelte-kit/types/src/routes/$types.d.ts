import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
type RouteParams = {  }
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/" | "/analytics" | "/andalusia-tourism-situation-surveys" | "/andalusia-tourism-situation-surveys/[province]/[year]" | "/apartment-occupancy-surveys" | "/apartment-occupancy-surveys/[province]/[year]" | "/graph/andalusia-tourism-situation-surveys" | "/graph/apartment-occupancy-surveys" | "/hotel-occupancy-surveys" | "/hotel-occupancy-surveys/[province]/[year]" | "/integrations" | "/integrations/andalusia-tourism-situation-surveys" | "/integrations/andalusia-tourism-situation-surveys/integrations" | "/integrations/andalusia-tourism-situation-surveys/integrations/withoutProxy" | "/integrations/andalusia-tourism-situation-surveys/integrations/withProxy" | "/integrations/andalusia-tourism-situation-surveys/uses" | "/integrations/andalusia-tourism-situation-surveys/uses/IMDb" | "/integrations/andalusia-tourism-situation-surveys/uses/PokemonGo" | "/integrations/apartment-occupancy-surveys" | "/integrations/apartment-occupancy-surveys/graficas" | "/integrations/apartment-occupancy-surveys/graficas/withoutProxy" | "/integrations/apartment-occupancy-surveys/graficas/withProxy" | "/integrations/apartment-occupancy-surveys/usos" | null
type LayoutParams = RouteParams & { province?: string,year?: string }
type LayoutParentData = EnsureDefined<{}>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;