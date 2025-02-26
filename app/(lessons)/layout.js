import { ViewTransitions } from "next-view-transitions";
export default function LessonsLayout({children,title}) {
    return (
    
        <div>
            <div className="flex items-center justify-center">
                {title}
            </div>
            {children}
        </div>
    
    );
}

