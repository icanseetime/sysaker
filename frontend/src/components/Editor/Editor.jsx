import React, { useState } from 'react'
import './Editor.css'

// Components
import ColorHeader from '../colors/ColorHeader/ColorHeader'
import Pattern from '../pattern/Pattern/Pattern'
import SideControls from '../navigation/SideControls/SideControls'
import SizeSelector from '../SizeSelector/SizeSelector'

export default function Editor() {
	const [currentColor, setCurrentColor] = useState('#ebebeb')
	const [gridSize, setGridSize] = useState({
		columns: 20,
		rows: 20
	})
	const [mode, setMode] = useState('pen')

	const handleColorChange = (color) => {
		setCurrentColor(color)
		if (color !== 'transparent') {
			setMode('pen')
		} else {
			setMode('eraser')
		}
	}

	const handleGridSizeChange = (type, newValue) => {
		setGridSize((prev) => {
			return { ...prev, [type]: newValue }
		})
	}

	return (
		<section className="Editor">
			<ColorHeader
				currentColor={currentColor}
				handleColorChange={handleColorChange}
			/>
			<SideControls mode={mode} changeMode={setMode} />
			<Pattern size={gridSize} mode={mode} color={currentColor} />
			<SizeSelector
				gridSize={gridSize}
				changeGridSize={handleGridSizeChange}
			/>
		</section>
	)
}
