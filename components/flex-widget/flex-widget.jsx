import { CodeSnippet } from "@/components/code-snippet";
import { FlexBox } from "@/components/flex-box";
import { FlexProvider } from "@/components/flex-provider";

export function FlexWidget({ children, code, codeTitle, codeSize, flexClass, flexCount }) {

    return (
        <FlexProvider>

            <CodeSnippet codeTitle={codeTitle} codeSize={codeSize} code={code}>

                {children}
            </CodeSnippet>

            <FlexBox flexClass={flexClass} flexCount={flexCount} />

        </FlexProvider>
    );
}
