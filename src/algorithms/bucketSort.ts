import { AnimationArrayType } from "@/lib/types";

function runBucketSort(array: number[], animations: AnimationArrayType) {
  if (array.length === 0) return;

  let i, minValue = array[0], maxValue = array[0], bucketSize = 5;
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets: number[][] = new Array(bucketCount);

  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  for (i = 0; i < array.length; i++) {
    const index = Math.floor((array[i] - minValue) / bucketSize);
    buckets[index].push(array[i]);
    animations.push([[i, index], false]);
  }

  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    for (let j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
      animations.push([[array.length - 1, buckets[i][j]], true]);
    }
  }
}

export function generateBucketSortAnimationArray(
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: AnimationArrayType) => void
) {
  if (isSorting) return;
  if (array.length <= 1) return [];

  const animations: AnimationArrayType = [];
  const auxiliaryArray = array.slice();
  runBucketSort(auxiliaryArray, animations);
  runAnimation(animations);
}
