import React, { useState } from 'react'

// Components
import ColorHeader from '../colors/ColorHeader/ColorHeader'
import SizeSelector from '../SizeSelector/SizeSelector'

export default function Editor() {
	const [gridSize, setGridSize] = useState({
		columns: 20,
		rows: 20
	})

	const handleGridSizeChange = (type, newValue) => {
		setGridSize((prev) => {
			return { ...prev, [type]: newValue }
		})
	}

	return (
		<section>
			<ColorHeader />
			{/* SideControls */}
			{/* Grid */}
			<SizeSelector
				gridSize={gridSize}
				changeGridSize={handleGridSizeChange}
			/>
		</section>
	)
}
