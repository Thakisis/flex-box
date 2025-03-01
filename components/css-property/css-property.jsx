"use client"
import React from 'react';
import { useFlexProperties } from '@/components/flex-provider';
import { PopoverProperty } from '@/components/popover-property';
import { PopoverUnit } from '@/components/popover-unit';

export function CssProperty({ property, children }) {

    const components = {
        'gap': <Gap />,
        'flex-wrap': <FlexWrap />,
        'flex-direction': <FlexDirection />
    }

    return components[property] ?? <span className="text-emerald-300">{property}</span>
}


function Gap() {

    const { cssVars, updateProperty } = useFlexProperties();
    const value = cssVars[`--flex-gap`]


    const changeProperty = (e) => {

        updateProperty('gap', e)
    }
    return (
        <div className="text-emerald-300 inline"><PopoverUnit value={value} onChange={changeProperty} /></div>
    );
}
function FlexWrap() {

    const { cssVars } = useFlexProperties();
    const value = cssVars[`--flex-flex-wrap`]
    const { flexProperties, updateProperty } = useFlexProperties();

    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty value={value} property="flex-wrap" list={['nowrap', 'wrap', 'wrap-reverse']} />

        </div>
    );
}
function FlexDirection() {
    const { cssVars } = useFlexProperties();
    const value = cssVars[`--flex-flex-direction`]
    const { flexProperties, updateProperty } = useFlexProperties();

    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty value={value} property='flex-direction' list={['row', 'column', 'row-reverse', 'column-reverse']} />

        </div>
    );
}

//export function PopoverProperty({ value = "inherit",  }) {