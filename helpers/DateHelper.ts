import dates, {DateActivity} from '../data/DateActivities';

export class DateHelper {

	/** Accepts user interests as input. Returns array with dates that contains
			on or more user interests
	*/
	public static getRelevantDates(userInterests: number[]): DateActivity[] {
		// If user has nothing filled in, just return all possible dates
		if (userInterests.length === 0) {
			return dates;
		}

		// Find date that matches user interest
		const unusedDates = [];
		const potentialDates: DateActivity[] = [];
		for (let i = 0; i < dates.length; i++) {
			if (this.getIncludedInterests(dates[i].interests, userInterests)) {
				potentialDates.push(dates[i]);
			} else {
				unusedDates.push(dates[i]);
			}
		}

		// -42 is a magic number. It implies that the user wants a random unused date.
		if (userInterests.includes(-42)) {
			potentialDates.push(...this.pickRandomFromArray(unusedDates, 3));
		}

		// Order the dates
		const result = this.pickRandomFromArray<DateActivity>(potentialDates, 100);

		return result;
	}

	private static getIncludedInterests(dateInterests: readonly number[], interests: number[]): boolean {
		for (let i = 0; i < interests.length; i++) {
			if (dateInterests.includes(interests[i])) {
				return true;
			}
		}
		return false;
	}

	private static pickRandomFromArray<T>(arr: T[], amount: number): T[] {
		const result: T[] = [];

		for (let i = 0; i < amount; i++) {
			// Stop if the array is empty
			if (arr.length <= 0) {
				break;
			}
			// Grab a random index from the array
			const rnd = Math.floor(Math.random() * arr.length);
			result.push(arr.splice(rnd, 1)[0]);
		}

		return result;
	}
}
