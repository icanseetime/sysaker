import React, { useContext, useState } from 'react'
import './SizeSelector.css'

// Components
import NumberInput from '../inputs/NumberInput/NumberInput'
import { ThemeContext } from '../../utils/ThemeContext'

export default function SizeSelector({ gridSize, changeGridSize }) {
	const { theme } = useContext(ThemeContext)
	const [inputs, setInputs] = useState({
		columns: gridSize.columns,
		rows: gridSize.rows
	})

	const handleChange = (e) => {
		setInputs((prev) => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	return (
		<div className="SizeSelector">
			<form>
				<NumberInput
					label="Kolonner"
					name="columns"
					// value={gridSize.columns}
					value={inputs.columns}
					// onChange={changeGridSize}
					onChange={handleChange}
					max={50}
				/>
				<NumberInput
					label="Rader"
					name="rows"
					// value={gridSize.rows}
					value={inputs.rows}
					// onChange={changeGridSize}
					onChange={handleChange}
					max={50}
				/>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault()
						// Warn user about pattern being reset if grid is resized
						let result = window.confirm(
							'Advarsel! Hvis du forandrer størrelse på mønsteret, så vil alt i mønsteret fjernet. Er du sikker på at du vil gjøre dette?'
						)
						if (result) {
							changeGridSize(inputs)
						} else {
							setInputs({
								columns: gridSize.columns,
								rows: gridSize.rows
							})
						}
					}}
					style={{
						borderColor: theme.accent,
						color: theme.secondary
					}}
				>
					Endre størrelse
				</button>
			</form>
		</div>
	)
}
