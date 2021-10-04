import React from 'react'
import './PreviousColors.css'

// Components
import SingleColor from '../SingleColor/SingleColor'

export default function PreviousColors({ previousColors, dispatch }) {
	return (
		<div className="PreviousColors">
			<span>Brukte farger</span>
			{previousColors.map(({ id, color }) => {
				return (
					<SingleColor
						key={id}
						color={color}
						changeColor={dispatch}
					/>
				)
			})}
		</div>
	)
}
