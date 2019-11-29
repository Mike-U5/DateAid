import { ProfileStorage } from '../../helpers/ProfileStorage';
import { SelectInterests } from './SelectInterests';
import { NavIcons } from '../../data/NavIcons';
import { NavHelper } from '../../helpers/NavHelper';

export class SelectInterestsProfile extends SelectInterests {

	protected readonly storageLocation = ProfileStorage.userInterests;

	/** Navigation for this page **/
	static navigationOptions = ({ navigation }: {navigation: any}) => ({
		headerRight: (NavHelper.getRight(NavIcons.Check, () => navigation.navigate('PickActivity'))),
		headerLeft: (NavHelper.getLeft(NavIcons.Backward, () => navigation.goBack()))
	})
}
