"use client"

import { useState, useCallback } from "react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCw, Code } from "lucide-react"

function CssDisplay({ flex, isExpanded, onToggle, index }) {
    const formatFlexValue = () => {
        if (isExpanded) {
            // Detailed view - show individual properties
            const props = []
            if (flex.grow !== 0) props.push(`flex-grow: ${flex.grow};`)
            if (flex.shrink !== 1) props.push(`flex-shrink: ${flex.shrink};`)
            if (flex.basis !== "auto") props.push(`flex-basis: ${flex.basis};`)
            if (flex.alignSelf !== "auto") props.push(`align-self: ${flex.alignSelf};`)

            if (props.length === 0) return null

            return `#item${index + 1} {\n  ${props.join("\n  ")}\n}`
        } else {
            // Shorthand view
            const props = []

            // Only include flex shorthand if at least one value is non-default
            const hasCustomFlex = flex.grow !== 0 || flex.shrink !== 1 || flex.basis !== "auto"
            if (hasCustomFlex) {
                props.push(`flex: ${flex.grow} ${flex.shrink} ${flex.basis};`)
            }

            // Add align-self if it's not default
            if (flex.alignSelf !== "auto") {
                props.push(`align-self: ${flex.alignSelf};`)
            }

            if (props.length === 0) return null

            return `#item${index + 1} {\n  ${props.join("\n  ")}\n}`
        }
    }

    const cssValue = formatFlexValue()
    if (!cssValue) return null

    // Determine if there are any custom values set
    const hasCustomValues = flex.grow !== 0 || flex.shrink !== 1 || flex.basis !== "auto" || flex.alignSelf !== "auto"

    return (
        <div className={`relative font-mono text-xs ${hasCustomValues ? "bg-orange-900/20" : "bg-muted"} rounded-md p-2 mb-2`}>
            <Button variant="ghost" size="sm" onClick={onToggle} className="absolute right-1 top-1 h-5 px-1">
                <Code className="h-3 w-3" />
            </Button>
            <pre className="pr-6">
                <code>{cssValue}</code>
            </pre>
        </div>
    )
}

function FlexIndicator({ value, maxValue, type }) {
    const shapes = Array.from({ length: maxValue }, (_, i) => {
        const isFilled = i < value;

        if (type === "grow") {
            return (
                <svg
                    key={i}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon
                        points="12,2 22,22 2,22"
                        fill={isFilled ? "white" : "transparent"}
                        stroke="white"
                        strokeWidth="1"
                    />
                </svg>
            );
        }

        return (
            <svg
                key={i}
                width="13"
                height="13"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill={isFilled ? "white" : "transparent"}
                    stroke="white"
                    strokeWidth="1"
                />
            </svg>
        );
    });

    return <div className="flex gap-1 flex-col-reverse">{shapes}</div>;
}


