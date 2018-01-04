type val = string | number | boolean;

export function isInArray(arr: val[], ...elements: val[]): boolean {
    return elements.every((item: val) => arr.indexOf(item) > -1);
}