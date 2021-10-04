import React, { useContext } from 'react'
import './ColorSelector.css'
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
				onInput={(e) => {
					changeColor(e.target.value)
				}}
				style={{
					backgroundColor: theme.secondary
				}}
			/>
		</span>
	)
}
