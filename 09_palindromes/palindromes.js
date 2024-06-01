const palindromes = function (str) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    str = str
        .toLowerCase()
        .split("")
        .filter(character => alphanumerical.includes(character))
        .join("");

    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
