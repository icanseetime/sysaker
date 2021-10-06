import React, { useState, useReducer } from 'react'
import './Editor.css'

// Components
import ColorHeader from '../colors/ColorHeader/ColorHeader'
import Pattern from '../pattern/Pattern/Pattern'
import SideControls from '../navigation/SideControls/SideControls'
import SizeSelector from '../SizeSelector/SizeSelector'

// Reducer
export const ACTIONS = {
	ADD_ID: 'add-id',
	UPDATE_COLOR: 'update-color',
	TOGGLE_PEARL: 'toggle-pearl',
	UPDATE_PEARL_COLOR: 'update-pearl-color',
	CLEAR_CELL: 'clear-cell',
	CLEAR_PATTERN: 'clear-pattern',
	CHANGE_GRID_SIZE: 'change-grid-size'
}

const reducer = (fullPattern, action) => {
	switch (action.type) {
		case ACTIONS.UPDATE_COLOR:
			return fullPattern.map((cell) => {
				if (cell.id === action.payload.id) {
					return { ...cell, color: action.payload.color }
				}
				return cell
			})
		case ACTIONS.TOGGLE_PEARL:
			return fullPattern.map((cell) => {
				if (cell.id === action.payload.id) {
					return { ...cell, pearl: !cell.pearl }
				}
				return cell
			})
		case ACTIONS.UPDATE_PEARL_COLOR:
			return fullPattern.map((cell) => {
				if (cell.id === action.payload.id) {
					return { ...cell, pearlColor: action.payload.pearlColor }
				}
				return cell
			})
		case ACTIONS.CLEAR_CELL:
			return fullPattern.map((cell) => {
				if (cell.id === action.payload.id) {
					return {
						...cell,
						color: 'transparent',
						pearl: false,
						pearlColor: ''
					}
				}
				return cell
			})
		case ACTIONS.CLEAR_PATTERN:
			return fullPattern.map((cell) => {
				return {
					...cell,
					color: 'transparent',
					pearl: false,
					pearlColor: ''
				}
			})
		case ACTIONS.CHANGE_GRID_SIZE:
			return Array(action.payload.columns * action.payload.rows)
				.fill()
				.map((item, idx) => {
					if (item === undefined) {
						return {
							id: idx,
							color: 'transparent',
							pearl: false,
							pearlColor: ''
						}
					}
					return item
				})
		default:
			throw new Error()
	}
}

export default function Editor() {
	const [gridSize, setGridSize] = useState({
		columns: 20,
		rows: 20
	})
	const [pattern, dispatch] = useReducer(
		reducer,
		Array(gridSize.columns * gridSize.rows)
			.fill()
			.map((item, idx) => {
				if (item === undefined) {
					return {
						id: idx,
						color: 'transparent',
						pearl: false,
						pearlColor: ''
					}
				}
				return item
			})
	)
	const [mode, setMode] = useState('pen')
	const [currentColor, setCurrentColor] = useState('#ebebeb')

	const handleColorChange = (color) => {
		setCurrentColor(color)
		if (color !== 'transparent') {
			setMode('pen')
		} else {
			setMode('eraser')
		}
	}

	// const handleGridSizeChange = (type, newValue) => {
	// 	setGridSize((prev) => {
	// 		return { ...prev, [type]: newValue }
	// 	})
	// }

	const handleGridSizeChange = ({ columns, rows }) => {
		setGridSize({
			columns,
			rows
		})
		dispatch({
			type: ACTIONS.CHANGE_GRID_SIZE,
			payload: {
				columns,
				rows
			}
		})
	}

	return (
		<section className="Editor">
			<ColorHeader
				currentColor={currentColor}
				handleColorChange={handleColorChange}
			/>
			<SideControls
				mode={mode}
				changeMode={setMode}
				dispatch={dispatch}
			/>
			<Pattern
				pattern={pattern}
				dispatch={dispatch}
				size={gridSize}
				mode={mode}
				color={currentColor}
			/>
			<SizeSelector
				gridSize={gridSize}
				changeGridSize={handleGridSizeChange}
			/>
		</section>
	)
}
