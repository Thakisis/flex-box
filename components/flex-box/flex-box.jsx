import React from 'react';

export function FlexBox({ children = 6 }) {
  const childrenList = new Array(children).fill(0).map((item, index) => {
    return <div key={index} className='min-w-[8rem]'>{index + 1}</div>
  })
  return (
    <div className="max-w-md p-6 rounded-lg   border-2 border-dashed border-gray-400 bg-orange-500/20">
      <div className="flex-widget-box  [&>div]:block [&>div]:p-6 [&>div]:bg-orange-500 [&>div]:text-center [&>div]:font-semibold [&>div]:rounded-lg   bg-black font-monocode">
        {childrenList}
      </div>
    </div>
  );
}

