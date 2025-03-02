import React from 'react';

export const AlignSelfIndicator = ({ alignSelf = "auto", flexDirection = "row" }) => {
  // Determine if we need to rotate the visualization based on flex direction
  const isVerticalFlex = flexDirection === "column" || flexDirection === "column-reverse";

  // Set rotation based on flex direction
  const rotation = isVerticalFlex ? 0 : 90;

  // Calculate position of the indicator line based on alignSelf
  let indicatorStyle = {};

  // SVG viewBox dimensions
  const width = 50;
  const height = 50;

  // Render different SVG based on alignSelf value
  const renderAlignSelfSvg = () => {
    switch (alignSelf) {
      case "flex-start":
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            <rect x="5" y="5" width="40" height="8" fill="white" rx="4" ry="4" />
            <rect x="5" y="21" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
            <rect x="5" y="37" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
          </svg>
        );

      case "flex-end":
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            <rect x="5" y="5" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
            <rect x="5" y="21" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
            <rect x="5" y="37" width="40" height="8" fill="white" rx="4" ry="4" />
          </svg>
        );

      case "center":
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            <rect x="5" y="5" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
            <rect x="5" y="21" width="40" height="8" fill="white" rx="4" ry="4" />
            <rect x="5" y="37" width="20" height="8" fill="white" opacity="0.4" rx="4" ry="4" />
          </svg>
        );

      case "stretch":
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            <rect x="5" y="5" width="40" height="8" fill="white" rx="4" ry="4" />
            <rect x="5" y="21" width="40" height="8" fill="white" rx="4" ry="4" />
            <rect x="5" y="37" width="40" height="8" fill="white" rx="4" ry="4" />
          </svg>
        );

      case "baseline":
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
            {/* Replaced line with a rounded path */}
            <path
              d="M 5,25 Q 5,23 7,23 H 43 Q 45,23 45,25 Q 45,27 43,27 H 7 Q 5,27 5,25"
              fill="white"
              stroke="none"
            />
            <text x="25" y="20" fontSize="16" fill="white" textAnchor="middle">B</text>
          </svg>
        );

      default: // "auto"
        return (
          <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>

          </svg>
        );
    }
  };

  return (
    <div className="w-full h-fullrounded-lg flex items-center justify-center">
      <div
        className="w-10 h-10"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.3s ease'
        }}
      >
        {renderAlignSelfSvg()}
      </div>
    </div>
  );
};

