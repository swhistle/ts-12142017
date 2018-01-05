import { isString } from 'util';

type sn = string | number;

export function summator(...elements: sn[]): number {
    return elements.reduce((previousValue: number, currentValue: sn) => {
        if (isString(currentValue)) {
            return previousValue + parseFloat(currentValue);
        } else {
            return previousValue + currentValue;
        }
    }, 0);
}