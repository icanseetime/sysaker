import React, { useContext } from 'react'
import { ThemeContext } from '../../../utils/ThemeContext'

export default function Header() {
	const { theme } = useContext(ThemeContext)
	return (
		<header>
			<h1
				style={{
					color: theme.accent
				}}
			>
				Mønster
			</h1>
		</header>
	)
}
