import React, { useState, useReducer } from 'react'
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
			console.log(action.payload.color, prevColors[0].color)
			if (action.payload.color !== prevColors[0].color) {
				prevColors = prevColors.slice(0, 9)
				return [newColor(action.payload.color), ...prevColors]
			} else {
				return prevColors
			}
		default:
			throw new Error()
	}
}

const newColor = (color) => {
	return { id: Date.now(), color: color }
}

export default function ColorHeader() {
	const [currentColor, setCurrentColor] = useState('#ebebeb')
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

	const handleColorChange = (color) => {
		dispatch({
			type: ACTIONS.ADD_COLOR,
			payload: { color: color }
		})
		setCurrentColor(color)
	}

	return (
		<div className="ColorHeader">
			<ColorSelector
				color={currentColor}
				changeColor={handleColorChange}
			/>
			<PreviousColors previousColors={prevColors} dispatch={dispatch} />
		</div>
	)
}
