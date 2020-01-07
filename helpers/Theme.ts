import { CommonStorage } from './CommonStorage';

/* The exported class */
export class Theme {
	private static theme: DefaultTheme;

	private constructor() {}

	/* Change the current theme */
	public static setTheme(id: number) {
		const themeList = this.getThemeList();
		this.theme = (id < 0 || id >= themeList.length) ? new DefaultTheme() : themeList[id];
		CommonStorage.themeId.set(id);
	}

/* returns the different selectable themes */
	public static getThemeList() {
		return [
			new DefaultTheme(),
			new EiffelTheme(),
			new DangerTheme(),
			new MoistTheme()
		];
	}

/* Return the default theme if none are available */
	private static get(): DefaultTheme {
		if (!this.theme) {
			return new DefaultTheme();
		}
		return this.theme;
	}

/* method used to get the White theme color */
	public static getWhite(): Color {
		return this.get().white;
	}

/* method used to get the Black theme color */
	public static getBlack(): Color {
		return this.get().black;
	}

/* method used to get the Transparent theme */
	public static getTransparent(): Color {
		return Color.Transparent;
	}

	/* method used to get the navbar color */
	public static getNavbarColor(): Color {
		return this.get().navbarColor;
	}

	public static getTextColor(): Color {
		return this.get().black;
	}

}

/* the actual Enumeration with the color values */
enum Color {
	YourPink = '#FFC0C0',			// Pink
	Bittersweet = '#FF6060',	// Pink
	Red = '#FF0707',
	OldBrick = '#991D1D',
	Mineshaft = '#333333',
	SeaPink = '#f09090',
	Black = '#000000',
	White = '#FFFFFF',
	Sapphire = '#0F52BA',			// Blue
	Transparent = 'rgba(0, 0, 0, 0)'
}

/* This is the default theme. Other themes should extend this! */
class DefaultTheme {
	public themeName = 'Default';
	public black = Color.Black;
	public white = Color.White;
	public navbarColor = Color.SeaPink;
}

/* Eiffel theme that extends the Default Theme */
class EiffelTheme extends DefaultTheme {
	public themeName = 'Eiffel';
	public navbarColor = Color.Sapphire;
}

/* Danger theme theme that extends the Default Theme */
class DangerTheme extends DefaultTheme {
	public themeName = 'Danger';
	public navbarColor = Color.OldBrick;
}

/* Moist theme that extends the Default Theme */
class MoistTheme extends DefaultTheme {
	public themeName = 'Moist';
	public navbarColor = Color.Mineshaft;
}
