import { ImageSourcePropType } from 'react-native';

const path = '../assets/activities/';

const Dates: Array<{id: number, name: string, type: Array<number>, interests: Array<number>, src: ImageSourcePropType}> = [
	{id: 0, name: 'Cinema', type: [1, 2, 3], interests: [11], src: require(path + 'cinema.png')},
	{id: 1, name: 'Bowling', type: [1, 2, 3], interests: [4], src: require(path + 'bowling.png')},
	{id: 2, name: 'Escape Room', type: [1, 2, 3], interests: [], src: require(path + 'escaperoom.png')},
	{id: 3, name: 'Hiking', type: [1, 2, 3], interests: [4], src: require(path + 'hiking.png')},
	{id: 4, name: 'Zoo', type: [1, 2, 3], interests: [9], src: require(path + 'zoo.png')},
	{id: 5, name: 'Movies', type: [1, 2, 3], interests: [8], src: require(path + 'movies.png')},
	{id: 6, name: 'Dinner', type: [1, 2, 3], interests: [10], src: require(path + 'dinner.png')}
]

export default Dates;
