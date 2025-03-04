import React, { useState, useEffect, useRef } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';

// Main Panel Component
const DraggablePanel = ({
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

    // Function to constrain position within boundaries
    const constrainPosition = (newPosition, panelSize) => {
        let bounds;

        if (boundToParent && parentRef.current) {
            // Use parent container boundaries with offset
            const parentRect = parentRef.current.getBoundingClientRect();
            bounds = {
                minX: boundaryOffset.left,
                maxX: parentRect.width - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: parentRect.height - panelSize.height - boundaryOffset.bottom
            };
        } else {
            // Use viewport boundaries with offset
            bounds = {
                minX: boundaryOffset.left,
                maxX: window.innerWidth - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: window.innerHeight - panelSize.height - boundaryOffset.bottom
            };
        }

        // If panel plus offset is larger than container/viewport, at least ensure minimum visible part
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

    // macOS-style drag handle component
    const MacStyleDragHandle = () => {
        const { attributes, listeners, setNodeRef } = useDraggable({
            id: "panel-handle"
        });

        return (
            <div
                ref={setNodeRef}
                className="flex items-center h-7 pl-3 border-b border-gray-600 cursor-move select-none"
                {...listeners}
                {...attributes}
            >
                <div className="flex gap-1.5 mr-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {title && (
                    <div className="flex-1 text-sm font-bold text-center mr-10">
                        {title}
                    </div>
                )}
            </div>
        );
    };

    // Resize handle component
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
                    xmlns="http://www.w3.org/2000/svg"
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
                    <polyline points="16 18 22 18 22 12"></polyline>
                    <polyline points="8 6 2 6 2 12"></polyline>
                    <line x1="22" y1="18" x2="16" y2="12"></line>
                    <line x1="2" y1="6" x2="8" y2="12"></line>
                </svg>
            </div>
        );
    };

    // Handler for when panel is being dragged
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

    // Handle resize events
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

                // Ensure position is still valid with new size
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

    // Ensure initial position is within boundaries
    useEffect(() => {
        const checkInitialPosition = () => {
            if (panelRef.current) {
                const panelSize = {
                    width: panelRef.current.offsetWidth,
                    height: panelRef.current.offsetHeight
                };
                setPosition(prevPos => {
                    const constrained = constrainPosition(prevPos, panelSize);
                    // Only update if different to avoid infinite loop
                    if (constrained.x !== prevPos.x || constrained.y !== prevPos.y) {
                        return constrained;
                    }
                    return prevPos;
                });
            }
        };

        // Run after component fully renders
        const timer = setTimeout(checkInitialPosition, 0);
        return () => clearTimeout(timer);
    }, []);

    // Handle window resize
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
                    className="bg-gray-800 border border-gray-600 rounded-lg shadow-lg text-gray-100 z-50 overflow-hidden flex flex-col"
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

export default DraggablePanel;