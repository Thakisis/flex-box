import React from 'react';
import { useFlexProperties } from "@/components/flex-provider";
import { cn } from '@/lib/utils';
export function PopoverNamed({ value, property, selected, hover, children }) {
    const { cssVars, updateProperty } = useFlexProperties();
    const valueSelected = cssVars[`--flex-${property}`]
    console.log(valueSelected, value)
    const isSelected = valueSelected === value;

    return (
        <button className={cn('font-mono bg-muted px-2 text-xs text-left round-sm', isSelected ? 'bg-orange-500/20 text-foreground' : 'bg-muted text-foreground/50')} onClick={() => updateProperty(property, value)}>
            {children}
        </button>
    );
}

