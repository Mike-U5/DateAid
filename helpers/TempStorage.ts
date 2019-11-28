import { ProfileStorage } from './ProfileStorage';
import { StorableNumberArray, StorableNumber } from './Storeables';

export class TempStorage extends ProfileStorage {
	public static dateType = new StorableNumber('temp_dateType', 0);
	public static userInterests = new StorableNumberArray('temp_userInterests', []);
	public static userAge = new StorableNumber('temp_userAge', 18);
	public static partnerInterests = new StorableNumberArray('temp_partnerInterests', []);
	public static partnerAge = new StorableNumber('temp_parterAge', 18);

	public static clearAll() {
		this.dateType.clear();
		this.userAge.clear();
		this.partnerAge.clear();
		this.userInterests.clear();
		this.partnerInterests.clear();
	}
}
