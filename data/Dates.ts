import { ImageSourcePropType } from 'react-native';

/** Model **/
export class DateItem {
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly type: number[],
		public readonly interest: number[],
		public readonly src: ImageSourcePropType
	) {};
}

const path = '../assets/activities/';

/** Complete List of Data **/
const Dates: DateItem[] = [
	new DateItem(0, 'dateName', [1, 2, 3], [11], require(path + 'cinema.png')),
	new DateItem(1, 'Bowling', [1, 2, 3], [4], require(path + 'bowling.png')),
	new DateItem(2, 'Escape Room', [1, 2, 3], [], require(path + 'escaperoom.png')),
	new DateItem(3, 'Hiking', [1, 2, 3], [4], require(path + 'hiking.png')),
	new DateItem(4, 'Zoo', [1, 2, 3], [9], require(path + 'zoo.png')),
	new DateItem(5, 'Movies', [1, 2, 3], [8], require(path + 'movies.png')),
	new DateItem(6, 'Diner', [1, 2, 3], [10], require(path + 'dinner.png'))
]
export default Dates;
