import React, { useReducer } from 'react'
import './ColorHeader.css'

// Components
import ColorSelector from '../ColorSelector/ColorSelector'
import PreviousColors from '../PreviousColors/PreviousColors'

// Reducer & utils
export const ACTIONS = {
	ADD_COLOR: 'add-color'
}

const reducer = (prevColors, action) => {
	switch (action.type) {
		case ACTIONS.ADD_COLOR:
			// Check if color already exists in previously used colors
			if (
				!prevColors.filter((o) => o.color === action.payload.color)
					.length > 0
			) {
				// Add color to previously used color
				prevColors = prevColors.slice(0, 9)
				return [newColor(action.payload.color), ...prevColors]
			} else {
				// Return without new color
				return prevColors
			}
		default:
			throw new Error()
	}
}

const newColor = (color) => {
	return { id: Date.now(), color: color }
}

export default function ColorHeader({ currentColor, handleColorChange }) {
	const [prevColors, dispatch] = useReducer(reducer, [
		{ id: 0, color: 'transparent' },
		{ id: 1, color: 'transparent' },
		{ id: 2, color: 'transparent' },
		{ id: 3, color: 'transparent' },
		{ id: 4, color: 'transparent' },
		{ id: 5, color: 'transparent' },
		{ id: 6, color: 'transparent' },
		{ id: 7, color: 'transparent' },
		{ id: 8, color: 'transparent' },
		{ id: 9, color: 'transparent' }
	])

	const changeColor = (color) => {
		dispatch({
			type: ACTIONS.ADD_COLOR,
			payload: { color: color }
		})
		handleColorChange(color)
	}

	return (
		<div className="ColorHeader">
			<ColorSelector color={currentColor} changeColor={changeColor} />
			<PreviousColors
				previousColors={prevColors}
				changeColor={changeColor}
			/>
		</div>
	)
}
