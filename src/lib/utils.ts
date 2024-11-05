import { type ClassValue,clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { THEMES } from '@/lib/constants';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomThemesAsString() {
  const shuffled = THEMES.slice().sort(() => 0.5 - Math.random()); // Shuffle the array
  const selectedItems = shuffled.slice(0, 3); // Select the first `count` items
  return selectedItems.join(', '); // Join the selected items into a string
}