//imports
import { Icon } from 'astro-icon/components';

export default function CodeBlock({children, language="jsx"}){
    return(
        <div class="code-container relative py-3 mx-auto md:w-150">
            {/* This is the language being used*/}
            <div class="absolute top-0 left-0 text-white px-2 py-1
            bg-gray-800 w-full h-8 text-sm rounded-t">
                {language}
            </div>
            {/* <pre className="p-4 pt-30 rounded-lg bg-neutral-900 overflow-auto h-60 md:h-100"> */}
            <div className="rounded-lg bg-neutral-900 overflow-auto h-60 md:h-100">

                {children}
            </div>
            {/* </pre> */}
        </div>
    )
}