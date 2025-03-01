function formatCSSLine(line) {
    // Handle empty lines
    if (!line.trim()) {
      return []
    }
  
    // Handle comments
    if (line.trim().startsWith("/*")) {
      return [{ type: "comment", content: line.trim() }]
    }
  
    const tokens = []
  
    // Handle selectors
    if (!line.includes(":") && line.includes("{")) {
      return [
        { type: "selector", content: line.replace("{", "").trim() },
        { type: "punctuation", content: " {" },
      ]
    }
  
    // Handle closing brace
    if (line.trim() === "}") {
      return [{ type: "punctuation", content: "}" }]
    }
  
    // Handle properties and values
    if (line.includes(":")) {
      const [property, value] = line.split(":")
      tokens.push(
        { type: "property", content: property.trim() },
        { type: "punctuation", content: ": " },
        { type: "value", content: value.replace(";", "").trim() },
        { type: "punctuation", content: ";" },
      )
    }
  
    return tokens
  }
  
  export function CSSHighlighter({ code }) {
    const lines = code.split("\n")
    let currentIndent = 0
  
    const getTokenColor = (type) => {
      switch (type) {
        case "selector":
          return "text-blue-300"
        case "property":
          return "text-violet-300"
        case "value":
          return "text-emerald-300"
        case "punctuation":
          return "text-gray-300"
        case "comment":
          return "text-gray-400"
        default:
          return "text-gray-300"
      }
    }
  
    const getIndentClass = (level) => {
      // Using Tailwind's pl (padding-left) classes for indentation
      switch (level) {
        case 0: return ""
        case 1: return "pl-4"
        case 2: return "pl-8"
        case 3: return "pl-12"
        case 4: return "pl-16"
        case 5: return "pl-20"
        default: return `pl-${level * 4}`
      }
    }
  
    const processedLines = lines.map((line) => {
      const trimmedLine = line.trim()
  
      // Decrease indent for closing braces before processing
      if (trimmedLine === "}") {
        currentIndent = Math.max(0, currentIndent - 1)
      }
  
      // Get the appropriate indentation class
      const indentClass = getIndentClass(currentIndent)
  
      // Increase indent after processing lines with opening braces
      if (trimmedLine.includes("{")) {
        currentIndent++
      }
  
      const tokens = formatCSSLine(trimmedLine)
  
      return {
        indentClass,
        tokens,
        isEmpty: trimmedLine.length === 0,
      }
    })
  
    return (
      <div className="font-mono text-sm">
        {processedLines.map((line, i) => (
          <div key={i} className={`leading-6 ${line.isEmpty ? "h-4" : ""} ${line.indentClass}`}>
            {line.tokens.map((token, j) => (
              <span key={j} className={getTokenColor(token.type)}>
                {token.content}
              </span>
            ))}
          </div>
        ))}
      </div>
    )
  }
  