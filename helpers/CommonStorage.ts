/* imports all Storable from Storables, to save data in the CommonStorage*/
import { StorableNumber } from './Storeables';

export class CommonStorage {
	public static themeId = new StorableNumber('common_themeId', 1);
}
