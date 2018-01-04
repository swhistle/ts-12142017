type val = string | number | boolean;

function getUnique(...elements: val[]): val[] {
    const uniqueArr: val[] = [];
    elements.forEach((item: val, i: number) => {
        if (uniqueArr.indexOf(item) === -1) {
            uniqueArr.push(item);
        }
    });
    return uniqueArr;
}

getUnique(1, 2, 1, 2, 3);
getUnique(5, true, '1', 1 > 0, 'qqq', 5, 'qqq');
getUnique(5, false, '1', 1 > 0, '1', 5 > 6, '1');