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
