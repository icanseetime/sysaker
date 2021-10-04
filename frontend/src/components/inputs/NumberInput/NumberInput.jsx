import React, { useContext } from 'react'
import './NumberInput.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'

export default function NumberInput({
	label,
	name,
	value,
	onChange,
	min,
	max
}) {
	const { theme } = useContext(ThemeContext)
	return (
		<span className="NumberInput">
			<label
				htmlFor={name}
				style={{
					color: theme.secondary
				}}
			>
				{label}
			</label>
			<input
				type="number"
				name={name}
				onChange={(e) => onChange(name, e.target.value)}
				value={value}
				min={min || 0}
				max={max}
			/>
		</span>
	)
}
