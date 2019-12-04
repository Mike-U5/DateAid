// The exported class
export class Theme {
	private static theme: DefaultTheme;

	private constructor() {}

	public static reload() {
		this.theme = new DefaultTheme();
	}

	public static get(): Theme {
		if (!this.theme) {
			this.reload();
			return new DefaultTheme();
		}

		return this.theme;
	}

}

enum Color {
	YourPink = '#FFC0C0',
	Bittersweet = '#FF6060',
	Red = '#FF0707',
	OldBrick = '#991D1D',
	MineShaft = '#333333',
	SeaPink = '#f09090',
	Black = '#000000',
	White = '#FFFFFF',
	Transparent = 'rgba(0, 0, 0, 0)'
}

// This is the default theme. Other themes should extend this!
class DefaultTheme {
	public readonly black = Color.Black;
	public readonly white = Color.White;
	public readonly transparent = Color.Transparent;
}
