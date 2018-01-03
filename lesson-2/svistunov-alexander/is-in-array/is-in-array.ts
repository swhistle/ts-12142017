type val = string | number | boolean;

function isInArray(arr: val[], ...elements: val[]): boolean {
    return elements.every((item: val) => arr.indexOf(item) > -1);
}

isInArray([1, 2, 3], 1, 2, 3);
isInArray([1, 2, 3], 3, 2, 1);
isInArray([1, 2, 3], 1, 1, 1);
isInArray([1, 2, 3, 4], 1, 2, 3);
isInArray([1, 2, 3], 1, 2, 3, 4);
isInArray([true, false, 5], true, false);
isInArray(['1', '3', 3 ], '1', '3' );