import { CSSHighlighter } from "./code-formater";
import { cn } from '@/lib/utils';
export function CodeSnippet({ code, children, codeTitle, codeSize }) {
    //const componentChildren = children ? children : <CSSHighlighter code={code} />

    const componentChildren = <CSSHighlighter code={code} />
    return (
        <div className={cn("flex max-w-2xl my-8 ", codeSize)}>
            <div className="rounded-lg overflow-hidden  border border-zinc-800 w-full">
                {/* Darker chrome that matches macOS dark mode */}
                <div className="w-full flex justify-between align-center bg-[#2a2a2c]/9 backdrop-blur-xl px-3 py-2 border-b border-zinc-800">
                    <div className="flex space-x-2">
                        {/* Traffic lights with darker borders for dark mode */}
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]/90 border border-[#ec4c41]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]/90 border border-[#e0a429]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840]/90 border border-[#24b33a]/50"></div>
                    </div>
                    <span className="text-xs">{codeTitle}</span>
                </div>
                {/*Code content with CSS highlighting */}
                <div className="bg-[#1c1c1e] p-6 font-mono text-sm w-full">
                    {componentChildren}
                </div>
                {/* end of code content */}
            </div>
        </div>

    );
}

