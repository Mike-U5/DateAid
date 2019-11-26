import { ImageSourcePropType } from 'react-native';

const path = '../assets/interests/';

/** Model **/
export class Interest {
	constructor(
		public readonly id: number,
		public readonly name: string,
		public readonly src: ImageSourcePropType
	) {};
}

const Interests: Interest[] = [
	new Interest(0, 'Adventure', require(path + 'adventure.png')),
	new Interest(1, 'Arts', require(path + 'arts.png')),
	new Interest(2, 'Beauty', require(path + 'beauty.png')),
	new Interest(3, 'Community', require(path + 'community.png')),
	new Interest(4, 'Entertainment', require(path + 'entertainment.png')),
	new Interest(5, 'Food', require(path + 'food.png')),
	new Interest(6, 'Gaming', require(path + 'gaming.png')),
	new Interest(7, 'Health', require(path + 'health.png')),
	new Interest(8, 'Home', require(path + 'home.png')),
	new Interest(9, 'Nature', require(path + 'nature.png')),
	new Interest(10, 'Travel', require(path + 'travel.png')),
];
export default Interests;