function FlexChildren({ index, showAlignSelf = false }) {
    const [flex, setFlex] = useState({
        grow: 0,
        shrink: 1, // Default value for flex-shrink is 1, not 0
        basis: "auto",
        alignSelf: "auto",
    })
    const [open, setOpen] = useState(false)
    const [isExpanded, setIsExpanded] = useState(false)
    const [activeTab, setActiveTab] = useState("flex")

    const { grow, shrink, basis, alignSelf } = flex
    const MAX_FLEX_VALUE = 3

    const handleChange = useCallback((property, value) => {
        requestAnimationFrame(() => {
            setFlex((prev) => ({ ...prev, [property]: value }))
        })
    }, [])

    const resetFlex = useCallback(() => {
        setFlex({
            grow: 0,
            shrink: 1, // Default value for flex-shrink is 1
            basis: "auto",
            alignSelf: "auto",
        })
    }, [])

    // Check if any flex properties are different from default
    const hasCustomValues = grow !== 0 || shrink !== 1 || basis !== "auto" || alignSelf !== "auto"

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <button
                    style={{
                        flexGrow: grow,
                        flexShrink: shrink,
                        flexBasis: basis,
                        alignSelf: alignSelf,
                    }}
                    className={`group min-w-[100px] flex items-center p-8 ${hasCustomValues ? "bg-orange-500" : "bg-orange-400"
                        } text-white text-center font-semibold rounded-lg hover:bg-orange-600 transition-colors`}
                >
                    <div className="flex items-center justify-center w-full gap-4">
                        <FlexIndicator value={grow} maxValue={MAX_FLEX_VALUE} type="grow" />
                        <div className="flex flex-col items-center">
                            <span className="text-2xl">{String(index + 1).replace(/^(\d)$/, " $1")}</span>
                            <span className="text-xs opacity-80 mt-1">{basis}</span>
                        </div>
                        <FlexIndicator value={shrink} maxValue={MAX_FLEX_VALUE} type="shrink" />
                    </div>
                </button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-3" onOpenAutoFocus={(e) => e.preventDefault()}>
                <CssDisplay flex={flex} isExpanded={isExpanded} onToggle={() => setIsExpanded((prev) => !prev)} index={index} />

                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid w-full grid-cols-1 h-8">
                        <TabsTrigger value="flex" className="text-xs">
                            Flex Properties
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="flex" className="space-y-2">
                        <div className="grid grid-cols-[1fr,2fr,1fr] gap-2 items-center">
                            <Label htmlFor={`flex-grow-${index}`} className="text-xs">
                                Grow
                            </Label>
                            <div className="px-1">
                                <Slider
                                    id={`flex-grow-${index}`}
                                    value={[grow]}
                                    min={0}
                                    max={MAX_FLEX_VALUE}
                                    step={1}
                                    onValueChange={(value) => handleChange("grow", value[0])}
                                />
                            </div>
                            <Input
                                type="number"
                                min="0"
                                max={MAX_FLEX_VALUE}
                                step="1"
                                value={grow}
                                onChange={(e) => handleChange("grow", Number(e.target.value))}
                                className="w-12 h-7 text-xs"
                            />
                        </div>

                        <div className="grid grid-cols-[1fr,2fr,1fr] gap-2 items-center">
                            <Label htmlFor={`flex-shrink-${index}`} className="text-xs">
                                Shrink
                            </Label>
                            <div className="px-1">
                                <Slider
                                    id={`flex-shrink-${index}`}
                                    value={[shrink]}
                                    min={0}
                                    max={MAX_FLEX_VALUE}
                                    step={1}
                                    onValueChange={(value) => handleChange("shrink", value[0])}
                                />
                            </div>
                            <Input
                                type="number"
                                min="0"
                                max={MAX_FLEX_VALUE}
                                step="1"
                                value={shrink}
                                onChange={(e) => handleChange("shrink", Number(e.target.value))}
                                className="w-12 h-7 text-xs"
                            />
                        </div>

                        <div className="grid grid-cols-[1fr,2fr] gap-2 items-center">
                            <Label htmlFor={`flex-basis-${index}`} className="text-xs">
                                Basis
                            </Label>
                            <Select value={basis} onValueChange={(value) => handleChange("basis", value)}>
                                <SelectTrigger id={`flex-basis-${index}`} className="h-7 text-xs">
                                    <SelectValue placeholder="Basis" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="auto">auto</SelectItem>
                                    <SelectItem value="0">0</SelectItem>
                                    <SelectItem value="100%">100%</SelectItem>
                                    <SelectItem value="50%">50%</SelectItem>
                                    <SelectItem value="25%">25%</SelectItem>
                                    <SelectItem value="200px">200px</SelectItem>
                                    <SelectItem value="100px">100px</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {showAlignSelf && (
                            <div className="grid grid-cols-[1fr,2fr] gap-2 items-center">
                                <Label htmlFor={`align-self-${index}`} className="text-xs">
                                    Align Self
                                </Label>
                                <Select value={alignSelf} onValueChange={(value) => handleChange("alignSelf", value)}>
                                    <SelectTrigger id={`align-self-${index}`} className="h-7 text-xs">
                                        <SelectValue placeholder="Align Self" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="auto">auto</SelectItem>
                                        <SelectItem value="flex-start">flex-start</SelectItem>
                                        <SelectItem value="flex-end">flex-end</SelectItem>
                                        <SelectItem value="center">center</SelectItem>
                                        <SelectItem value="baseline">baseline</SelectItem>
                                        <SelectItem value="stretch">stretch</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        )}
                    </TabsContent>
                </Tabs>

                <div className="flex justify-end mt-2">
                    <Button variant="ghost" size="sm" onClick={resetFlex} className="h-6 text-xs px-2">
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Reset
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default FlexChildren