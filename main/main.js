module.exports = function main() {
    let val = arguments[0]
    let len = val.length
    let zero = '._.|.||_|'
    let one = '.....|..|'
    let tow = '._.._||_.'
    let three = '._.._|._|'
    let four = '...|_|..|'
    let five = '._.|_.._|'
    let six = '._.|_.|_|'
    let seven = '._...|..|'
    let eight = '._.|_||_|'
    let nine = '._.|_|..|'
    let ans = []

    function painting(frequency, number) {
        return number.slice(frequency * 3, frequency * 3 + 3)
    }


    for(let j = 0; j < 3; j ++) {
        let res = ''
        for(let i = 0; i < len; i ++) {
            let digit = parseInt(val[i])
            switch(digit) {
                case 0:
                    res += painting(j, zero)
                    break;
                case 1:
                    res += painting(j, one)
                    break;
                case 2:
                    res += painting(j, tow)
                    break;
                case 3:
                    res += painting(j, three)
                    break;
                case 4:
                    res += painting(j, four)
                    break;
                case 5:
                    res += painting(j, five)
                    break;
                case 6:
                    res += painting(j, six)
                    break;
                case 7:
                    res += painting(j, seven)
                    break;
                case 8:
                    res += painting(j, eight)
                    break;
                case 9:
                    res += painting(j, nine)
                    break;
                default:
                    break;
            }
            if(i !== len - 1) res += ' '
        }
        ans.push(res)
    }
    return ans.join('\n') + '\n'
};
