import React, {createContext,useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
	const [theme, setTheme] = useState('Light');

	const toggleTheme = () => {
		theme === 'Light' ? setTheme('Dark') : setTheme('Light');  
	}

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	);
}