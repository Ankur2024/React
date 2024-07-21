import { createContext, useContext } from "react";
   

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

/**
 * Provides the ThemeContext.Provider component, which can be used to wrap components
 * that need access to the theme context.
 */
export const ThemeProvider = ThemeContext.Provider

/**
 * A custom React hook that provides access to the theme context.
 * @returns {Object} An object containing the current theme mode and functions to switch between light and dark themes.
 */
export default function useTheme(){
    return useContext(ThemeContext);
}