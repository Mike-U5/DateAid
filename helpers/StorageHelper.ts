import { AsyncStorage } from 'react-native';

export class StorageHelper {

	private static asyncInProgress = 0;

	// Shared
	public static setDateType(datetype: number) {
		AsyncStorage.setItem('dateType', JSON.stringify(datetype));
	}

	public static async getDateType(): Promise<number> {
			const data = await AsyncStorage.getItem('dateType');
			return JSON.parse(data);
	}

	// User
	public static setUserInterests(interests: Array<number>) {
		AsyncStorage.setItem('userInterests', JSON.stringify(interests));
	}

	public static async getUserInterests(): Promise<Array<number>> {
			const data = await AsyncStorage.getItem('userInterests');
			return JSON.parse(data);
	}

	public static setUserAge(age: number) {
		AsyncStorage.setItem('userAge', JSON.stringify(age));
	}

	public static async getUserAge(): Promise<number> {
			const data = await AsyncStorage.getItem('userAge');
			const parsed = JSON.parse(data);
			return parseInt(parsed);
	}

	// Partner
	public static setPartnerInterests(interests: Array<number>) {
		AsyncStorage.setItem('partnerInterests', JSON.stringify(interests));
	}

	public static async getPartnerInterests(): Promise<Array<number>> {
			const data = await AsyncStorage.getItem('partnerInterests');
			return JSON.parse(data);
	}

	public static setPartnerAge(age: number) {
		AsyncStorage.setItem('partnerAge', JSON.stringify(age));
	}

	public static async getPartnerAge(): Promise<number> {
			const data = await AsyncStorage.getItem('partnerAge');
			const parsed = JSON.parse(data);
			return parseInt(parsed);
	}
}
