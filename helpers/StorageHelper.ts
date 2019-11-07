import { AsyncStorage } from 'react-native';

export class StorageHelper {

	// Shared
	public static setDateType(datetype: number) {
		AsyncStorage.setItem('dateType', JSON.stringify(datetype));
	}

	public static async getDateType(): Promise<number> {
			return this.fetchNumber('dateType', -1);
	}

	// User
	public static setUserInterests(interests: Array<number>) {
		AsyncStorage.setItem('userInterests', JSON.stringify(interests));
	}

	public static async getUserInterests(): Promise<Array<number>> {
			return this.fetchNumberArray('userInterests', []);
	}

	public static setUserAge(age: number) {
		AsyncStorage.setItem('userAge', JSON.stringify(age));
	}

	public static async getUserAge(): Promise<number> {
			return this.fetchNumber('userAge', 18);
	}

	// Partner
	public static setPartnerInterests(interests: Array<number>) {
		AsyncStorage.setItem('partnerInterests', JSON.stringify(interests));
	}

	public static async getPartnerInterests(): Promise<Array<number>> {
			return this.fetchNumberArray('partnerInterests', []);
	}

	public static setPartnerAge(age: number) {
		AsyncStorage.setItem('partnerAge', JSON.stringify(age));
	}

	public static async getPartnerAge(): Promise<number> {
			return this.fetchNumber('partnerAge', 18);
	}

	////////////////////
	// Base Functions //
	////////////////////
	private static async fetchNumber(itemName: string, defaultValue: number) {
		const data = await AsyncStorage.getItem(itemName);
		if (!data) {
			return defaultValue;
		}
		return parseInt(data);
	}

	private static async fetchNumberArray(itemName: string, defaultValue: Array<number>) {
		const data = await AsyncStorage.getItem(itemName);
		if (!data) {
			return defaultValue;
		}
		return JSON.parse(data);
	}
}
