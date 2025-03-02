import React from 'react';
import { CssProperty } from '../css-property';
import { EditableButton } from './EditableButton';
function formatCSSLine(line) {
  let lineEditable = false
  if (!line.trim()) {
    return [];
  }

  if (line.trim().startsWith("/*")) {
    return [{ type: "comment", content: line.trim() }];
  }

  const commentIndex = line.indexOf("/*");
  if (commentIndex !== -1) {
    const cssCodeBeforeComment = line.slice(0, commentIndex).trim();
    const commentText = line.slice(commentIndex).trim();
    return [
      { type: "property", content: cssCodeBeforeComment },
      { type: "comment", content: commentText },
    ];
  }

  const tokens = [];

  if (!line.includes(":") && line.includes("{")) {
    return [
      { type: "selector", content: line.replace("{", "").trim() },
      { type: "punctuation", content: " {" },
    ];
  }

  if (line.trim() === "}") {
    return [{ type: "punctuation", content: "}" }];
  }

  if (line.includes(":")) {
    const [property, value] = line.split(":");
    const propertyMatch = line.match(/<-property:(.*?)"value:(.*?)->/);

    if (propertyMatch) {
      tokens.push(
        { type: "property", content: property.trim() },
        { type: "punctuation", content: ": " },
        {
          type: "component",
          content: <CssProperty key={propertyMatch[1].trim()} property={propertyMatch[1].trim()} value={propertyMatch[2].trim()} className="text-[var(--color-value-editable)]" />
        }
      );
    } else {
      const isEditable = !property.trim().startsWith("--");
      tokens.push(
        { type: "property", content: property.trim(), editable: isEditable },
        { type: "punctuation", content: ": " },
        { type: "value", content: value.replace(";", "").trim(), editable: isEditable },
        { type: "punctuation", content: ";" }
      );
    }
  }

  return tokens;
}

export function CSSHighlighter({ code }) {
  const lines = code.split("\n");
  let currentIndent = 0;

  const getTokenColor = (type, editable) => {
    if (!editable) {
      switch (type) {
        case "property": return "text-[var(--color-property-editable)]";
        case "value": return "text-[var(--color-value-editable)]";
        case "punctuation": return "text-[var(--color-punctuation)]";
        default: return "text-gray-400";
      }
    }
    switch (type) {
      case "selector": return "text-[var(--color-selector)]";
      case "property": return "text-[var(--color-property-non-editable)]";
      case "value": return "text-[var(--color-value-non-editable)]";

      case "punctuation": return "text-[var(--color-punctuation)]";
      case "comment": return "text-[var(--color-comment)]";
      default: return "text-gray-300";
    }
  };

  const getIndentClass = (level) => {
    return `pl-${level * 4}`;
  };

  const processedLines = lines.map((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine === "}") {
      currentIndent = Math.max(0, currentIndent - 1);
    }
    const lineIndent = currentIndent
    const indentClass = getIndentClass(currentIndent);

    if (trimmedLine.includes("{")) {
      currentIndent++;
    }

    const tokens = formatCSSLine(trimmedLine);


    return { indentClass, tokens, isEmpty: trimmedLine.length === 0, lineIndent: lineIndent };
  });

  const linesRendered = processedLines.map((line, i) => {
    let lineEditable = false
    let editableProperty = null
    const tokensRendered = line.tokens.map((token, j) => {
      if (token?.editable && token.type === "property" && token.content !== "display") {
        lineEditable = true
        editableProperty = token.content
      }
      return (token.type === "component" ? token.content : <div key={j} className='inline'> <span className={getTokenColor(token.type, token.editable)}>{token.content}</span></div>)
    })
    console.log(line)
    return (<div key={i} className={`relative  toEditable leading-6 w-full ${line.isEmpty ? "h-4" : ""} ${line.indentClass}`} style={{ paddingLeft: line.lineIndent * 2 + "rem" }}>
      {tokensRendered}
      {lineEditable && <EditableButton property={editableProperty} />}
    </div>)
  })

  return (
    <div className="font-mono text-sm">
      {
        linesRendered
      }
    </div>
  );
}

