import { expect } from 'chai';
import { isInArray } from './is-in-array/is-in-array';
import { getUnique } from './get-unique/get-unique';
import { summator } from './summator/summator';

describe('isInArray function', () => {
    it('should return false isInArray([1, 2, 3], 1, 2, 3, 4)', () => {
       const result: boolean = isInArray([1, 2, 3], 1, 2, 3, 4);
       expect(result).to.equal(false);
    });
    it('should return true isInArray([1, 2, 3], 1, 2, 3)', () => {
        const result: boolean = isInArray([1, 2, 3], 1, 2, 3);
        expect(result).to.equal(true);
    });
    it('should return [ 1 ] getUnique(1, 1, 1, 1)', () => {
        const result: number[] = getUnique('1', '2', '1', '1');
        expect(getUnique('1', '2', '1', '1')).to.equal(result);
    });
    it(`should return 10 summator(1, 2, 3, 4)`, () => {
        expect(summator(1, 2, 3, 4)).to.equal(10);
    });
    it(`should return 34.5 summator('1.5', '20', 13)`, () => {
        expect(summator('1.5', '20', 13)).to.equal(34.5);
    });
});