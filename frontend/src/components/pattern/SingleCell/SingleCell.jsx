import React, { useContext } from 'react'
import './SingleCell.css'
import { ThemeContext } from '../../../utils/ThemeContext'

export default function SingleCell() {
	const { theme } = useContext(ThemeContext)
	return (
		<span
			className="SingleCell"
			style={{
				border: `1px solid ${theme.secondary}`
			}}
		></span>
	)
}
