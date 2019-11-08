import { StorableNumber, StorableNumberArray } from './Storeables';

export class ProfileStorage {
public static dateType = new StorableNumber('profile_dateType', -1);
	public static userInterests = new StorableNumberArray('profile_userInterests', []);
	public static userAge = new StorableNumber('profile_userAge', 18);
	public static partnerInterests = new StorableNumberArray('profile_partnerInterests', []);
	public static partnerAge = new StorableNumber('profile_parterAge', 18);

	public static clearAll() {
		this.dateType.clear();
		this.userAge.clear();
		this.partnerAge.clear();
		this.userInterests.clear();
		this.partnerInterests.clear();
	}
}
