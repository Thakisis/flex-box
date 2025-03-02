"use client"
import React from 'react';
import { useFlexProperties } from '@/components/flex-provider';
import { PopoverProperty } from '@/components/popover-property';
import { PopoverUnit } from '@/components/popover-unit';

export function CssProperty({ property, children }) {

    const components = {
        'gap': <Gap />,
        'flex-wrap': <FlexWrap />,
        'flex-direction': <FlexDirection />,
        'justify-content': <JustifyContent />,
        'align-items': <AlignItems />,
        'align-content': <AlignContent />
    }

    return components[property] ?? <span className="text-emerald-300">{property}{value}</span>
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


    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty value={value} property='flex-direction' list={['row', 'column', 'row-reverse', 'column-reverse']} />

        </div>
    );
}

function JustifyContent() {
    const { cssVars } = useFlexProperties();
    const value = cssVars[`--flex-justify-content`];  // Cambié a 'justify-content'

    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty
                value={value}
                property='justify-content'  // Cambié 'flex-direction' a 'justify-content'
                list={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']}
            />
        </div>
    );
}

function AlignItems() {
    const { cssVars } = useFlexProperties();
    const value = cssVars[`--flex-align-items`]
    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty
                value={value}
                property='align-items'
                list={['flex-start', 'flex-end', 'center', 'baseline', 'stretch']}
            />
        </div>
    );
}
function AlignContent() {
    const { cssVars } = useFlexProperties();
    const value = cssVars[`--flex-align-content`]
    return (
        <div className="text-emerald-300 inline">
            <PopoverProperty
                value={value}
                property='align-content'
                list={['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']}
            />
        </div>
    );
}