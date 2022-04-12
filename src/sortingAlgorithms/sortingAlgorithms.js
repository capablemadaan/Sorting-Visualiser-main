export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([i, i]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([i, i]);
    // We overwrite the value at index k in the original array with the
    // value at index i in the auxiliary array.
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // These are the values that we're comparing; we push them once
    // to change their color.
    animations.push([j, j]);
    // These are the values that we're comparing; we push them a second
    // time to revert their color.
    animations.push([j, j]);
    // We overwrite the value at index k in the original array with the
    // value at index j in the auxiliary array.
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
export function getBubbleSort(array){

  const animation=[];
  if(array.length===1)return array;
  bubblesorthelper(array,animation);
  return animation;
}

function bubblesorthelper(mainarray,animation)
{
  for(let i=0;i<mainarray.length-1;i++)
  {
      for(let j=0;j<mainarray.length-1-i;j++)
      {
          animation.push([j,j+1]);
          animation.push([j,j+1]);
          if(mainarray[j]>=mainarray[j+1])
          {
              animation.push([j,mainarray[j+1]]);
              animation.push([j+1,mainarray[j]]);
              const crap=mainarray[j];
              mainarray[j]=mainarray[j+1];
              mainarray[j+1]=crap;
          }
          else
          {
              animation.push([j,mainarray[j]]);
              animation.push([j+1,mainarray[j+1]]);
          }
      }
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  QuickSortHelper(array, 0, array.length - 1,animations);
  return animations;
}

function QuickSortHelper(
  mainArray,
  startIdx,
  endIdx,
  animations
) {
  if (startIdx < endIdx) {
  const pivot = partition(mainArray,startIdx,endIdx,animations);
  QuickSortHelper(mainArray, startIdx, pivot -1 , animations);
  QuickSortHelper(mainArray, pivot + 1, endIdx, animations);
  //doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
}

function partition(
  mainArray,
  startIdx,
  endIdx,
  animations
)  {
   const pivot = mainArray[endIdx];
   let i = startIdx -1;
   for(let j=startIdx; j<endIdx ; j++)
   {
    animations.push([j,endIdx]);
    animations.push([j,endIdx]); 
    if(mainArray[j]< pivot){
       i++;
       animations.push([j,mainArray[i]]);
       animations.push([i,mainArray[j]]);
       const crap = mainArray[i];
       mainArray[i] =mainArray[j];
       mainArray[j] = crap ;
     }
     else{
       i++;
       animations.push([j,mainArray[j]]);
       animations.push([i,mainArray[i]]);
       i--;
     }
   }
   animations.push([i+1,endIdx]);
   animations.push([i+1,endIdx]);
   animations.push([endIdx,mainArray[i+1]]);
   animations.push([i+1,mainArray[endIdx]]);
   const crap = mainArray[i+1];
   mainArray[i+1] =mainArray[endIdx];
   mainArray[endIdx] = crap ;
   return i+1;
}

export function getInsertionSortAnimations(array){

  const animation=[];
  if(array.length===1)return array;
  InsertionSorthelper(array,animation);
  return animation;
}

function InsertionSorthelper(mainarray,animation)
{
  for(let i=1;i<mainarray.length;i++)
  {
    const key = mainarray[i]; 
    let j=i-1; 
    while (j>=0 && mainarray[j]>key)
      {
          animation.push([j,i]);
          animation.push([j,i]);
          animation.push([j+1,mainarray[j]]);
          mainarray[j+1]=mainarray[j];
          j--;
      }
      animation.push([j+1,i]);
      animation.push([j+1,i]);
      animation.push([j+1,key]);
      mainarray[j+1] =key;
  }
}
