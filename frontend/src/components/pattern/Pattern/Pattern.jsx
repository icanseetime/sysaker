import React from 'react'
import './Pattern.css'

// Components
import SingleCell from '../pattern/SingleCell/SingleCell'

export default function Pattern({ size }) {
	return (
		<div
			className="Pattern"
			style={{
				gridTemplateColumns: `repeat(${size.columns}, auto)`
			}}
		>
			{Array(size.columns * size.rows).fill(<SingleCell />)}
		</div>
	)
}
