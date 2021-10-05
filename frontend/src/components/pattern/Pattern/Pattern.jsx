import React from 'react'
import './Pattern.css'

// Components
import SingleCell from '../SingleCell/SingleCell'

export default function Pattern({ size, mode, color }) {
	return (
		<div
			className="Pattern"
			style={{
				gridTemplateColumns: `repeat(${size.columns}, 1fr)`,
				gridTemplateRows: `repeat(${size.rows}, 1fr)`
			}}
		>
			{Array(size.columns * size.rows).fill(
				<SingleCell mode={mode} color={color} />
			)}
		</div>
	)
}
