const repeatString = function(string, num) {
    let res = ''
    if (num >= 0) {
        for (let i = 0; i < num; i++) {
            res += string
        }
    } else {
        return 'ERROR'
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
