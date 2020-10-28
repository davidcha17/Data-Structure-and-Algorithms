function reverse(int) {
    let reverse = 0;
    let negative = x < 0;

    if(negative) {
        int *= -1;
    }

    while(x > 0) {
        reversed = (reversed * 10) + (int % 10);
        int = Math.floor(int / 10);
    }

    if(int > (2 ** 31 - 1)) {
        return 0;
    }

    return negative ? (reversed * -1) : reversed
}
/*
For this problem, were asked to reverse an integer. This is one of the ways to do it
in a math base solution. Were taking the result and multiplying it by 10 and adding
the remainder of int / 10. Then we divide the int by 10 to remove the added number
and we keep repeating until int is less than zero
 */

var reverse2 = function(x) {
    const sign = Math.sign(x) * 1
    let value = sign*x, result = 0, limit = Math.pow(2, 31)
    while (value != 0) {
        const pop = Math.floor(value % 10)
        value = (value / 10) << 0
        result = (result * 10) + pop
        if (result > limit || result < -limit) return 0
    }
    return result * sign
};

var reverse3 = function(x) {
    const max = Math.pow(2, 31) - 1
    const min = Math.pow(-2, 31)
    const sign = Math.sign(x)
    const num = (x * sign).toString().split('').reverse().join('')
    const result = Number(num) * sign
    return result > min && result < max ? result : 0
};