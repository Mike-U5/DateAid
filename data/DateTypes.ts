import { ImageSourcePropType } from 'react-native';

const path = '../assets/datetypes/datetype_';

/** Model **/
export class DateType {
	constructor(
		protected readonly id: number,
		protected readonly name: String,
		protected readonly src: ImageSourcePropType
	) {};
}

/** Complete List of Data **/
const DateTypes: DateType[] = [
	new DateType(0, 'First Date', require(path + 'FirstDate')),
	new DateType(1, 'New Couple', require(path + 'NewCouple')),
	new DateType(2, 'Anniversary', require(path + 'Anniversary'))
]

export default DateTypes;
