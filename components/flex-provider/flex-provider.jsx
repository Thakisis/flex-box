"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { generateInitialState } from "@/lib/utils";
const FlexContext = createContext(null);


export function FlexProvider({ children, css }) {

  const [flexProperties, setFlexProperties] = useState(generateInitialState(css));
  const [cssProps, setCssProps] = useState(css);
  const [isUpdateCode, setIsUpdateCode] = useState(false);

  const updateProperty = (property, value) => {

    setFlexProperties(prev => ({
      ...prev,
      [property]: value
    }));
  };


  const activateProperty = (property) => {
    setCssProps(prev => prev.map(prop => prop.property === property ? { ...prop, type: "edit" } : prop))
    setIsUpdateCode(true)

  }


  // Create CSS variable style object
  const cssVars = Object.entries(flexProperties).reduce((acc, [key, value]) => {
    // Convert camkel to kebab-case for CSS variables
    const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    acc[`--flex-${cssVarName}`] = value;
    return acc;
  }, {});

  const contextValue = {
    flexProperties,
    cssProps,
    isUpdateCode,
    activateProperty,
    updateProperty,
    cssVars
  };

  return (
    <FlexContext.Provider value={contextValue}>
      <div style={cssVars}>
        {children}
      </div>
    </FlexContext.Provider>
  );
}


export function useFlexProperties() {
  const context = useContext(FlexContext);
  return context;
}

