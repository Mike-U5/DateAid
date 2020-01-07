import { ImageSourcePropType } from 'react-native';

/**
	Model
	attributes: id, name, mapName, dateType(0=first date, 1=new couple, 2=anniversary), interests, source of image
**/
export class DateActivity {
	public readonly id: number;
	public readonly name: string;
	public readonly mapName: string;
	public readonly types: readonly number[];
	public readonly interests: readonly number[];
	public readonly desc: string;
	public readonly src: ImageSourcePropType;

	constructor(id: number, name: string, mapName: string, types: number[], interests: number[], desc: string, src: ImageSourcePropType) {
		this.id = id;
		this.name = name;
		this.mapName = mapName;
		this.types = Object.freeze(types);
		this.interests = Object.freeze(interests);
		this.desc = desc;
		this.src = src;
	};
}

const path = '../assets/activities/';

/* Summary of all Date Activities */
const Dates: DateActivity[] = [
	new DateActivity(0, 'Cinema', 'Cinema', [0, 1, 2], [4], 'Plaatshouder Beschrijving', require(path + 'cinema.png')),
	new DateActivity(1, 'Bowling', 'Bowling', [0, 1, 2], [4, 7], 'Plaatshouder Beschrijving', require(path + 'bowling.png')),
	new DateActivity(2, 'Escape Room', 'Escape Room', [0, 1, 2], [0, 4, 6], 'Plaatshouder Beschrijving', require(path + 'escaperoom.png')),
	new DateActivity(3, 'Hiking', 'Hiking', [0, 1, 2], [0, 7, 9, 10], 'Plaatshouder Beschrijving', require(path + 'hiking.png')),
	new DateActivity(4, 'Zoo', 'Zoo', [0, 1, 2], [9], 'Plaatshouder Beschrijving', require(path + 'zoo.png')),
	new DateActivity(5, 'Movies', '', [0, 1, 2], [4, 8], 'Plaatshouder Beschrijving', require(path + 'movies.png')),
	new DateActivity(6, 'Dinner', 'Dinner', [0, 1, 2], [5, 7], 'Plaatshouder Beschrijving', require(path + 'dinner.png')),
	new DateActivity(7, 'Antique Shop', 'Antique Shop', [1, 2], [3], 'Plaatshouder Beschrijving', require(path + 'antiqueshop.png')),
	new DateActivity(8, 'Arcade Hall', 'Arcade Hall', [0, 1, 2], [6], 'Plaatshouder Beschrijving', require(path + 'arcadehall.png')),
	new DateActivity(9, 'Archery', 'Archery Club', [1, 2], [0, 6], 'Plaatshouder Beschrijving', require(path + 'archery.png')),
	new DateActivity(10, 'Auction', 'Auction', [1, 2], [3], 'Plaatshouder Beschrijving', require(path + 'auction.png')),
	new DateActivity(11, 'Baking', '',  [0, 1, 2], [5, 7], 'Plaatshouder Beschrijving', require(path + 'baking.png')),
	new DateActivity(12, 'Beachwalk', 'Beach', [0, 1, 2], [4, 7, 9], 'Plaatshouder Beschrijving', require(path + 'beachwalk.png')),
	new DateActivity(13, 'Boardgames', '',  [1, 2], [6, 8], 'Plaatshouder Beschrijving', require(path + 'boardgames.png')),
	new DateActivity(14, 'Boatride', 'Boatride', [0, 1, 2], [0, 9, 10], 'Plaatshouder Beschrijving', require(path + 'boatride.png')),
	new DateActivity(15, 'Break a World Record', '', [1, 2], [4, 8], 'Plaatshouder Beschrijving', require(path + 'breakaworldrecord.png')),
	new DateActivity(16, 'Brewery', 'Brewery', [0, 1, 2], [1, 4], 'Plaatshouder Beschrijving', require(path + 'brewery.png')),
	new DateActivity(17, 'Bucketlist', '',  [1, 2], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 'Plaatshouder Beschrijving', require(path + 'bucketlist.png')),
	new DateActivity(18, 'Camping', 'Camping', [1, 2], [0, 9], 'Plaatshouder Beschrijving', require(path + 'camping.png')),
	new DateActivity(19, 'Charades', '',  [0, 1, 2], [4, 7, 8], 'Plaatshouder Beschrijving', require(path + 'charades.png')),
	new DateActivity(20, 'Church', 'Church', [1, 2], [3], 'Plaatshouder Beschrijving', require(path + 'church.png')),
	new DateActivity(21, 'Cleaning up Litter', '', [1, 2], [3, 9], 'Plaatshouder Beschrijving', require(path + 'cleaninguplitter.png')),
	new DateActivity(22, 'Climbing', 'Climbing', [0, 1, 2], [0, 7], 'Plaatshouder Beschrijving', require(path + 'climbing.png')),
	new DateActivity(23, 'Comicbooks', 'Comic Store', [0, 1, 2], [1, 3], 'Plaatshouder Beschrijving', require(path + 'comicbooks.png')),
	new DateActivity(24, 'Cook Dinner', '', [0, 1, 2], [5], 'Plaatshouder Beschrijving', require(path + 'cookdinner.png')),
	new DateActivity(25, 'Couple Yoga', 'Yoga Studio', [1, 2], [7, 8], 'Plaatshouder Beschrijving', require(path + 'coupleyoga.png')),
	new DateActivity(26, 'Cycling', '', [0, 1, 2], [7, 10], 'Plaatshouder Beschrijving', require(path + 'cycling.png')),
	new DateActivity(27, 'Dance Class', 'Dance School', [0, 1, 2], [4, 7], 'Plaatshouder Beschrijving', require(path + 'danceclass.png')),
	new DateActivity(28, 'Fake Art Expert', 'Art Gallery', [1, 2], [1, 4], 'Plaatshouder Beschrijving', require(path + 'fakeartexpert.png')),
	new DateActivity(29, 'Fishing', 'Fishing Club', [0, 1, 2], [0, 9], 'Plaatshouder Beschrijving', require(path + 'fishing.png')),
	new DateActivity(30, 'Gaming Night', '', [0, 1, 2], [4, 6], 'Plaatshouder Beschrijving', require(path + 'gamingnight.png')),
	new DateActivity(31, 'Gardening', '',  [1, 2], [8, 9], 'Plaatshouder Beschrijving', require(path + 'gardening.png')),
	new DateActivity(32, 'Go to a Sportsmatch', 'Stadium', [0, 1, 2], [4, 7], 'Plaatshouder Beschrijving', require(path + 'gotoasportsmatch.png')),
	new DateActivity(33, 'Grab a Coffee', 'Coffee', [0, 1, 2], [5], 'Plaatshouder Beschrijving', require(path + 'grabacoffee.png')),
	new DateActivity(34, 'Horseback Riding', 'Horseback Riding', [1, 2], [0, 9, 10], 'Plaatshouder Beschrijving', require(path + 'horsebackriding.png')),
	new DateActivity(35, 'Hot Air Balloon Ride', 'Hot Air Balloon Flight', [1, 2], [0, 9, 10], 'Plaatshouder Beschrijving', require(path + 'hotairballoonride.png')),
	new DateActivity(36, 'Ice Cream', 'Ice Cream', [0, 1, 2], [5], 'Plaatshouder Beschrijving', require(path + 'icecream.png')),
	new DateActivity(37, 'Ice-skating', 'Ice Skating', [0, 1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'iceskating.png')),
	new DateActivity(38, 'Jogging', 'Jogging', [0, 1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'jogging.png')),
	new DateActivity(39, 'Karaoke', 'Karaoke', [0, 1, 2], [4, 6], 'Plaatshouder Beschrijving', require(path + 'karaoke.png')),
	new DateActivity(40, 'Kart Racing', 'Go-Kart', [0, 1, 2], [0, 10], 'Plaatshouder Beschrijving', require(path + 'kartracing.png')),
	new DateActivity(41, 'Kite Flying', 'Beach', [0, 1, 2], [0, 4, 9], 'Plaatshouder Beschrijving', require(path + 'kiteflying.png')),
	new DateActivity(42, 'Lasergaming', 'Lasergaming', [0, 1, 2], [0, 4, 6, 7], 'Plaatshouder Beschrijving', require(path + 'lasergaming.png')),
	new DateActivity(43, 'Listen to Music', '', [0, 1, 2], [1, 4, 8], 'Plaatshouder Beschrijving', require(path + 'listentomusic.png')),
	new DateActivity(44, 'Local Music Band', 'Live Music', [0, 1, 2], [1, 3, 4], 'Plaatshouder Beschrijving', require(path + 'localmusicband.png')),
	new DateActivity(45, 'Look at Old Photo Albums', '', [1, 2], [4, 8], 'Plaatshouder Beschrijving', require(path + 'lookatoldphotoalbums.png')),
	new DateActivity(46, 'Make a Collage', '', [1, 2], [1, 8], 'Plaatshouder Beschrijving', require(path + 'makeacollage.png')),
	new DateActivity(47, 'Market', 'Market', [0, 1, 2], [3, 5 ], 'Plaatshouder Beschrijving', require(path + 'market.png')),
	new DateActivity(48, 'Massage', 'Massage', [0, 1, 2], [2, 7], 'Plaatshouder Beschrijving', require(path + 'massage.png')),
	new DateActivity(49, 'Metal Detector', 'Nature Reserve', [1, 2], [0, 9], 'Plaatshouder Beschrijving', require(path + 'metaldetector.png')),
	new DateActivity(50, 'Midget Golf', 'Midget Golf', [0, 1, 2], [4, 6, 7], 'Plaatshouder Beschrijving', require(path + 'midgetgolf.png')),
	new DateActivity(51, 'Modeling Clay', 'Ceramics', [0, 1, 2], [1, 8], 'Plaatshouder Beschrijving', require(path + 'modelingclay.png')),
	new DateActivity(52, 'Movie Marathon', '', [1], [4, 8], 'Plaatshouder Beschrijving', require(path + 'moviemarathon.png')),
	new DateActivity(53, 'Museum', 'Museum', [0, 1, 2], [1, 4], 'Plaatshouder Beschrijving', require(path + 'museum.png')),
	new DateActivity(54, 'Musical', 'Musical', [0, 1, 2], [1, 4], 'Plaatshouder Beschrijving', require(path + 'musical.png')),
	new DateActivity(55, 'New Food Night', 'Restaurant', [1, 2], [5, 7, 8], 'Plaatshouder Beschrijving', require(path + 'newfoodnight.png')),
	new DateActivity(56, 'New Language', 'Language', [1, 2], [3, 10], 'Plaatshouder Beschrijving', require(path + 'newlanguage.png')),
	new DateActivity(57, 'New Sport', 'Sports Club', [1, 2], [3, 7], 'Plaatshouder Beschrijving', require(path + 'newsport.png')),
	new DateActivity(58, 'Painting', '', [0, 1, 2], [1, 8], 'Plaatshouder Beschrijving', require(path + 'painting.png')),
	new DateActivity(59, 'Park Walk', 'Park Walk', [0, 1, 2], [7, 9], 'Plaatshouder Beschrijving', require(path + 'parkwalk.png')),
	new DateActivity(60, 'Petting Zoo', 'Petting Zoo', [0, 1, 2], [9], 'Plaatshouder Beschrijving', require(path + 'pettingzoo.png')),
	new DateActivity(61, 'Photographing', 'Tourist Attraction', [1, 2], [0, 1, 8, 9, 10], 'Plaatshouder Beschrijving', require(path + 'photographing.png')),
	new DateActivity(62, 'Picnic', 'Park', [0, 1, 2], [5, 9], 'Plaatshouder Beschrijving', require(path + 'picnic.png')),
	new DateActivity(63, 'Pillowfort', '', [1], [8], 'Plaatshouder Beschrijving', require(path + 'pillowfort.png')),
	new DateActivity(64, 'Plan a Vacation', 'Travel Agency', [1, 2], [10], 'Plaatshouder Beschrijving', require(path + 'planavacation.png')),
	new DateActivity(65, 'Play Pool', 'Pool Centre', [0, 1, 2], [6], 'Plaatshouder Beschrijving', require(path + 'playpool.png')),
	new DateActivity(66, 'Podcast', '', [1], [4, 8], 'Plaatshouder Beschrijving', require(path + 'podcast.png')),
	new DateActivity(67, 'Power Outage', '', [1, 2], [0, 8], 'Plaatshouder Beschrijving', require(path + 'poweroutage.png')),
	new DateActivity(68, 'Roast Marshmallows', '', [1, 2], [3, 5, 9, 10], 'Plaatshouder Beschrijving', require(path + 'roastmarshmallows.png')),
	new DateActivity(69, 'Roller-Skating', 'Roller Skating', [0, 1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'roller-skating.png')),
	new DateActivity(70, 'Scavenger Hunt', '', [2], [0, 3, 9], 'Plaatshouder Beschrijving', require(path + 'scavengerhunt.png')),
	new DateActivity(71, 'shopping', 'Shopping', [1, 2], [2], 'Plaatshouder Beschrijving', require(path + 'shopping.png')),
	new DateActivity(72, 'Skip Rocks', 'Lake', [1, 2], [9], 'Plaatshouder Beschrijving', require(path + 'skiprocks.png')),
	new DateActivity(73, 'spa', 'Wellness', [1, 2], [2], 'Plaatshouder Beschrijving', require(path + 'spa.png')),
	new DateActivity(74, 'Stargazing', '', [0, 1, 2], [0, 9], 'Plaatshouder Beschrijving', require(path + 'stargazing.png')),
	new DateActivity(75, 'Street Fair', 'Mart', [1, 2], [3], 'Plaatshouder Beschrijving', require(path + 'streetfair.png')),
	new DateActivity(76, 'Sunset', 'Sunset spot', [0, 1, 2], [9], 'Plaatshouder Beschrijving', require(path + 'sunsetl.png')),
	new DateActivity(77, 'Swimming', 'Swimming', [1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'swimming.png')),
	new DateActivity(78, 'Tai chi', 'Tai chi', [1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'taichi.png')),
	new DateActivity(79, 'Themepark', 'Themepark', [0, 1, 2], [0, 4], 'Plaatshouder Beschrijving', require(path + 'themepark.png')),
	new DateActivity(80, 'Thriftshop', 'Thriftshop', [1, 2], [3], 'Plaatshouder Beschrijving', require(path + 'thriftshop.png')),
	new DateActivity(81, 'Time capsule', '', [2], [0, 8], 'Plaatshouder Beschrijving', require(path + 'timecapsule.png')),
	new DateActivity(82, 'Train Ride', 'Trains Station', [1, 2], [0, 10], 'Plaatshouder Beschrijving', require(path + 'trainridetosomewhere.png')),
	new DateActivity(83, 'Trampoline Park', 'Trampoline Park', [1, 2], [4, 7], 'Plaatshouder Beschrijving', require(path + 'trampolinepark.png')),
	new DateActivity(84, 'Truth or Dare', '', [0, 1, 2], [6], 'Plaatshouder Beschrijving', require(path + 'truthordare.png')),
	new DateActivity(85, 'Urban Exploring', '', [0, 1, 2], [0, 10], 'Plaatshouder Beschrijving', require(path + 'urbanexploring.png')),
	new DateActivity(86, 'Volunteering', 'Charity', [2], [3], 'Plaatshouder Beschrijving', require(path + 'volunteering.png')),
	new DateActivity(87, 'Waterfight', '', [1], [0, 6, 7], 'Plaatshouder Beschrijving', require(path + 'waterfight.png')),
	new DateActivity(88, 'Workout', 'Gym', [1, 2], [7], 'Plaatshouder Beschrijving', require(path + 'workout.png')),
	new DateActivity(89, 'Write a Song', '', [1, 2], [1, 8], 'Plaatshouder Beschrijving', require(path + 'writeasong.png')),
	new DateActivity(90, 'Write a Story', '', [1, 2], [1, 8], 'Plaatshouder Beschrijving', require(path + 'writeastory.png')),
]
export default Dates;
