"use client"

import React, { createContext, useContext, useState } from 'react';
const FlexContext = createContext(null);


export function FlexProvider({ children, initialValues = {} }) {

  const defaultValues = {

    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    ...initialValues
  };


  const [flexProperties, setFlexProperties] = useState(defaultValues);


  const updateProperty = (property, value) => {
    setFlexProperties(prev => ({
      ...prev,
      [property]: value
    }));
  };


  // Create CSS variable style object
  const cssVars = Object.entries(flexProperties).reduce((acc, [key, value]) => {
    // Convert camkel to kebab-case for CSS variables
    const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase();
    acc[`--flex-${cssVarName}`] = value;
    return acc;
  }, {});

  const contextValue = {
    flexProperties,
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