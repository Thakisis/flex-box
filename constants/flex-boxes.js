export const cssProps = {
	gap: [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "edit" },
	],
	"flex-wrap": [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "switch" },
		{ property: "flex-wrap", value: "nowrap", type: "edit" },
	],
	"flex-direction": [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "switch" },
		{ property: "flex-wrap", value: "wrap", type: "switch" },
		{ property: "flex-direction", value: "row", type: "edit" },
	],
	"justify-content": [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "switch" },
		{ property: "flex-wrap", value: "wrap", type: "switch" },
		{ property: "flex-direction", value: "row", type: "switch" },
		{ property: "justify-content", value: "flex-start", type: "edit" },
	],
	"align-items": [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "switch" },
		{ property: "flex-wrap", value: "wrap", type: "switch" },
		{ property: "flex-direction", value: "row", type: "switch" },
		{ property: "justify-content", value: "flex-start", type: "switch" },
		{ property: "align-items", value: "center", type: "edit" },
	],
	"align-content": [
		{ property: "display", value: "flex", type: "fixed" },
		{ property: "gap", value: "10px", type: "switch" },
		{ property: "flex-wrap", value: "wrap", type: "switch" },
		{ property: "flex-direction", value: "row", type: "switch" },
		{ property: "justify-content", value: "center", type: "switch" },
		{ property: "align-items", value: "center", type: "switch" },
		{ property: "align-content", value: "center", type: "edit" },
	],
};
