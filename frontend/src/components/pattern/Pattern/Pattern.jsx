import React, { useEffect, useState } from 'react'
import './Pattern.css'

// Components
import SingleCell from '../SingleCell/SingleCell'

export default function Pattern({ size, mode, color }) {
	const [pattern, setPattern] = useState(
		Array(size.columns * size.rows).fill()
	)

	useEffect(() => {
		setPattern(Array(size.columns * size.rows).fill())
	}, [setPattern, size])

	return (
		<div
			className="Pattern"
			style={{
				gridTemplateColumns: `repeat(${size.columns}, 1fr)`,
				gridTemplateRows: `repeat(${size.rows}, 1fr)`
			}}
		>
			{pattern.map((_cell, i) => {
				return <SingleCell mode={mode} color={color} key={i} />
			})}
		</div>
	)
}
