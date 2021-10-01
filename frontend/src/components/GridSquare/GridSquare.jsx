import React, { useContext } from 'react'
import './GridSquare.css'
import { ThemeContext } from '../../utils/ThemeContext'

export default function GridSquare() {
	const { theme } = useContext(ThemeContext)
	return (
		<span
			className="GridSquare"
			style={{
				border: `1px solid ${theme.secondary}`
			}}
		></span>
	)
}
