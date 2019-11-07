import { AsyncStorage } from 'react-native';

export class StorageHelper {

	// Shared
	public static setDateType(datetype: number) {
		AsyncStorage.setItem('dateType', JSON.stringify(datetype));
	}

	public static async getDateType(): Promise<number> {
			const data = await AsyncStorage.getItem('dateType');
			if (!data) {
				return -1;
			}
			return parseInt(data);
	}

	// User
	public static setUserInterests(interests: Array<number>) {
		AsyncStorage.setItem('userInterests', JSON.stringify(interests));
	}

	public static async getUserInterests(): Promise<Array<number>> {
			const data = await AsyncStorage.getItem('userInterests');
			if (!data) {
				return [];
			}
			return JSON.parse(data);
	}

	public static setUserAge(age: number) {
		AsyncStorage.setItem('userAge', JSON.stringify(age));
	}

	public static async getUserAge(): Promise<number> {
			const data = await AsyncStorage.getItem('userAge');
			if (!data) {
				return 18;
			}
			return parseInt(data);
	}

	// Partner
	public static setPartnerInterests(interests: Array<number>) {
		AsyncStorage.setItem('partnerInterests', JSON.stringify(interests));
	}

	public static async getPartnerInterests(): Promise<Array<number>> {
			const data = await AsyncStorage.getItem('partnerInterests');
			if (!data) {
				return [];
			}
			return JSON.parse(data);
	}

	public static setPartnerAge(age: number) {
		AsyncStorage.setItem('partnerAge', JSON.stringify(age));
	}

	public static async getPartnerAge(): Promise<number> {
			const data = await AsyncStorage.getItem('partnerAge');
			if (!data) {
				return 18;
			}
			return parseInt(data);
	}
}
