import { CodeSnippet } from "@/components/code-snippet";
import { FlexBox } from "@/components/flex-box";
import { FlexProvider } from "@/components/flex-provider";

export function FlexWidget({ children, codeTitle, codeSize }) {

    return (
        <FlexProvider>

            <CodeSnippet codeTitle={codeTitle} codeSize={codeSize}>

                {children}
            </CodeSnippet>

            <FlexBox />

        </FlexProvider>
    );
}
