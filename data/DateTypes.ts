import { ImageSourcePropType } from 'react-native';

const path = '../assets/datetypes/datetype_';

const DateTypes: Array<{id: Number, name: string, src: ImageSourcePropType}> = [
	{id: 0, name: 'First Date', src: require(path + 'FirstDate')},
	{id: 1, name: 'New Couple', src: require(path + 'NewCouple')},
	{id: 2, name: 'Anniversary', src: require(path + 'Anniversary')}
]

export default DateTypes;
