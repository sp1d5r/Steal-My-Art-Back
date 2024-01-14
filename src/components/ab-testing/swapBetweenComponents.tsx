import React from 'react';

export const useSwapBetweenComponentsABTesting = <T extends React.ComponentType<any> & {identifier: string}>(variants: T[]) => {
    const [variant] = React.useState(() => variants[Math.floor(Math.random() * variants.length)]);
    return [variant,variant.identifier] as const;
}