import { createContext } from 'react'

export const themes = {
	dark: {
		main: 'hsl(0, 0%, 6%)',
		secondary: 'hsl(0%, 0%, 92%)',
		accent: 'hsl(160, 100%, 20%)',
		invert: '90%'
	},
	light: {
		main: 'hsl(0, 0%, 92%)',
		secondary: 'hsl(0%, 0%, 6%)',
		accent: 'hsl(160, 100%, 32%)',
		invert: '90%'
	}
}

export const ThemeContext = createContext(themes.dark)
