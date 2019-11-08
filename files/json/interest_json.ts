import { ImageSourcePropType } from 'react-native';

const path = '../../assets/interests/';

const Interests: Array<{id: number, name: string, src: ImageSourcePropType}> = [
	{id: 0, name: 'Adventure', src: require(path + 'adventure.png')},
	{id: 1, name: 'Animals', src: require(path + 'animals.png')},
	{id: 2, name: 'Arts', src: require(path + 'arts.png')},
	{id: 3, name: 'Baking', src: require(path + 'baking.png')},
	{id: 4, name: 'Coffee', src: require(path + 'coffee.png')},
	{id: 5, name: 'Cooking', src: require(path + 'cooking.png')},
	{id: 6, name: 'Crafting', src: require(path + 'crafting.png')},
	{id: 7, name: 'Drinks', src: require(path + 'drinks.png')},
	{id: 8, name: 'Gaming', src: require(path + 'gaming.png')},
	{id: 9, name: 'Gardening', src: require(path + 'gardening.png')},
	{id: 10, name: 'Gym', src: require(path + 'gym.png')},
	{id: 11, name: 'Movies', src: require(path + 'movies.png')},
	{id: 12, name: 'Music Listening', src: require(path + 'musiclistening.png')},
	{id: 13, name: 'Music Making', src: require(path + 'musicmaking.png')},
	{id: 14, name: 'Outdoors', src: require(path + 'outdoors.png')},
	{id: 15, name: 'Reading', src: require(path + 'reading.png')},
	{id: 16, name: 'Shopping', src: require(path + 'shopping.png')},
	{id: 17, name: 'Sports', src: require(path + 'sports.png')},
	{id: 18, name: 'Sports Indoors', src: require(path + 'sportsindoors.png')},
	{id: 19, name: 'Sports Outdoors', src: require(path + 'sportsoutdoor.png')},
	{id: 20, name: 'Sports Theatre', src: require(path + 'sportstheatre.png')}
]
export default Interests;
