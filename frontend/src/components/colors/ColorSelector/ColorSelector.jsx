import React, { useContext, useState } from 'react'
import './ColorSelector.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'

export default function ColorSelector({ color, changeColor }) {
	const { theme } = useContext(ThemeContext)
	const [newColor, setNewColor] = useState(color)

	return (
		<span
			className="ColorSelector"
			onBlur={() => {
				changeColor(newColor)
			}}
		>
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
				onChange={(e) => {
					setNewColor(e.target.value)
				}}
				style={{
					backgroundColor: theme.secondary
				}}
			/>
		</span>
	)
}
