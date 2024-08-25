import { AnimationArrayType } from "@/lib/types";

function heapify(array: number[], n: number, i: number, animations: AnimationArrayType) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) {
    animations.push([[i, left], false]);
    if (array[left] > array[largest]) {
      largest = left;
    }
  }

  if (right < n) {
    animations.push([[i, right], false]);
    if (array[right] > array[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    animations.push([[i, array[largest]], true]);
    animations.push([[largest, array[i]], true]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest, animations);
  }
}

function runHeapSort(array: number[], animations: AnimationArrayType) {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n - 1; i > 0; i--) {
    animations.push([[0, array[i]], true]);
    animations.push([[i, array[0]], true]);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, animations);
  }
}

export function generateHeapSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runHeapSort(auxiliaryArray, animations);
  runAnimation(animations);
}
