import React from 'react'

export default function NumberInput({ label, name, value, onChange }) {
	return (
		<span>
			<label htmlFor={name}>{label}</label>
			<input
				type="number"
				name={name}
				onChange={(e) => onChange(name, e.target.value)}
				value={value}
			/>
		</span>
	)
}
