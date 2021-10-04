// COLOR CONVERSION from RGB to Hex
// Convert RGB string to hex string
export function convertRGB(rgbString) {
	let rgb = rgbString.replace('rgb(', '')
	rgb = rgb.replace(')', '')
	rgb = rgb.split(', ')
	rgb = rgbToHex(parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]))
	return rgb
}

// Convert integers to hex string
function rgbToHex(r, g, b) {
	return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

// Convert an integer to hex
function componentToHex(c) {
	let hex = c.toString(16)
	return hex.length === 1 ? '0' + hex : hex
}
