"use client"
import React, { useState, useEffect, useRef } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';


export const DraggablePanel = ({
    title,
    children,
    initialPosition = { x: 100, y: 100 },
    initialSize = { width: 300, height: 'auto' },
    boundToParent = false,
    minVisiblePart = 50,
    boundaryOffset = { top: 0, right: 0, bottom: 0, left: 0 },
    minWidth = 200,
    minHeight = 100
}) => {
    const [position, setPosition] = useState(initialPosition);
    const [size, setSize] = useState(initialSize);
    const [isResizing, setIsResizing] = useState(false);
    const [resizeStartPos, setResizeStartPos] = useState({ x: 0, y: 0 });
    const [resizeStartSize, setResizeStartSize] = useState({ width: 0, height: 0 });
    const panelRef = useRef(null);
    const parentRef = useRef(null);

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 5,
        },
    }));


    const constrainPosition = (newPosition, panelSize) => {
        let bounds;

        if (boundToParent && parentRef.current) {

            const parentRect = parentRef.current.getBoundingClientRect();
            bounds = {
                minX: boundaryOffset.left,
                maxX: parentRect.width - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: parentRect.height - panelSize.height - boundaryOffset.bottom
            };
        } else {

            bounds = {
                minX: boundaryOffset.left,
                maxX: window.innerWidth - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: window.innerHeight - panelSize.height - boundaryOffset.bottom
            };
        }


        if (bounds.maxX < bounds.minX) {
            bounds.maxX = window.innerWidth - minVisiblePart - boundaryOffset.right;
        }
        if (bounds.maxY < bounds.minY) {
            bounds.maxY = window.innerHeight - minVisiblePart - boundaryOffset.bottom;
        }

        return {
            x: Math.min(Math.max(newPosition.x, bounds.minX), bounds.maxX),
            y: Math.min(Math.max(newPosition.y, bounds.minY), bounds.maxY)
        };
    };


    const MacStyleDragHandle = () => {
        const { attributes, listeners, setNodeRef } = useDraggable({
            id: "panel-handle"
        });

        return (
            <div
                ref={setNodeRef}
                className="flex items-center h-7 pl-3 bg-black cursor-move select-none"
                {...listeners}
                {...attributes}
            >
                <div className="w-full flex justify-between align-center bg-[#2a2a2c]/9 backdrop-blur-xl px-3 py-2 border-b border-zinc-800">
                    <div className="flex space-x-2">
                        {/* Traffic lights with darker borders for dark mode */}
                        <div className="w-3 h-3 rounded-full bg-[#ff5f57]/90 border border-[#ec4c41]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#febc2e]/90 border border-[#e0a429]/50"></div>
                        <div className="w-3 h-3 rounded-full bg-[#28c840]/90 border border-[#24b33a]/50"></div>
                    </div>
                    <span className="text-xs"></span>
                </div>
                {title && (
                    <div className="flex-1 text-sm font-bold text-center mr-10">
                        {title}
                    </div>
                )}
            </div>
        );
    };


    const ResizeHandle = () => {
        const handleMouseDown = (e) => {
            e.preventDefault();
            setIsResizing(true);
            setResizeStartPos({ x: e.clientX, y: e.clientY });
            setResizeStartSize({
                width: typeof size.width === 'number' ? size.width : panelRef.current.offsetWidth,
                height: typeof size.height === 'number' ? size.height : panelRef.current.offsetHeight
            });
        };

        return (
            <div
                className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
                onMouseDown={handleMouseDown}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <line x1="4" y1="18" x2="20" y2="4"></line>
                    <line x1="5" y1="18" x2="21" y2="5"></line>
                    <line x1="6" y1="18" x2="22" y2="6"></line>
                </svg>
            </div>

        );
    };


    const handleDragMove = (event) => {
        const { delta } = event;

        if (delta && panelRef.current) {
            const panelSize = {
                width: panelRef.current.offsetWidth,
                height: panelRef.current.offsetHeight
            };

            const newPosition = {
                x: position.x + delta.x,
                y: position.y + delta.y
            };

            setPosition(constrainPosition(newPosition, panelSize));
        }
    };


    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isResizing) {
                const deltaX = e.clientX - resizeStartPos.x;
                const deltaY = e.clientY - resizeStartPos.y;

                const newWidth = Math.max(resizeStartSize.width + deltaX, minWidth);
                const newHeight = Math.max(resizeStartSize.height + deltaY, minHeight);

                setSize({
                    width: newWidth,
                    height: newHeight
                });


                if (panelRef.current) {
                    const panelSize = {
                        width: newWidth,
                        height: newHeight
                    };
                    setPosition(prev => constrainPosition(prev, panelSize));
                }
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
        };

        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isResizing, resizeStartPos, resizeStartSize]);


    useEffect(() => {
        const checkInitialPosition = () => {
            if (panelRef.current) {
                const panelSize = {
                    width: panelRef.current.offsetWidth,
                    height: panelRef.current.offsetHeight
                };
                setPosition(prevPos => {
                    const constrained = constrainPosition(prevPos, panelSize);

                    if (constrained.x !== prevPos.x || constrained.y !== prevPos.y) {
                        return constrained;
                    }
                    return prevPos;
                });
            }
        };


        const timer = setTimeout(checkInitialPosition, 0);
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const handleResize = () => {
            if (panelRef.current) {
                const panelSize = {
                    width: panelRef.current.offsetWidth,
                    height: panelRef.current.offsetHeight
                };
                setPosition(prev => constrainPosition(prev, panelSize));
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div ref={parentRef} className="relative w-full h-full">
            <DndContext
                sensors={sensors}
                onDragEnd={() => { }}
                onDragMove={handleDragMove}
            >
                <div
                    ref={panelRef}
                    className=" bg-[#1c1c1e] rounded-lg overflow-hidden  border border-zinc-800 z-50 overflow-hidden flex flex-col"
                    style={{
                        position: boundToParent ? 'absolute' : 'fixed',
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        width: `${size.width}px`,
                        height: size.height === 'auto' ? 'auto' : `${size.height}px`,
                    }}
                >
                    <MacStyleDragHandle />
                    <div className="p-3 flex-grow overflow-auto">
                        {children}
                    </div>
                    <ResizeHandle />
                </div>
            </DndContext>
        </div>
    );
};

