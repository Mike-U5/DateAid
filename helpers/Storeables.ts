import { AsyncStorage } from 'react-native';

interface IStorable<T> {
	readonly defaultVal: T;
	readonly name: string;

	set(val: T): void;
	get(): Promise<T>;
	clear(): void;
}

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

export class StorableNumberArray implements IStorable<Array<number>> {
	readonly defaultVal: Array<number>;
	readonly name: string;

	constructor(name: string, defaultVal: Array<number>) {
		this.name = name;
		this.defaultVal = defaultVal;
	}

	public set(val: Array<number>): void {
		AsyncStorage.setItem(this.name, JSON.stringify(val));
	}

	public async get(): Promise<Array<number>> {
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
