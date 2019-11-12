export class DateItem {
	public readonly id: number;
	public readonly name: String;
	public readonly type: number[];
	public readonly interests: number[];

	constructor(id: number, name: String, type: number[], interests: number[]) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.interests = interests;
	}
}

const Dates: DateItem[] = [
	new DateItem(0, 'dateName', [1, 2, 3], [11]),
	new DateItem(1, 'Bowling', [1, 2, 3], [4]),
	new DateItem(2, 'Escape Room', [1, 2, 3], []),
	new DateItem(3, 'Hiking', [1, 2, 3], [4]),
	new DateItem(4, 'Zoo', [1, 2, 3], [9]),
	new DateItem(5, 'Movies', [1, 2, 3], [8]),
	new DateItem(6, 'Diner', [1, 2, 3], [10])
]
export default Dates;
