import { ElementType, ComponentPropsWithoutRef } from 'react';

export type BaseProps<T extends ElementType> = {
  grid?: true | 'full' | 'halves' | 'thirds' | 'quarters' | 'fifths';
} & ComponentPropsWithoutRef<T>;
