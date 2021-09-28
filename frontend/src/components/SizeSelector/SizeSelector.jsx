import React from 'react'

// Components
import NumberInput from '../inputs/NumberInput/NumberInput'

export default function SizeSelector({ gridSize, changeGridSize }) {
	return (
		<div>
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
