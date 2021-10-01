import React, { useState } from 'react'

// Components
import ColorHeader from '../colors/ColorHeader/ColorHeader'
import SideControls from '../navigation/SideControls/SideControls'
import SizeSelector from '../SizeSelector/SizeSelector'

export default function Editor() {
	const [gridSize, setGridSize] = useState({
		columns: 20,
		rows: 20
	})
	const [mode, setMode] = useState('pen')

	const handleGridSizeChange = (type, newValue) => {
		setGridSize((prev) => {
			return { ...prev, [type]: newValue }
		})
	}

	return (
		<section>
			<ColorHeader />
			<SideControls mode={mode} changeMode={setMode} />
			{/* Grid */}
			<SizeSelector
				gridSize={gridSize}
				changeGridSize={handleGridSizeChange}
			/>
		</section>
	)
}
