import React from 'react'
import './ColorSelector.css'

export default function ColorSelector({ color, changeColor }) {
	return (
		<span className="ColorSelector">
			<label htmlFor="color-selector">Velg farge</label>
			<input
				type="color"
				name="color-selector"
				id="color-selector"
				value={color}
				// TODO: fix problem where onChange fires before finished picking color
				onInput={(e) => {
					changeColor(e.target.value)
				}}
			/>
		</span>
	)
}
