import React, { useContext, useEffect } from 'react'
import './SingleCell.css'

// Utils
import { ThemeContext } from '../../../utils/ThemeContext'
import { ACTIONS } from '../../Editor/Editor'
import {
	convertHexToRGB,
	calculateColorBrightness
} from '../../../utils/colorCalculations'

export default function SingleCell({ mode, color, cell, dispatch }) {
	const { theme } = useContext(ThemeContext)

	useEffect(() => {
		if (cell.color !== 'transparent') {
			const rgb = convertHexToRGB(cell.color)
			const brightness = calculateColorBrightness(rgb)
			if (brightness === 'bright') {
				dispatch({
					type: ACTIONS.UPDATE_PEARL_COLOR,
					payload: { id: cell.id, pearlColor: 'hsl(0, 0%, 6%)' }
				})
			} else {
				dispatch({
					type: ACTIONS.UPDATE_PEARL_COLOR,
					payload: { id: cell.id, pearlColor: 'hsl(0, 0%, 92%)' }
				})
			}
		} else {
			dispatch({
				type: ACTIONS.UPDATE_PEARL_COLOR,
				payload: { id: cell.id, pearlColor: theme.secondary }
			})
		}
	}, [cell.color, cell.id, dispatch, theme.secondary])

	return (
		<span
			className="SingleCell"
			style={{
				border: `1px solid ${theme.secondary}`,
				backgroundColor: cell.color
			}}
			onClick={() => {
				switch (mode) {
					case 'pen':
						dispatch({
							type: ACTIONS.UPDATE_COLOR,
							payload: { id: cell.id, color: color }
						})
						break
					case 'pearl':
						dispatch({
							type: ACTIONS.TOGGLE_PEARL,
							payload: { id: cell.id }
						})
						break
					case 'eraser':
						dispatch({
							type: ACTIONS.CLEAR_CELL,
							payload: { id: cell.id }
						})
						break
					default:
						throw Error('No mode selected')
				}
			}}
		>
			{cell.pearl && (
				<div
					className="pearl"
					style={{
						borderColor: cell.pearlColor
					}}
				></div>
			)}
		</span>
	)
}
