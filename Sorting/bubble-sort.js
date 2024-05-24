function bubbleSort(array) {
    for (let i = array.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]] //swapping two elements

                // or another way to swap elements
                // let temp = array[j]
                // array[j] = array[j + 1]
                // array[j + 1] = temp
            }
        }
    }

    return array
}

console.log(bubbleSort([4, 2, 6, 5, 1, 3]))

// Average-case time complexity and Worst time complexity is O(n^2) => n*(n-1)/2
// Best time complexity is O(n) => if array already is sorted