import { CodeSnippet } from "@/components/code-snippet";
import { FlexBox } from "@/components/flex-box";
import { FlexProvider } from "@/components/flex-provider";
import { CSSHighlighter } from "@/components/code-snippet/code-formater";
import { generateCSSFromArray } from "@/lib/utils";
export function FlexWidget({ codeTitle, codeSize, flexClass, flexCount, css, flexItems, showAlignSelf, defaultSize }) {
    const code = generateCSSFromArray(".container", css)
    return (
        <FlexProvider initialCode={code} css={css}>

            <CodeSnippet codeTitle={codeTitle} codeSize={codeSize} code={code} css={css} >
                <CSSHighlighter code={code} />
            </CodeSnippet>
            <FlexBox flexClass={flexClass} flexCount={flexCount} flexItems={flexItems} showAlignSelf={showAlignSelf} defaultSize={defaultSize} />

        </FlexProvider>
    );
}
