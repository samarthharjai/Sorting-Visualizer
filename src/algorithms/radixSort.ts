import { AnimationArrayType } from "@/lib/types";

function countingSort(array: number[], exp: number, animations: AnimationArrayType) {
  const n = array.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  for (let i = 0; i < n; i++) {
    const index = Math.floor(array[i] / exp) % 10;
    count[index]++;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(array[i] / exp) % 10;
    output[count[index] - 1] = array[i];
    animations.push([[i, count[index] - 1], false]);
    animations.push([[count[index] - 1, array[i]], true]);
    count[index]--;
  }

  for (let i = 0; i < n; i++) {
    array[i] = output[i];
  }
}

function runRadixSort(array: number[], animations: AnimationArrayType) {
  const max = Math.max(...array);

  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(array, exp, animations);
  }
}

export function generateRadixSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runRadixSort(auxiliaryArray, animations);
  runAnimation(animations);
}
