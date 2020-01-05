/* imports ProfileStorage for extending and storeables for using their exported classes */
import { ProfileStorage } from './ProfileStorage';
import { StorableNumberArray, StorableNumber } from './Storeables';

/* class to save data for temporary usage, will be saved in localstorage until app closes/restarts */
export class TempStorage extends ProfileStorage {
	public static dateType = new StorableNumber('temp_dateType', 0);
	public static userInterests = new StorableNumberArray('temp_userInterests', []);
	public static userAge = new StorableNumber('temp_userAge', 18);
	public static partnerInterests = new StorableNumberArray('temp_partnerInterests', []);
	public static partnerAge = new StorableNumber('temp_parterAge', 18);

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
	}
}
