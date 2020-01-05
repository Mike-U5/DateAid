/* imports AsyncStorage to save data in localstorage */
import { AsyncStorage } from 'react-native';

/* IStorable interface where the type of the variable is being passed as a generic*/
export interface IStorable<T> {
	readonly name: string;
	readonly defaultVal: T;

	set(arg: T): void;
	get(): Promise<T>;
	clear(): void;
}

/*
	Storable thats being used to save NUMBERS
	gets used in ProfileStorage and Tempstorage to save data in localstorage
*/
export class StorableNumber implements IStorable<number> {
	readonly defaultVal: number;
	readonly name: string;

	constructor(name: string, defaultVal: number) {
		this.name = name;
		this.defaultVal = defaultVal;
	}

	public set(val: number): void {
		AsyncStorage.setItem(this.name, JSON.stringify(val));
	}

	public async get(): Promise<number> {
		const data = await AsyncStorage.getItem(this.name);
		if (!data) {
			return this.defaultVal;
		}
		return parseInt(data);
	}

	public clear(): void {
		this.set(this.defaultVal);
	}
}

/*
	Storable thats being used to save NUMBERARRAYS
	gets used in ProfileStorage and Tempstorage to save data in localstorage
*/
export class StorableNumberArray implements IStorable<number[]> {
	readonly defaultVal: number[];
	readonly name: string;

	constructor(name: string, defaultVal: number[]) {
		this.name = name;
		this.defaultVal = defaultVal;
	}

	public set(val: number[]): void {
		AsyncStorage.setItem(this.name, JSON.stringify(val));
	}

	public async get(): Promise<number[]> {
		const data = await AsyncStorage.getItem(this.name);
		if (!data) {
			return this.defaultVal;
		}
		return JSON.parse(data);
	}

	public clear(): void {
		this.set(this.defaultVal);
	}
}

/*
	Storable thats being used to save BOOLEAN
	gets used in ProfileStorage and Tempstorage to save data in localstorage
*/
export class StorableBoolean implements IStorable<boolean> {
	readonly defaultVal: boolean;
	readonly name: string;

	constructor(name: string, defaultVal: boolean) {
		this.name = name;
		this.defaultVal = defaultVal;
	}

	public set(bool: boolean): void {
		AsyncStorage.setItem(this.name, JSON.stringify(bool));
	}

	public async get(): Promise<boolean> {
		const data = await AsyncStorage.getItem(this.name);
		if (!data) {
			return this.defaultVal;
		}
		return JSON.parse(data);
	}

	public clear(): void {
		this.set(this.defaultVal);
	}
}
