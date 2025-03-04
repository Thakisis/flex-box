import React from 'react';
import { DraggablePanel } from '../exercise-code';
export function ExerciseView(props) {
    return (
        <div className='absolute top-0 left-0 w-full h-full bg-red-500/20'>
            <DraggablePanel />
        </div>
    );
}

