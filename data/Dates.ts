import { ImageSourcePropType } from 'react-native';

/** Model **/
export class DateItem {
	public readonly id: number;
	public readonly name: string;
	public readonly types: readonly number[];
	public readonly interests: readonly number[];
	public readonly src: ImageSourcePropType;

	constructor(id: number, name: string, types: number[], interests: number[], src: ImageSourcePropType) {
		this.id = id;
		this.name = name;
		this.types = Object.freeze(types);
		this.interests = Object.freeze(interests);
		this.src = src;
	};
}

const path = '../assets/activities/';

/** Data **/
const Dates: DateItem[] = [
	new DateItem(0, 'Cinema', [1, 2, 3], [11], require(path + 'cinema.png')),
	new DateItem(1, 'Bowling', [1, 2, 3], [4], require(path + 'bowling.png')),
	new DateItem(2, 'Escape Room', [1, 2, 3], [1, 2, 3, 6, 8, 9, 10], require(path + 'escaperoom.png')),
	new DateItem(3, 'Hiking', [1, 2, 3], [4, 17, 19], require(path + 'hiking.png')),
	new DateItem(4, 'Zoo', [1, 2, 3], [0, 1], require(path + 'zoo.png')),
	new DateItem(5, 'Movies', [1, 2, 3], [11, 20], require(path + 'movies.png')),
	new DateItem(6, 'Dinner', [1, 2, 3], [5, 7], require(path + 'dinner.png')),
	new DateItem(7, 'Antique Shop', [1, 2, 3], [0], require(path + 'antiqueshop.png')),
	new DateItem(8, 'Arcade Hall', [1, 2, 3], [0], require(path + 'arcadehall.png')),
	new DateItem(9, 'Archery', [1, 2, 3], [0], require(path + 'archery.png')),
	new DateItem(10, 'Auction', [1, 2, 3], [0], require(path + 'auction.png')),
	new DateItem(11, 'Baking', [1, 2, 3], [0], require(path + 'baking.png')),
	new DateItem(12, 'Beachwalk', [1, 2, 3], [0], require(path + 'beachwalk.png')),
	new DateItem(13, 'Boardgames', [1, 2, 3], [0], require(path + 'boardgames.png')),
	new DateItem(14, 'Boatride', [1, 2, 3], [0], require(path + 'boatride.png')),
	new DateItem(15, 'Break a World Record', [1, 2, 3], [0], require(path + 'breakaworldrecord.png')),
	new DateItem(16, 'Brewery', [1, 2, 3], [0], require(path + 'brewery.png')),
	new DateItem(17, 'Bucketlist', [1, 2, 3], [0], require(path + 'bucketlist.png')),
	new DateItem(18, 'Camping', [1, 2, 3], [0], require(path + 'camping.png')),
	new DateItem(19, 'Charades', [1, 2, 3], [0], require(path + 'charades.png')),
	new DateItem(20, 'Church', [1, 2, 3], [0], require(path + 'church.png')),
	new DateItem(21, 'Cleaning up Litter', [1, 2, 3], [0], require(path + 'cleaninguplitter.png')),
	new DateItem(22, 'Climbing', [1, 2, 3], [0], require(path + 'climbing.png')),
	new DateItem(23, 'Comicbooks', [1, 2, 3], [0], require(path + 'comicbooks.png')),
	new DateItem(24, 'Cook Dinner', [1, 2, 3], [0], require(path + 'cookdinner.png')),
	new DateItem(25, 'Couple Yoga', [1, 2, 3], [0], require(path + 'coupleyoga.png')),
	new DateItem(26, 'Cycling', [1, 2, 3], [0], require(path + 'cycling.png')),
	new DateItem(27, 'Dance Class', [1, 2, 3], [0], require(path + 'danceclass.png')),
	new DateItem(28, 'Fake Art Expert', [1, 2, 3], [0], require(path + 'fakeartexpert.png')),
	new DateItem(29, 'Fishing', [1, 2, 3], [0], require(path + 'fishing.png')),
	new DateItem(30, 'Gaming Night', [1, 2, 3], [0], require(path + 'gamingnight.png')),
	new DateItem(31, 'Gardening', [1, 2, 3], [0], require(path + 'gardening.png')),
	new DateItem(32, 'Go to a Sportsmatch', [1, 2, 3], [0], require(path + 'gotoasportsmatch.png')),
	new DateItem(33, 'Grab a Coffee', [1, 2, 3], [0], require(path + 'grabacoffee.png')),
	new DateItem(34, 'Horseback Riding', [1, 2, 3], [0], require(path + 'horsebackriding.png')),
	new DateItem(35, 'Hot Air Balloon Ride', [1, 2, 3], [0], require(path + 'hotairballoonride.png')),
	new DateItem(36, 'Ice Cream', [1, 2, 3], [0], require(path + 'icecream.png')),
	new DateItem(37, 'Ice-skating', [1, 2, 3], [0], require(path + 'iceskating.png')),
	new DateItem(38, 'Jogging', [1, 2, 3], [0], require(path + 'jogging.png')),
	new DateItem(39, 'Karaoke', [1, 2, 3], [0], require(path + 'karaoke.png')),
	new DateItem(40, 'Kart Racing', [1, 2, 3], [0], require(path + 'kartracing.png')),
	new DateItem(41, 'Kite Flying', [1, 2, 3], [0], require(path + 'kiteflying.png')),
	new DateItem(42, 'Lasergaming', [1, 2, 3], [0], require(path + 'lasergaming.png')),
	new DateItem(43, 'Listen to Music', [1, 2, 3], [0], require(path + 'listentomusic.png')),
	new DateItem(44, 'Local Music Band', [1, 2, 3], [0], require(path + 'localmusicband.png')),
	new DateItem(45, 'Look at Old Photo Albums', [1, 2, 3], [0], require(path + 'lookatoldphotoalbums.png')),
	new DateItem(46, 'Make a Collage', [1, 2, 3], [0], require(path + 'makeacollage.png')),
	new DateItem(47, 'Market', [1, 2, 3], [0], require(path + 'market.png')),
	new DateItem(48, 'Massage', [1, 2, 3], [0], require(path + 'massage.png')),
	new DateItem(49, 'Metal Detector', [1, 2, 3], [0], require(path + 'metaldetector.png')),
	new DateItem(50, 'Midget Golf', [1, 2, 3], [0], require(path + 'midgetgolf.png')),
	new DateItem(51, 'Modeling Clay', [1, 2, 3], [0], require(path + 'modelingclay.png')),
	new DateItem(52, 'Movie Marathon', [1, 2, 3], [0], require(path + 'moviemarathon.png')),
	new DateItem(53, 'Museum', [1, 2, 3], [0], require(path + 'museum.png')),
	new DateItem(54, 'Musical', [1, 2, 3], [0], require(path + 'musical.png')),
	new DateItem(55, 'New Food Night', [1, 2, 3], [0], require(path + 'newfoodnight.png')),
	new DateItem(56, 'New Language', [1, 2, 3], [0], require(path + 'newlanguage.png')),
	new DateItem(57, 'New Sport', [1, 2, 3], [0], require(path + 'newsport.png')),
	new DateItem(58, 'Painting', [1, 2, 3], [0], require(path + 'painting.png')),
	new DateItem(59, 'Park Walk', [1, 2, 3], [0], require(path + 'parkwalk.png')),
	new DateItem(60, 'Petting Zoo', [1, 2, 3], [0], require(path + 'pettingzoo.png')),
	new DateItem(61, 'Photographing', [1, 2, 3], [0], require(path + 'photographing.png')),
	new DateItem(62, 'Picnic', [1, 2, 3], [0], require(path + 'picnic.png')),
	new DateItem(63, 'Pillowfort', [1, 2, 3], [0], require(path + 'pillowfort.png')),
	new DateItem(64, 'Plan a Vacation', [1, 2, 3], [0], require(path + 'planavacation.png')),
	new DateItem(65, 'Play Pool', [1, 2, 3], [0], require(path + 'playpool.png')),
	new DateItem(66, 'Podcast', [1, 2, 3], [0], require(path + 'podcast.png')),
	new DateItem(67, 'Power Outage', [1, 2, 3], [0], require(path + 'poweroutage.png')),
	new DateItem(68, 'Roast Marshmallows', [1, 2, 3], [0], require(path + 'roastmarshmallows.png')),
	new DateItem(69, 'Roller-Skating', [1, 2, 3], [0], require(path + 'roller-skating.png')),
	new DateItem(70, 'Scavenger Hunt', [1, 2, 3], [0], require(path + 'scavengerhunt.png')),
	new DateItem(71, 'shopping', [1, 2, 3], [0], require(path + 'shopping.png')),
	new DateItem(72, 'Skip Rocks', [1, 2, 3], [0], require(path + 'skiprocks.png')),
	new DateItem(73, 'spa', [1, 2, 3], [0], require(path + 'spa.png')),
	new DateItem(74, 'Stargazing', [1, 2, 3], [0], require(path + 'stargazing.png')),
	new DateItem(75, 'Street Fair', [1, 2, 3], [0], require(path + 'streetfair.png')),
	new DateItem(76, 'Sunset', [1, 2, 3], [0], require(path + 'sunsetl.png')),
	new DateItem(77, 'Swimming', [1, 2, 3], [0], require(path + 'swimming.png')),
	new DateItem(78, 'Tai chi', [1, 2, 3], [0], require(path + 'taichi.png')),
	new DateItem(79, 'Themepark', [1, 2, 3], [0], require(path + 'themepark.png')),
	new DateItem(80, 'Thriftshop', [1, 2, 3], [0], require(path + 'thriftshop.png')),
	new DateItem(81, 'Time capsule', [1, 2, 3], [0], require(path + 'timecapsule.png')),
	new DateItem(82, 'Train Ride to Somewhere', [1, 2, 3], [0], require(path + 'trainridetosomewhere.png')),
	new DateItem(83, 'Trampoline Park', [1, 2, 3], [0], require(path + 'trampolinepark.png')),
	new DateItem(84, 'Truth or Dare', [1, 2, 3], [0], require(path + 'truthordare.png')),
	new DateItem(85, 'Urban Exploring', [1, 2, 3], [0], require(path + 'urbanexploring.png')),
	new DateItem(86, 'Volunteering', [1, 2, 3], [0], require(path + 'volunteering.png')),
	new DateItem(87, 'Waterfight', [1, 2, 3], [0], require(path + 'waterfight.png')),
	new DateItem(88, 'Workout', [1, 2, 3], [0], require(path + 'workout.png')),
	new DateItem(89, 'Write a Song', [1, 2, 3], [0], require(path + 'writeasong.png')),
	new DateItem(90, 'Write a Story', [1, 2, 3], [0], require(path + 'writeastory.png')),
	new DateItem(91, 'Look at Memes', [/*Keep Empty*/], [/*Keep Empty*/], require(path + 'memes.png')),
]
export default Dates;
