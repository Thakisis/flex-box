"use client"
import React, { useState, useEffect, useRef } from 'react';
import { DndContext, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';

// Componente Panel principal
export const DraggablePanel = ({
    title,
    children,
    initialPosition = { x: 100, y: 100 },
    width = 300,
    height = 'auto',
    boundToParent = false,
    minVisiblePart = 50,
    boundaryOffset = { top: 0, right: 0, bottom: 0, left: 0 }
}) => {
    const [position, setPosition] = useState(initialPosition);
    const panelRef = useRef(null);
    const parentRef = useRef(null);

    const sensors = useSensors(useSensor(PointerSensor, {
        activationConstraint: {
            distance: 5,
        },
    }));

    // Función para limitar la posición dentro de los límites
    const constrainPosition = (newPosition, panelSize) => {
        let bounds;

        if (boundToParent && parentRef.current) {
            // Usar los límites del contenedor padre con offset
            const parentRect = parentRef.current.getBoundingClientRect();
            bounds = {
                minX: boundaryOffset.left,
                maxX: parentRect.width - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: parentRect.height - panelSize.height - boundaryOffset.bottom
            };
        } else {
            // Usar los límites del viewport con offset
            bounds = {
                minX: boundaryOffset.left,
                maxX: window.innerWidth - panelSize.width - boundaryOffset.right,
                minY: boundaryOffset.top,
                maxY: window.innerHeight - panelSize.height - boundaryOffset.bottom
            };
        }

        // Si el panel más el offset es más grande que el contenedor/viewport, al menos asegurar la parte mínima visible
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

    // Componente de tirador estilo macOS
    const MacStyleDragHandle = () => {
        const { attributes, listeners, setNodeRef } = useDraggable({
            id: "panel-handle"
        });

        const handleStyle = {
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '12px',
            height: '28px',
            cursor: 'move',
            borderBottom: '1px solid #3a3a3a',
            userSelect: 'none',
        };

        const dotsContainerStyle = {
            display: 'flex',
            gap: '6px',
            marginRight: '10px',
        };

        const dotStyle = (color) => ({
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: color,
        });

        return (
            <div
                ref={setNodeRef}
                style={handleStyle}
                {...listeners}
                {...attributes}
            >
                <div style={dotsContainerStyle}>
                    <div style={dotStyle('#FF5F56')}></div>
                    <div style={dotStyle('#FFBD2E')}></div>
                    <div style={dotStyle('#27C93F')}></div>
                </div>
                {title && (
                    <div style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        flex: 1,
                        textAlign: 'center',
                        marginRight: '40px' // Para compensar el espacio de los puntos a la izquierda
                    }}>
                        {title}
                    </div>
                )}
            </div>
        );
    };

    // Manejador para cuando se está arrastrando
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

    // Asegurarse de que la posición inicial esté dentro de los límites
    useEffect(() => {
        const checkInitialPosition = () => {
            if (panelRef.current) {
                const panelSize = {
                    width: panelRef.current.offsetWidth,
                    height: panelRef.current.offsetHeight
                };
                setPosition(prevPos => {
                    const constrained = constrainPosition(prevPos, panelSize);
                    // Solo actualizar si es diferente para evitar un ciclo infinito
                    if (constrained.x !== prevPos.x || constrained.y !== prevPos.y) {
                        return constrained;
                    }
                    return prevPos;
                });
            }
        };

        // Ejecutar después de que el componente se renderice completamente
        const timer = setTimeout(checkInitialPosition, 0);
        return () => clearTimeout(timer);
    }, []);

    // Manejar cambios en el tamaño de la ventana
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
        <div ref={parentRef} style={{ position: 'relative', width: '100%', height: '100%' }}>
            <DndContext
                sensors={sensors}
                onDragEnd={() => { }}
                onDragMove={handleDragMove}
            >
                <div
                    ref={panelRef}
                    style={{
                        position: boundToParent ? 'absolute' : 'fixed',
                        left: `${position.x}px`,
                        top: `${position.y}px`,
                        width: `${width}px`,
                        height: height,
                        backgroundColor: '#2d2d2d',
                        border: '1px solid #3a3a3a',
                        borderRadius: '8px',
                        boxShadow: '0 2px 15px rgba(0, 0, 0, 0.3)',
                        color: '#eee',
                        zIndex: 1000,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <MacStyleDragHandle />
                    <div style={{ padding: '12px', flexGrow: 1, overflow: 'auto' }}>
                        {children}
                    </div>
                </div>
            </DndContext>
        </div>
    );
};

