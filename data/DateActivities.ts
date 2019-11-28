import { ImageSourcePropType } from 'react-native';

/** Model **/
export class DateActivity {
	public readonly id: number;
	public readonly name: string;
	public readonly mapName: string;
	public readonly types: readonly number[];
	public readonly interests: readonly number[];
	public readonly src: ImageSourcePropType;

	constructor(id: number, name: string, mapName: string, types: number[], interests: number[], src: ImageSourcePropType) {
		this.id = id;
		this.name = name;
		this.mapName = mapName;
		this.types = Object.freeze(types);
		this.interests = Object.freeze(interests);
		this.src = src;
	};
}

const path = '../assets/activities/';

/** Data **/
const Dates: DateActivity[] = [
	new DateActivity(0, 'Cinema', 'Cinema', [1, 2, 3], [4], require(path + 'cinema.png')),
	new DateActivity(1, 'Bowling', 'Bowling', [1, 2, 3], [4, 7], require(path + 'bowling.png')),
	new DateActivity(2, 'Escape Room', 'Escape Room', [1, 2, 3], [0, 4, 6], require(path + 'escaperoom.png')),
	new DateActivity(3, 'Hiking', 'Hiking', [1, 2, 3], [0, 7, 9, 10], require(path + 'hiking.png')),
	new DateActivity(4, 'Zoo', 'Zoo', [1, 2, 3], [9], require(path + 'zoo.png')),
	new DateActivity(5, 'Movies', '', [1, 2, 3], [4, 8], require(path + 'movies.png')),
	new DateActivity(6, 'Dinner', 'Dinner', [1, 2, 3], [5, 7], require(path + 'dinner.png')),
	new DateActivity(7, 'Antique Shop', 'Antique Shop', [1, 2, 3], [3], require(path + 'antiqueshop.png')),
	new DateActivity(8, 'Arcade Hall', 'Arcade Hall', [1, 2, 3], [6], require(path + 'arcadehall.png')),
	new DateActivity(9, 'Archery', 'Archery Club', [1, 2, 3], [0, 6], require(path + 'archery.png')),
	new DateActivity(10, 'Auction', 'Auction', [1, 2, 3], [3], require(path + 'auction.png')),
	new DateActivity(11, 'Baking', '',  [1, 2, 3], [5, 7], require(path + 'baking.png')),
	new DateActivity(12, 'Beachwalk', 'Beach', [1, 2, 3], [4, 7, 9], require(path + 'beachwalk.png')),
	new DateActivity(13, 'Boardgames', '',  [1, 2, 3], [6, 8], require(path + 'boardgames.png')),
	new DateActivity(14, 'Boatride', 'Boatride', [1, 2, 3], [0, 9, 10], require(path + 'boatride.png')),
	new DateActivity(15, 'Break a World Record', '', [1, 2, 3], [4, 8], require(path + 'breakaworldrecord.png')),
	new DateActivity(16, 'Brewery', 'Brewery', [1, 2, 3], [1, 4], require(path + 'brewery.png')),
	new DateActivity(17, 'Bucketlist', '',  [1, 2, 3], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], require(path + 'bucketlist.png')),
	new DateActivity(18, 'Camping', 'Camping', [1, 2, 3], [0, 9], require(path + 'camping.png')),
	new DateActivity(19, 'Charades', '',  [1, 2, 3], [4, 7, 8], require(path + 'charades.png')),
	new DateActivity(20, 'Church', 'Church', [1, 2, 3], [3], require(path + 'church.png')),
	new DateActivity(21, 'Cleaning up Litter', '', [1, 2, 3], [3, 9], require(path + 'cleaninguplitter.png')),
	new DateActivity(22, 'Climbing', 'Climbing', [1, 2, 3], [0, 7], require(path + 'climbing.png')),
	new DateActivity(23, 'Comicbooks', 'Comic Store', [1, 2, 3], [1, 3], require(path + 'comicbooks.png')),
	new DateActivity(24, 'Cook Dinner', '', [1, 2, 3], [5], require(path + 'cookdinner.png')),
	new DateActivity(25, 'Couple Yoga', 'Yoga Studio', [1, 2, 3], [7, 8], require(path + 'coupleyoga.png')),
	new DateActivity(26, 'Cycling', '', [1, 2, 3], [7, 10], require(path + 'cycling.png')),
	new DateActivity(27, 'Dance Class', 'Dance School', [1, 2, 3], [4, 7], require(path + 'danceclass.png')),
	new DateActivity(28, 'Fake Art Expert', 'Art Gallery', [1, 2, 3], [1, 4], require(path + 'fakeartexpert.png')),
	new DateActivity(29, 'Fishing', 'Fishing Club', [1, 2, 3], [0, 9], require(path + 'fishing.png')),
	new DateActivity(30, 'Gaming Night', '', [1, 2, 3], [4, 6], require(path + 'gamingnight.png')),
	new DateActivity(31, 'Gardening', '',  [1, 2, 3], [8, 9], require(path + 'gardening.png')),
	new DateActivity(32, 'Go to a Sportsmatch', 'Stadium', [1, 2, 3], [4, 7], require(path + 'gotoasportsmatch.png')),
	new DateActivity(33, 'Grab a Coffee', 'Coffee', [1, 2, 3], [5], require(path + 'grabacoffee.png')),
	new DateActivity(34, 'Horseback Riding', 'Horseback Riding', [1, 2, 3], [0, 9, 10], require(path + 'horsebackriding.png')),
	new DateActivity(35, 'Hot Air Balloon Ride', 'Hot Air Balloon Flight', [1, 2, 3], [0, 9, 10], require(path + 'hotairballoonride.png')),
	new DateActivity(36, 'Ice Cream', 'Ice Cream', [1, 2, 3], [5], require(path + 'icecream.png')),
	new DateActivity(37, 'Ice-skating', 'Ice Skating', [1, 2, 3], [7], require(path + 'iceskating.png')),
	new DateActivity(38, 'Jogging', 'Jogging', [1, 2, 3], [7], require(path + 'jogging.png')),
	new DateActivity(39, 'Karaoke', 'Karaoke', [1, 2, 3], [4, 6], require(path + 'karaoke.png')),
	new DateActivity(40, 'Kart Racing', 'Go-Kart', [1, 2, 3], [0, 10], require(path + 'kartracing.png')),
	new DateActivity(41, 'Kite Flying', 'Beach', [1, 2, 3], [0, 4, 9], require(path + 'kiteflying.png')),
	new DateActivity(42, 'Lasergaming', 'Lasergaming', [1, 2, 3], [0, 4, 6, 7], require(path + 'lasergaming.png')),
	new DateActivity(43, 'Listen to Music', '', [1, 2, 3], [1, 4, 8], require(path + 'listentomusic.png')),
	new DateActivity(44, 'Local Music Band', 'Live Music', [1, 2, 3], [1, 3, 4], require(path + 'localmusicband.png')),
	new DateActivity(45, 'Look at Old Photo Albums', '', [1, 2, 3], [4, 8], require(path + 'lookatoldphotoalbums.png')),
	new DateActivity(46, 'Make a Collage', '', [1, 2, 3], [1, 8], require(path + 'makeacollage.png')),
	new DateActivity(47, 'Market', 'Market', [1, 2, 3], [3, 5 ], require(path + 'market.png')),
	new DateActivity(48, 'Massage', 'Massage', [1, 2, 3], [2, 7], require(path + 'massage.png')),
	new DateActivity(49, 'Metal Detector', 'Nature Reserve', [1, 2, 3], [0, 9], require(path + 'metaldetector.png')),
	new DateActivity(50, 'Midget Golf', 'Midget Golf', [1, 2, 3], [4, 6, 7], require(path + 'midgetgolf.png')),
	new DateActivity(51, 'Modeling Clay', 'Ceramist', [1, 2, 3], [1, 8], require(path + 'modelingclay.png')),
	new DateActivity(52, 'Movie Marathon', '', [1, 2, 3], [4, 8], require(path + 'moviemarathon.png')),
	new DateActivity(53, 'Museum', 'Museum', [1, 2, 3], [1, 4], require(path + 'museum.png')),
	new DateActivity(54, 'Musical', 'Musical', [1, 2, 3], [1, 4], require(path + 'musical.png')),
	new DateActivity(55, 'New Food Night', 'Restaurant', [1, 2, 3], [5, 7, 8], require(path + 'newfoodnight.png')),
	new DateActivity(56, 'New Language', 'Language', [1, 2, 3], [3, 10], require(path + 'newlanguage.png')),
	new DateActivity(57, 'New Sport', 'Sports Club', [1, 2, 3], [3, 7], require(path + 'newsport.png')),
	new DateActivity(58, 'Painting', '', [1, 2, 3], [1, 8], require(path + 'painting.png')),
	new DateActivity(59, 'Park Walk', 'Park Walk', [1, 2, 3], [7, 9], require(path + 'parkwalk.png')),
	new DateActivity(60, 'Petting Zoo', 'Petting Zoo', [1, 2, 3], [9], require(path + 'pettingzoo.png')),
	new DateActivity(61, 'Photographing', 'Tourist Attraction', [1, 2, 3], [0, 1, 8, 9, 10], require(path + 'photographing.png')),
	new DateActivity(62, 'Picnic', 'Park', [1, 2, 3], [5, 9], require(path + 'picnic.png')),
	new DateActivity(63, 'Pillowfort', '', [1, 2, 3], [8], require(path + 'pillowfort.png')),
	new DateActivity(64, 'Plan a Vacation', 'Travel Agency', [1, 2, 3], [10], require(path + 'planavacation.png')),
	new DateActivity(65, 'Play Pool', 'Pool Centre', [1, 2, 3], [6], require(path + 'playpool.png')),
	new DateActivity(66, 'Podcast', '', [1, 2, 3], [4, 8], require(path + 'podcast.png')),
	new DateActivity(67, 'Power Outage', '', [1, 2, 3], [0, 8], require(path + 'poweroutage.png')),
	new DateActivity(68, 'Roast Marshmallows', '', [1, 2, 3], [3, 5, 9, 10], require(path + 'roastmarshmallows.png')),
	new DateActivity(69, 'Roller-Skating', 'Roller Skating', [1, 2, 3], [7], require(path + 'roller-skating.png')),
	new DateActivity(70, 'Scavenger Hunt', '', [1, 2, 3], [0, 3, 9], require(path + 'scavengerhunt.png')),
	new DateActivity(71, 'shopping', 'Shopping', [1, 2, 3], [2], require(path + 'shopping.png')),
	new DateActivity(72, 'Skip Rocks', 'Lake', [1, 2, 3], [9], require(path + 'skiprocks.png')),
	new DateActivity(73, 'spa', 'Wellness', [1, 2, 3], [2], require(path + 'spa.png')),
	new DateActivity(74, 'Stargazing', '', [1, 2, 3], [0, 9], require(path + 'stargazing.png')),
	new DateActivity(75, 'Street Fair', 'Mart', [1, 2, 3], [3], require(path + 'streetfair.png')),
	new DateActivity(76, 'Sunset', 'Sunset spot', [1, 2, 3], [9], require(path + 'sunsetl.png')),
	new DateActivity(77, 'Swimming', 'Swimming', [1, 2, 3], [7], require(path + 'swimming.png')),
	new DateActivity(78, 'Tai chi', 'Tai chi', [1, 2, 3], [7], require(path + 'taichi.png')),
	new DateActivity(79, 'Themepark', 'Themepark', [1, 2, 3], [0, 4], require(path + 'themepark.png')),
	new DateActivity(80, 'Thriftshop', 'Thriftshop', [1, 2, 3], [3], require(path + 'thriftshop.png')),
	new DateActivity(81, 'Time capsule', '', [1, 2, 3], [0, 8], require(path + 'timecapsule.png')),
	new DateActivity(82, 'Train Ride', 'Trains Station', [1, 2, 3], [0, 10], require(path + 'trainridetosomewhere.png')),
	new DateActivity(83, 'Trampoline Park', 'Trampoline Park', [1, 2, 3], [4, 7], require(path + 'trampolinepark.png')),
	new DateActivity(84, 'Truth or Dare', '', [1, 2, 3], [6], require(path + 'truthordare.png')),
	new DateActivity(85, 'Urban Exploring', '', [1, 2, 3], [0, 10], require(path + 'urbanexploring.png')),
	new DateActivity(86, 'Volunteering', 'Charity', [1, 2, 3], [3], require(path + 'volunteering.png')),
	new DateActivity(87, 'Waterfight', '', [1, 2, 3], [0, 6, 7], require(path + 'waterfight.png')),
	new DateActivity(88, 'Workout', 'Gym', [1, 2, 3], [7], require(path + 'workout.png')),
	new DateActivity(89, 'Write a Song', '', [1, 2, 3], [1, 8], require(path + 'writeasong.png')),
	new DateActivity(90, 'Write a Story', '', [1, 2, 3], [1, 8], require(path + 'writeastory.png')),
]
export default Dates;
