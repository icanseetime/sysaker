import React, { useContext } from 'react'
import { ThemeContext } from '../../../utils/ThemeContext'

export default function NumberInput({ label, name, value, onChange }) {
	const { theme } = useContext(ThemeContext)
	return (
		<span>
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
			/>
		</span>
	)
}
