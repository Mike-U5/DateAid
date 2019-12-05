import { ImageSourcePropType } from 'react-native';

const path = '../assets/datetypes/datetype_';

/** Model **/
export class DateType {
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly src: ImageSourcePropType
	) {};
}

/** Data **/
const DateTypes: DateType[] = [
	new DateType(0, 'First Date', require(path + 'FirstDate.png')),
	new DateType(1, 'Couple', require(path + 'NewCouple.png')),
	new DateType(2, 'Anniversary', require(path + 'Anniversary.png'))
]

export default DateTypes;
