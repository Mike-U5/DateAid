export class Icebreaker {
	constructor(public readonly category: number,	public readonly text: string	) {

	};
}

/* Categories that are used to differentiate the Icebreakers. */
export enum IcebreakerCategory {All, Family, Interests, Taste, Partner, Career, Past }

/* ALl icebreakers in a constant */
const Icebreakers: Icebreaker[] = [
	new Icebreaker(IcebreakerCategory.Taste, 'Are you a cat or a dog person? ', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Did you go to any concerts lately, if yes, which one? ', ),
	new Icebreaker(IcebreakerCategory.Family, 'What if you got free from work/school tomorrow, what would you do? ', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Who is your role model? ', ),
	new Icebreaker(IcebreakerCategory.Family, 'What do you love the most? ', ),
	new Icebreaker(IcebreakerCategory.Taste, 'What is the best vacation you ever took? ', ),
	new Icebreaker(IcebreakerCategory.Taste, 'What is the most inspirational thing you read lately? ', ),
	new Icebreaker(IcebreakerCategory.Partner, 'Ask him/her about something she is wearing. ', ),
	new Icebreaker(IcebreakerCategory.Partner, 'Ask him/her what is on his/her bucketlist. ', ),
	new Icebreaker(IcebreakerCategory.Partner, 'Ask him/her for 2 truths and one lie! ', ),
	new Icebreaker(IcebreakerCategory.Family, 'How many siblings do you have? ', ),
	new Icebreaker(IcebreakerCategory.Past, 'Where did you grow up? ', ),
	new Icebreaker(IcebreakerCategory.Past, 'What were some of your favorite things growing up?', ),
	new Icebreaker(IcebreakerCategory.Partner, 'What’s your favorite childhood memory and why?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Did you have any pets when you were little? What were their names and what was it like to have them?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What’s the scariest thing you ever encountered as a kid?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What school did you go to?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Do you have any childhood friends that ended up being lifelong friends? Who were they and what are they like?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What were your parents like when you were growing up?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What was your family’s favorite thing to do on weekends? ', ),
	new Icebreaker(IcebreakerCategory.Career, 'Where do you work and how long have you been working with them?', ),
	new Icebreaker(IcebreakerCategory.Career, 'Can you describe your usual work day?', ),
	new Icebreaker(IcebreakerCategory.Career, 'If there’s one thing you can change about the nature of your job, what would it be and why?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What’s your favorite thing about the work that you do?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Are you the early bird or are you typically the last one in?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What do you like about your boss? What do you dislike about them?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What do you like to do for fun after a busy work day?', ),
	new Icebreaker(IcebreakerCategory.Career, 'Who are your work friends? What do you like about them?', ),
	new Icebreaker(IcebreakerCategory.Career, 'If you could have things your way, where would you be in terms of your job 10 years from now?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'If you could have an entire day to yourself, what would you do?', ),
	new Icebreaker(IcebreakerCategory.Family, 'If you could take the whole month off, how would you spend your time?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What do you like to do for fun?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What are the weekends like for you?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Are there any advocacies or groups that you’re a part of? What are they?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What’s one thing you wish you could spend more time doing?', ),
	new Icebreaker(IcebreakerCategory.Family, 'If you could take up a new hobby, what would it be and why?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'What one talent do you wish you could have?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'If you could become a master of something, what would that something be and why?', ),
	new Icebreaker(IcebreakerCategory.Career, 'Where do you see yourself living 10 years from now?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Do you think you’d be the kind of person who would be happy to settle down or is that something that doesn’t fully appeal to you?', ),
	new Icebreaker(IcebreakerCategory.Family, 'How do you envision yourself spending your senior years?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Kids – yes or no? How many children do you think you’d want to have when you’re ready?', ),
	new Icebreaker(IcebreakerCategory.Family, 'A one-month cruise to a tropical destination or a long vacation in the Alps?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'Coffee or tea?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'Breakfast or dinner?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Read a book indoors or spend aa night out with friends?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'Wine and dine or Netflix and chill?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'Comfy casual or fashionable and formal?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'Dress shoes or comfy sneakers?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Sports or lounging?', ),
	new Icebreaker(IcebreakerCategory.Family, 'A trip to the gym or a trip to a new restaurant?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Japanese food or Italian?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Morning or night?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Cats or dogs?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Rain or sun?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Go on a hike or go bar hopping?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Outdoors or indoors?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Movies or TV shows?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What’s one vacation trip that you’ll never forget? What was it about the experience that makes it unforgettable?', ),
	new Icebreaker(IcebreakerCategory.Career, 'When’s the last time you did something for the first time? What was it and how did you feel about it?', ),
	new Icebreaker(IcebreakerCategory.Family, 'When you’re feeling shy and uncertain, what do you usually do?', ),
	new Icebreaker(IcebreakerCategory.Family, 'How did you meet your best friend and why do you think your relationship has worked out so well?', ),
	new Icebreaker(IcebreakerCategory.Family, 'Did you ever have to cut someone out of your life? What happened, if you don’t mind sharing?', ),
	new Icebreaker(IcebreakerCategory.Career, 'If you could live anywhere in the world, where would you move and why?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What are you looking for in a partner? Do you have any clue as to why your previous relationships didn’t work out?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What’s the most expensive thing you’ve ever bought for yourself?', ),
	new Icebreaker(IcebreakerCategory.Career, 'What’s one piece of important advice that you think everyone should know?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'What’s your favorite place in the whole world and why?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'Describe your perfect day.', ),
	new Icebreaker(IcebreakerCategory.Career, 'What accomplishments are you really proud of?', ),
	new Icebreaker(IcebreakerCategory.Family, 'If you had all the money in the world, what would be the first three things you’d buy and why?', ),
	new Icebreaker(IcebreakerCategory.Family, 'If you won the lottery, name 10 things you would spend your new funds on.', ),
	new Icebreaker(IcebreakerCategory.Partner, 'What’s the worst experience you’ve ever had on a date?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What is your go-to movie or TV show if you just can’t find anything else that you’d like to watch?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'What are some of the little things that make you smile or that brighten your day?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'If you could tell your 10 year old self one thing, what would it be and why?', ),
	new Icebreaker(IcebreakerCategory.Taste, 'What kind of music do you like to listen to?', ),
	new Icebreaker(IcebreakerCategory.Family, 'What’s your favorite memory of your childhood?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'What do you like to do over the holidays?', ),
	new Icebreaker(IcebreakerCategory.Interests, 'What do you think the world will look like 50 years from now?', ),
];
export default Icebreakers;
