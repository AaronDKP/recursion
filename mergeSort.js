function mergeSort(array){

    if(array.length == 0){
        return 'Error | Empty Array entered'
    } else if (array.length == 1){
        return array;
    }

    const half = Math.ceil(array.length / 2);
    const firstHalf = array.slice(0, half);
    const secondHalf = array.slice(half);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));



    function merge(firstArray, secondArray){
        let mergedArr = [];
        let elementCount = firstArray.length += secondArray.length;
        let j = 0;

        for (let i = 0; mergedArr.length < elementCount;){
            if(firstArray[i] < secondArray[j] || secondArray[j] == undefined){
                mergedArr.push(firstArray[i]);
                i++;
            } else {
                mergedArr.push(secondArray[j]);
                j++;
            }
        }
        
        return mergedArr;
    }

}

console.log(mergeSort([2,8,15,17,5,9,12,18]));