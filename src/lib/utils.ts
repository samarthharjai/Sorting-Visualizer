import { generateBubbleSortAnimationArray } from "@/algorithms/bubbleSort";
import { generateInsertionSortAnimationArray } from "@/algorithms/insertionSort";
import { generateMergeSortAnimationArray } from "@/algorithms/mergeSort";
import { generateQuickSortAnimationArray } from "@/algorithms/quickSort";
import { generateSelectionSortAnimationArray } from "@/algorithms/selectionSort";
import { SortingAlgorithmType } from "./types";
import { generateHeapSortAnimationArray } from "@/algorithms/heapSort";
import { generateShellSortAnimationArray } from "@/algorithms/shellSort";
import { generateRadixSortAnimationArray } from "@/algorithms/radixSort";
import { generateBucketSortAnimationArray } from "@/algorithms/bucketSort";
import { generateCombSortAnimationArray } from "@/algorithms/combSort";
import { generateTimSortAnimationArray } from "@/algorithms/timSort";

export function generateRandomNumberFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const MNI_ANIMATION_SPEED = 100;
export const MAX_ANIMATION_SPEED = 400;

export const algorithmOptions = [
  { label: "Bubble", value: "bubble" },
  { label: "Quick", value: "quick" },
  { label: "Merge", value: "merge" },
  { label: "Insertion", value: "insertion" },
  { label: "Selection", value: "selection" },
  {label: "Heap", value: "heap"},
  { label: "Shell", value: "shell" },
  { label: "Radix", value: "radix"},
  { label: "Bucket", value: "bucket"},
  { label: "Comb", value: "comb"},
  { label: "Tim", value: "tim"},
];

export function generateAnimationArray(
  selectedAlgorithm: SortingAlgorithmType,
  isSorting: boolean,
  array: number[],
  runAnimation: (animations: [number[], boolean][]) => void
) {
  switch (selectedAlgorithm) {
    case "bubble":
      generateBubbleSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "quick":
      generateQuickSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "merge":
      generateMergeSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "insertion":
      generateInsertionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "selection":
      generateSelectionSortAnimationArray(isSorting, array, runAnimation);
      break;
    case "heap":
        generateHeapSortAnimationArray(isSorting, array, runAnimation)
    case "shell":
        generateShellSortAnimationArray(isSorting, array, runAnimation)
    case "radix":
      generateRadixSortAnimationArray(isSorting, array, runAnimation);
    case "bucket":
      generateBucketSortAnimationArray(isSorting, array, runAnimation);
    case "comb":
      generateCombSortAnimationArray(isSorting, array, runAnimation);
    case "tim": // Add case for tim sort
      generateTimSortAnimationArray(isSorting, array, runAnimation);
    default:
      break;
  }
}

export const sortingAlgorithmsData = {
  bubble: {
    title: "Bubble Sort",
    description:
      "A simple comparison-based sorting algorithm. Bubble sort repeatedly compares and swaps adjacent elements if they are in the wrong order, moving larger elements towards the end with each pass through the list. This process continues until the list is sorted and no more swaps are needed.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  insertion: {
    title: "Insertion Sort",
    description:
      "Insertion sort builds the final sorted array one element at a time, by repeatedly taking the next unsorted element and inserting it into its correct position among the previously sorted elements. This process continues until all elements have been inserted into their proper place, resulting in a sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n)",
  },
  selection: {
    title: "Selection Sort",
    description:
      "Selection sort works by repeatedly finding the minimum element from the unsorted portion of the list and swapping it with the element at the current position. This process is continued for each position in the list, moving the boundary of the sorted and unsorted portions one element forward each time until the entire list is sorted.",
    worstCase: "O(n²)",
    averageCase: "O(n²)",
    bestCase: "O(n²)",
  },
  merge: {
    title: "Merge Sort",
    description:
      "Merge sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), and then repeatedly merges these sublists to produce new sorted sublists until there is only one sublist remaining, which is the sorted list. This algorithm uses a divide-and-conquer approach, splitting the list in half recursively and merging the sorted halves back together.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  quick: {
    title: "Quick Sort",
    description:
      "Quick sort selects a 'pivot' element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively, and the sorted sub-arrays are combined with the pivot to form the sorted array.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  heap: {
    title: "Heap Sort",
    description: 
    "Heap sort builds a max heap from the input data, then repeatedly extracts the maximum element from the heap and rebuilds the heap until it's empty. This results in a sorted array.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  shell: {
    title: "Shell Sort",
    description:
      "Shell sort is an optimization of insertion sort that allows the exchange of far apart elements to improve performance. It uses a gap sequence to reduce the number of swaps required.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  radix: { 
    title: "Radix Sort",
    description:
      "Radix sort is a non-comparative sorting algorithm that sorts integers by processing individual digits. It uses counting sort as a subroutine to sort the digits.",
    worstCase: "O(nk)",
    averageCase: "O(nk)",
    bestCase: "O(nk)",
  },
  bucket: {
    title: "Bucket Sort",
    description:
      "Bucket sort distributes the elements into several buckets, sorts each bucket individually (using another sorting algorithm), and then merges the buckets to get the sorted list.",
    worstCase: "O(n²)",
    averageCase: "O(n+k)",
    bestCase: "O(n+k)",
  },
  comb: {
    title: "Comb Sort",
    description:
      "Comb sort is an improvement over bubble sort. It eliminates turtles, or small values near the end of the list, by using a larger gap initially and reducing the gap in each pass.",
    worstCase: "O(n²)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
  tim: { 
    title: "Tim Sort",
    description:
      "Tim sort is a hybrid sorting algorithm derived from merge sort and insertion sort. It is designed to perform well on many kinds of real-world data.",
    worstCase: "O(n log n)",
    averageCase: "O(n log n)",
    bestCase: "O(n log n)",
  },
};
