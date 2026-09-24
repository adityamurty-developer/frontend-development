function binary_search(arr, size, key){
    let start = 0;
    let end = size - 1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === key){
            return mid;
        } else if(arr[mid] > key){
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((start + end)/2);
    }
}

let arr = [10, 20, 30, 40, 50];
let size = arr.length;
let key = 40;

let result = binary_search(arr, size, key);
console.log(`key is at index: ${result}`);