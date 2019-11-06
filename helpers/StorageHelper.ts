import { AsyncStorage } from 'react-native';

export class StorageHelper {

	public static setUserAge(age: number) {
		AsyncStorage.setItem('userAge', JSON.stringify(age));
	}

	public static async getUserAge() {
			const data = await AsyncStorage.getItem('userAge');
			const parsed = JSON.parse(data);
			return parseInt(parsed);
	}

	public static setPartnerAge(age: number) {
		AsyncStorage.setItem('partnerAge', JSON.stringify(age));
	}

	public static async getPartnerAge() {
			const data = await AsyncStorage.getItem('partnerAge');
			const parsed = JSON.parse(data);
			return parseInt(parsed);
	}
}
