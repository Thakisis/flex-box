import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function splitunit(value) {
	const match = value.match(/^(-?\d*\.?\d+)([a-zA-Z%]*)$/);
	if (match) {
		return { value: parseFloat(match[1]), unit: match[2] || null };
	}
	return { value: null, unit: null };
}

export function generateCSSFromArray(selector, propertiesArray) {
	let cssString = `${selector} {\n`;

	// Map each property in the array to its CSS string representation
	const cssProperties = propertiesArray.map(({ property, value, type }) => {
		if (type === "edit") {
			// Create editable property with the special tag format
			return `  ${property}: <-property:${property}"value:${value}->;\n`;
		}
		// For fixed and switch types, just add as normal CSS
		return `  ${property}: ${value};\n`;
	});

	// Add all properties to the CSS string
	cssString += cssProperties.join("");
	cssString += "}";

	return cssString;
}
export function generateInitialState(propertiesArray) {
	return propertiesArray.reduce((state, { property, value }) => {
		// Convert kebab-case to camelCase for the state of cssVars
		const camelProperty = property.replace(/-([a-z])/g, (_, letter) =>
			letter.toUpperCase()
		);

		// add the property to the state object
		state[camelProperty] = value;
		return state;
	}, {});
}
