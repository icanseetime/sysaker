import React from 'react'
import './Pattern.css'

// Components
import SingleCell from '../SingleCell/SingleCell'

export default function Pattern({ pattern, dispatch, size, mode, color }) {
	return (
		<div
			className="Pattern"
			style={{
				gridTemplateColumns: `repeat(${size.columns}, 1fr)`,
				gridTemplateRows: `repeat(${size.rows}, 1fr)`
			}}
		>
			{pattern.map((cell) => {
				return (
					<SingleCell
						mode={mode}
						color={color}
						key={cell.id}
						// id={cell.id}
						cell={cell}
						dispatch={dispatch}
					/>
				)
			})}
		</div>
	)
}
