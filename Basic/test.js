// Linear Searching 
unsortedArr = [-3,1,9,2,3]
sortedArr = [-3,1,2,3,9]
const len = sortedArr.length

const res = sortedArrFun(sortedArr, 4 , len)
console.log("Result for sorting",res)

function sortedArrFun(arr,key,len) {
    for(let i = 0 ; i < len;i++) {
        if (arr[i] == key) {
            return true;
        } else if(arr[i] > key) {
            return false
        }
    }
}