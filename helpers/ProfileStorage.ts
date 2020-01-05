/* imports necessary classes from Storeables */
import { StorableNumber, StorableNumberArray, StorableBoolean } from './Storeables';

/* Main class that gets extended by Tempstorage, used to save data in localstorage */
export class ProfileStorage {
	public static dateType = new StorableNumber('profile_dateType', -1);
	public static userInterests = new StorableNumberArray('profile_userInterests', []);
	public static userAge = new StorableNumber('profile_userAge', 18);
	public static partnerInterests = new StorableNumberArray('profile_partnerInterests', []);
	public static partnerAge = new StorableNumber('profile_parterAge', 18);
	public static madeProfile = new StorableBoolean('profile_madeProfile', false);

/*
	function to clear all data from the localstorage
	only for programmingpurposes
*/
	public static clearAll() {
		this.dateType.clear();
		this.userAge.clear();
		this.partnerAge.clear();
		this.userInterests.clear();
		this.partnerInterests.clear();
		this.madeProfile.clear();
	}
}
