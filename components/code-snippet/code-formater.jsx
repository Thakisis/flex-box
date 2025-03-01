import React from 'react';
import { CssProperty } from '../css-property';


function formatCSSLine(line) {
  if (!line.trim()) {
    return [];
  }

  // Manejo de comentarios CSS: líneas que empiezan con /* o contienen comentarios al final.
  if (line.trim().startsWith("/*")) {
    return [{ type: "comment", content: line.trim() }];
  }

  // Comentarios al final de la línea CSS
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

    const propertyMatch = line.match(/<\-property:(.*?)"value:(.*?)\->/);
    if (propertyMatch) {
      // Primero agregamos la propiedad con su ":"
      tokens.push({
        type: "property",
        content: property.trim(),
      });
      tokens.push({
        type: "punctuation",
        content: ": ",
      });
      // Luego agregamos el componente CssProperty
      tokens.push({
        type: "component",
        content: <CssProperty key={propertyMatch[1].trim()} property={propertyMatch[1].trim()} value={propertyMatch[2].trim()} className="text-emerald-300" />
      });
    } else {
      // Primero agregamos la propiedad y ":" como un token separado
      tokens.push(
        { type: "property", content: property.trim() },
        { type: "punctuation", content: ": " },
        { type: "value", content: value.replace(";", "").trim() },
        { type: "punctuation", content: ";" }
      );
    }
  }

  return tokens;
}

export function CSSHighlighter({ code }) {
  const lines = code.split("\n");
  let currentIndent = 0;

  const getTokenColor = (type) => {
    switch (type) {
      case "selector": return "text-blue-300";
      case "property": return "text-violet-300"; // Color para propiedades
      case "value": return "text-emerald-300";
      case "punctuation": return "text-gray-300";
      case "comment": return "text-gray-400"; // Color para comentarios
      default: return "text-gray-300";
    }
  };

  const getIndentClass = (level) => {
    switch (level) {
      case 0: return "";
      case 1: return "pl-4";
      case 2: return "pl-8";
      case 3: return "pl-12";
      case 4: return "pl-16";
      case 5: return "pl-20";
      default: return `pl-${level * 4}`;
    }
  };

  const processedLines = lines.map((line, i) => {
    const trimmedLine = line.trim();
    if (trimmedLine === "}") {
      currentIndent = Math.max(0, currentIndent - 1);
    }

    const indentClass = getIndentClass(currentIndent);

    if (trimmedLine.includes("{")) {
      currentIndent++;
    }

    const tokens = formatCSSLine(trimmedLine);

    return {
      indentClass,
      tokens,
      isEmpty: trimmedLine.length === 0,
    };
  });

  return (
    <div className="font-mono text-sm">
      {processedLines.map((line, i) => (
        <div key={i} className={`leading-6 ${line.isEmpty ? "h-4" : ""} ${line.indentClass}`}>
          {line.tokens.map((token, j) => (
            token.type === "component" ? token.content : <span key={j} className={getTokenColor(token.type)}>{token.content}</span>
          ))}
        </div>
      ))}
    </div>
  );
} 