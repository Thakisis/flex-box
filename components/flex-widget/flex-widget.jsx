import { CodeSnippet } from "@/components/code-snippet";
import { FlexBox } from "@/components/flex-box";
import { FlexProvider } from "@/components/flex-provider";
import { CSSHighlighter } from "@/components/code-snippet/code-formater";
import { generateCSSFromArray } from "@/lib/utils";
export function FlexWidget({ children, codeTitle, codeSize, flexClass, flexCount, css, flexItems, showAlignSelf, defaultSize }) {
    const code = generateCSSFromArray(".container", css)
    return (
        <FlexProvider initialCode={code} css={css}>

            <CodeSnippet codeTitle={codeTitle} codeSize={codeSize} code={code} css={css} >
                <CSSHighlighter code={code} />
            </CodeSnippet>
            <div className="flex text-sm p-12">
                {children}
            </div>
            <FlexBox flexClass={flexClass} flexCount={flexCount} flexItems={flexItems} showAlignSelf={showAlignSelf} defaultSize={defaultSize} />

        </FlexProvider>
    );
}
