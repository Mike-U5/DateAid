import { StorableNumber, StorableNumberArray } from './Storeables';

export class ProfileStorage {
	protected static uid = 'profile';
	public static dateType = new StorableNumber(ProfileStorage.uid + '_dateType');
	public static userInterests = new StorableNumberArray(ProfileStorage.uid + '_userInterests');
	public static userAge = new StorableNumber(ProfileStorage.uid + '_userAge');
	public static partnerInterests = new StorableNumberArray(ProfileStorage.uid + '_partnerInterests');
	public static partnerAge = new StorableNumber(ProfileStorage.uid + '_parterAge');
}

export class TempStorage extends ProfileStorage {
	protected static uid = 'temporary';
}
