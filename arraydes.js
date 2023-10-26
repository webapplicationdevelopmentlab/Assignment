const arr = [3, 8, 1, 10, 4, 9];
for (i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[j] > arr[i]) {
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);
