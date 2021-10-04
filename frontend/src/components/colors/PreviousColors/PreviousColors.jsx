import React, { useContext } from 'react'
import './PreviousColors.css'
import { ThemeContext } from '../../../utils/ThemeContext'

// Components
import SingleColor from '../SingleColor/SingleColor'

export default function PreviousColors({ previousColors, dispatch }) {
	const { theme } = useContext(ThemeContext)
	return (
		<div className="PreviousColors">
			<span
				style={{
					color: theme.secondary
				}}
			>
				Brukte farger
			</span>
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
