export const base = {};

export interface ITheme {
  theme: string;
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  inverseOnSurface: string;
  inverseSurface: string;
  inversePrimary: string;
  shadow: string;
  surfaceTint: string;
  outlineVariant: string;
  scrim: string;
}

export const light: ITheme = {
  theme: "light",
  primary: "#006783",
  onPrimary: "#ffffff",
  primaryContainer: "#bce9ff",
  onPrimaryContainer: "#001f29",
  secondary: "#006d3f",
  onSecondary: "#ffffff",
  secondaryContainer: "#95f7b8",
  onSecondaryContainer: "#00210f",
  tertiary: "#984064",
  onTertiary: "#ffffff",
  tertiaryContainer: "#ffd9e3",
  onTertiaryContainer: "#3e001f",
  error: "#ba1a1a",
  onError: "#ffffff",
  errorContainer: "#ffdad6",
  onErrorContainer: "#410002",
  background: "#fbfcfe",
  onBackground: "#191c1e",
  surface: "#fbfcfe",
  onSurface: "#191c1e",
  surfaceVariant: "#dce4e9",
  onSurfaceVariant: "#40484c",
  outline: "#70787d",
  inverseOnSurface: "#eff1f3",
  inverseSurface: "#2e3132",
  inversePrimary: "#61d4ff",
  shadow: "#000000",
  surfaceTint: "#006783",
  outlineVariant: "#c0c8cc",
  scrim: "#000000",
};

export const dark: ITheme = {
  theme: "dark",
  primary: "#61d4ff",
  onPrimary: "#003545",
  primaryContainer: "#004d63",
  onPrimaryContainer: "#bce9ff",
  secondary: "#7ada9e",
  onSecondary: "#00391e",
  secondaryContainer: "#00522e",
  onSecondaryContainer: "#95f7b8",
  tertiary: "#ffb0ca",
  onTertiary: "#5d1135",
  tertiaryContainer: "#7a294c",
  onTertiaryContainer: "#ffd9e3",
  error: "#ffb4ab",
  onError: "#690005",
  errorContainer: "#93000a",
  onErrorContainer: "#ffdad6",
  background: "#191c1e",
  onBackground: "#e1e2e4",
  surface: "#191c1e",
  onSurface: "#e1e2e4",
  surfaceVariant: "#40484c",
  onSurfaceVariant: "#c0c8cc",
  outline: "#8a9296",
  inverseOnSurface: "#191c1e",
  inverseSurface: "#e1e2e4",
  inversePrimary: "#006783",
  shadow: "#000000",
  surfaceTint: "#61d4ff",
  outlineVariant: "#40484c",
  scrim: "#000000",
};

interface Size {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const size: Size = {
  xs: "400px", // for small screen mobile
  sm: "600px", // for mobile screen
  md: "900px", // for tablets
  lg: "1280px", // for laptops
  xl: "1440px", // for desktop / monitors
  xxl: "1920px", // for big screens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
