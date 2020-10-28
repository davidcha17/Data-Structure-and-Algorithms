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