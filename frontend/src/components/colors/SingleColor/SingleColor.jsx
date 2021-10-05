import React, { useContext } from 'react'
import './SingleColor.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'

export default function SingleColor({ color, changeColor }) {
	const { theme } = useContext(ThemeContext)
	return (
		<span
			className="SingleColor"
			style={{
				backgroundColor: color,
				border: `2px solid ${theme.secondary}`
			}}
			onClick={(e) => {
				changeColor(color)
			}}
		></span>
	)
}
