import { AsyncStorage } from 'react-native';

export enum StorageType {Profile, Temporary};

export class StorageHelper {
	private readonly storageType: StorageType;

	constructor(storageType: StorageType) {
		this.storageType = storageType;
	}

	// Shared
	public setDateType(datetype: number) {
		const sId = 'dateType_' + this.storageType;
		AsyncStorage.setItem(sId, JSON.stringify(datetype));
	}

	public async getDateType(): Promise<number> {
			return this.fetchNumber('dateType', -1);
	}

	public clearDateType() {
		const sId = 'dateType_' + this.storageType;
		AsyncStorage.setItem(sId, JSON.stringify(-1));
	}

	// User
	public setUserInterests(interests: Array<number>) {
		AsyncStorage.setItem('userInterests', JSON.stringify(interests));
	}

	public async getUserInterests(): Promise<Array<number>> {
			return this.fetchNumberArray('userInterests', []);
	}

	public setUserAge(age: number) {
		AsyncStorage.setItem('userAge', JSON.stringify(age));
	}

	public async getUserAge(): Promise<number> {
			return this.fetchNumber('userAge', 18);
	}

	// Partner
	public setPartnerInterests(interests: Array<number>) {
		AsyncStorage.setItem('partnerInterests', JSON.stringify(interests));
	}

	public async getPartnerInterests(): Promise<Array<number>> {
			return this.fetchNumberArray('partnerInterests', []);
	}

	public setPartnerAge(age: number) {
		AsyncStorage.setItem('partnerAge', JSON.stringify(age));
	}

	public async getPartnerAge(): Promise<number> {
			return this.fetchNumber('partnerAge', 18);
	}

	////////////////////
	// Base Functions //
	////////////////////
	private async fetchNumber(itemName: string, defaultValue: number) {
		const data = await AsyncStorage.getItem(itemName);
		if (!data) {
			return defaultValue;
		}
		return parseInt(data);
	}

	private async fetchNumberArray(itemName: string, defaultValue: Array<number>) {
		const data = await AsyncStorage.getItem(itemName);
		if (!data) {
			return defaultValue;
		}
		return JSON.parse(data);
	}
}
