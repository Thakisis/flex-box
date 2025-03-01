import React from 'react';

export function FlexBox(props) {
    return (
        <div className="max-w-md p-6 rounded-lg   border-2 border-dashed border-gray-400 bg-orange-500/20">
              <div className="flex-widget-box [&>div]:block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg   bg-black font-monocode">
                <div>Elemento 1</div>
                <div>Elemento 2</div>
                <div>Elemento 3</div>
                <div>Elemento 4</div>
                <div>Elemento 6</div>
                <div>Elemento 7</div>
                <div>Elemento 8</div>
              </div>
            </div>
    );
}

