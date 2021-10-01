import React from 'react'
import './SizeSelector.css'

// Components
import NumberInput from '../inputs/NumberInput/NumberInput'

export default function SizeSelector({ gridSize, changeGridSize }) {
	return (
		<div className="SizeSelector">
			<NumberInput
				label="Kolonner"
				name="columns"
				value={gridSize.columns}
				onChange={changeGridSize}
			/>
			<NumberInput
				label="Rader"
				name="rows"
				value={gridSize.rows}
				onChange={changeGridSize}
			/>
		</div>
	)
}
