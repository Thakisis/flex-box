import React from 'react';

function condesnipet(props) {
    return (
        <>
            <div className="rounded-xl p-1 text-sm scheme-dark dark:inset-ring dark:inset-ring-white/10">
                <div className="flex gap-2 p-2">
                    <span className="size-3 rounded-full bg-white/20"></span><span className="size-3 rounded-full bg-white/20"></span ><span className="size-3 rounded-full bg-white/20"></span>
                </div>
                <div className="with-line-numbers text-[13px]/6 *:*:p-3!">
                    <div
                        className="*:flex *:*:max-w-none *:*:shrink-0 *:*:grow *:overflow-auto *:rounded-lg *:bg-white/10! *:p-5 dark:*:bg-white/5! **:[.line]:isolate **:[.line]:block **:[.line]:not-last:min-h-[1lh] *:inset-ring *:inset-ring-white/10 dark:*:inset-ring-white/5"
                    >
                        <pre
                            tabindex="0"
                        >
                            {children}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}

export default condesnipet;