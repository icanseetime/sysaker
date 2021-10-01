import React from 'react'
import './SideControlButton.css'

export default function SideControlButton({ icon, onClick }) {
	return (
		<span className="SideControlButton" onClick={onClick}>
			{icon}
		</span>
	)
}
