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
	new Interest(1, 'Animals', require(path + 'animals.png')),
	new Interest(2, 'Arts', require(path + 'arts.png')),
	new Interest(3, 'Baking', require(path + 'baking.png')),
	new Interest(4, 'Coffee', require(path + 'coffee.png')),
	new Interest(5, 'Cooking', require(path + 'cooking.png')),
	new Interest(6, 'Crafting', require(path + 'crafting.png')),
	new Interest(7, 'Drinks', require(path + 'drinks.png')),
	new Interest(8, 'Gaming', require(path + 'gaming.png')),
	new Interest(9, 'Gardening', require(path + 'gardening.png')),
	new Interest(10, 'Gym', require(path + 'gym.png')),
	new Interest(11, 'Movies', require(path + 'movies.png')),
	new Interest(12, 'Music Listening', require(path + 'musiclistening.png')),
	new Interest(13, 'Music Making', require(path + 'musicmaking.png')),
	new Interest(14, 'Outdoors', require(path + 'outdoors.png')),
	new Interest(15, 'Reading', require(path + 'reading.png')),
	new Interest(16, 'Shopping', require(path + 'shopping.png')),
	new Interest(17, 'Sports', require(path + 'sports.png')),
	new Interest(18, 'Sports Indoors', require(path + 'sportsindoors.png')),
	new Interest(19, 'Sports Outdoors', require(path + 'sportsoutdoor.png')),
	new Interest(20, 'Sports Theatre', require(path + 'sportstheatre.png'))
];
export default Interests;
