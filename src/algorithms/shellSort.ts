import { AnimationArrayType } from "@/lib/types";

function runShellSort(array: number[], animations: AnimationArrayType) {
  let n = array.length;
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;
      while (j >= gap && array[j - gap] > temp) {
        animations.push([[j, j - gap], false]);
        animations.push([[j, array[j - gap]], true]);
        array[j] = array[j - gap];
        j -= gap;
      }
      animations.push([[j, temp], true]);
      array[j] = temp;
    }
    gap = Math.floor(gap / 2);
  }
}

export function generateShellSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runShellSort(auxiliaryArray, animations);
  runAnimation(animations);
}
