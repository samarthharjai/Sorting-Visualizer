import { AnimationArrayType } from "@/lib/types";

function getNextGap(gap: number): number {
  gap = Math.floor((gap * 10) / 13);
  if (gap < 1) return 1;
  return gap;
}

function runCombSort(array: number[], animations: AnimationArrayType) {
  let n = array.length;
  let gap = n;
  let swapped = true;

  while (gap !== 1 || swapped) {
    gap = getNextGap(gap);
    swapped = false;

    for (let i = 0; i < n - gap; i++) {
      animations.push([[i, i + gap], false]);
      if (array[i] > array[i + gap]) {
        animations.push([[i, array[i + gap]], true]);
        animations.push([[i + gap, array[i]], true]);
        [array[i], array[i + gap]] = [array[i + gap], array[i]];
        swapped = true;
      }
    }
  }
}

export function generateCombSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runCombSort(auxiliaryArray, animations);
  runAnimation(animations);
}
