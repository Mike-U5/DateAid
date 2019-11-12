import Dates, {DateItem} from '../data/Dates';

export class DateHelper {

	/** Accepts user interests as input. Returns array with dates that contains
			on or more user interests
	*/
	public static getRelevantDates(userInterests: number[]) {
		const potentialDates: DateItem[] = [];
		for (let d = 0; d < Dates.length; d++) {
			if (this.getIncludedInterests(Dates[d].interests, userInterests)) {
				potentialDates.push(Dates[d]);
			}
		}
	}

	private static getIncludedInterests(dateInterests: number[], interests: number[]): boolean {
		for (let i = 0; i < interests.length; i++) {
			if (dateInterests.includes(interests[i])) {
				return true;
			}
		}
		return false;
	}
}
