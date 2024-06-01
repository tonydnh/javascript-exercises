const fibonacci = function(tgt) {
    if (tgt < 0) return "OOPS";
    let nextLatest = 0;
    let latest = 1;

    for (let i = 0; i < tgt; i++) {
        let temp = latest + nextLatest;
        nextLatest = latest;
        latest = temp;
    }
    
    return nextLatest;
};

// Do not edit below this line
module.exports = fibonacci;
