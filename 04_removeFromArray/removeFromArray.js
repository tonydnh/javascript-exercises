const removeFromArray = function(arr, ...list) {
    for (const itemToRemove of list) {
        arr = arr.filter(item => item !== itemToRemove)
    }
    return arr
    
    // return arr.filter(item => !list.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
