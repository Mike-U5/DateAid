// The exported class
export class Theme {
	private static theme: DefaultTheme;

	private constructor() {}

	public static setTheme(id: number) {
		const themeList = [
			new DefaultTheme(),
			new EiffelTheme()
		]

		this.theme = (id < 0 || id >= themeList.length) ? new DefaultTheme() : themeList[id];
	}

	public static get(): DefaultTheme {
		if (!this.theme) {
			return new DefaultTheme();
		}

		return this.theme;
	}

}

enum Color {
	YourPink = '#FFC0C0',			// Pink
	Bittersweet = '#FF6060',	// Pink
	Red = '#FF0707',
	OldBrick = '#991D1D',
	MineShaft = '#333333',
	SeaPink = '#f09090',
	Black = '#000000',
	White = '#FFFFFF',
	Sapphire = '#0F52BA',
	Transparent = 'rgba(0, 0, 0, 0)'
}

// This is the default theme. Other themes should extend this!
class DefaultTheme {
	public black = Color.Black;
	public white = Color.White;
	public navbarColor = Color.SeaPink;
	public readonly transparent = Color.Transparent;
}

// Below are all theme variations
class EiffelTheme extends DefaultTheme {
	public navbarColor = Color.Sapphire;
}
