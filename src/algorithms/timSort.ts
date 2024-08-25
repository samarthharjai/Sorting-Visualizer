import { AnimationArrayType } from "@/lib/types";

const MIN_MERGE = 32;

function insertionSort(array: number[], left: number, right: number, animations: AnimationArrayType) {
  for (let i = left + 1; i <= right; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= left && array[j] > temp) {
      animations.push([[j + 1, array[j]], true]);
      array[j + 1] = array[j];
      j--;
    }
    animations.push([[j + 1, temp], true]);
    array[j + 1] = temp;
  }
}

function merge(array: number[], l: number, m: number, r: number, animations: AnimationArrayType) {
  let len1 = m - l + 1;
  let len2 = r - m;
  let left = new Array(len1);
  let right = new Array(len2);

  for (let x = 0; x < len1; x++) {
    left[x] = array[l + x];
  }
  for (let x = 0; x < len2; x++) {
    right[x] = array[m + 1 + x];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      animations.push([[k, left[i]], true]);
      array[k] = left[i];
      i++;
    } else {
      animations.push([[k, right[j]], true]);
      array[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < len1) {
    animations.push([[k, left[i]], true]);
    array[k] = left[i];
    i++;
    k++;
  }

  while (j < len2) {
    animations.push([[k, right[j]], true]);
    array[k] = right[j];
    j++;
    k++;
  }
}

function runTimSort(array: number[], animations: AnimationArrayType) {
  let n = array.length;

  for (let i = 0; i < n; i += MIN_MERGE) {
    insertionSort(array, i, Math.min((i + MIN_MERGE - 1), (n - 1)), animations);
  }

  for (let size = MIN_MERGE; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min((left + 2 * size - 1), (n - 1));
      if (mid < right) {
        merge(array, left, mid, right, animations);
      }
    }
  }
}

export function generateTimSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runTimSort(auxiliaryArray, animations);
  runAnimation(animations);
}
