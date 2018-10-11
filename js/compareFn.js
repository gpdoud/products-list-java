function sort(array, field) {
    var column = field;
    return array.sort(compareFn);

    function compareFn(a, b) {
        a = Number(a[column]);
        b = Number(b[column]);
        if(a === b) return 0;
        return a - b;
    }

}