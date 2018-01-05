type val = string | number | boolean;

export function getUnique(...elements: val[]): val[] {
    const uniqueArr: val[] = [];
    elements.forEach((item: val, i: number) => {
        if (uniqueArr.indexOf(item) === -1) {
            uniqueArr.push(item);
        }
    });
    return uniqueArr;
}