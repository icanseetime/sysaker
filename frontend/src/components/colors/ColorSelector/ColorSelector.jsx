import React, { useContext } from 'react'
import './ColorSelector.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'

export default function ColorSelector({ color, changeColor }) {
	const { theme } = useContext(ThemeContext)

	return (
		<span className="ColorSelector">
			<label
				htmlFor="color-selector"
				style={{
					color: theme.secondary
				}}
			>
				Velg farge
			</label>
			<input
				type="color"
				name="color-selector"
				id="color-selector"
				value={color}
				// TODO: fix problem where onChange fires before finished picking color
				// Suggested fix: when clicking a cell in the grid, check if color was previously saved - if not, save it!
				onChange={(e) => {
					changeColor(e.target.value)
				}}
				style={{
					backgroundColor: theme.secondary
				}}
			/>
		</span>
	)
}
