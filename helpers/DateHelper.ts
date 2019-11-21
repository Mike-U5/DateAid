import Dates, {DateItem} from '../data/Dates';

export class DateHelper {

	/** Accepts user interests as input. Returns array with dates that contains
			on or more user interests
	*/
	public static getRelevantDates(userInterests: number[]): DateItem[] {
		// If user has nothing filled in, just return all possible dates
		if (userInterests.length === 0) {
			return Dates;
		}

		// Find date that matches user interest
		const potentialDates: DateItem[] = [];
		for (let d = 0; d < Dates.length; d++) {
			if (this.getIncludedInterests(Dates[d].interests, userInterests)) {
				potentialDates.push(Dates[d]);
			}
		}

		// Order the dates
		const result = this.pickRandomFromArray<DateItem>(potentialDates, 100)

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
