import { expect } from 'chai';
import { isInArray } from './is-in-array';

describe('isInArray function', () => {
   it('should return false isInArray([1, 2, 3], 1, 2, 3, 4)', () => {
       const result: boolean = isInArray([1, 2, 3], 1, 2, 3, 4);
       expect(result).to.equal(false);
   });
    it('should return true isInArray([1, 2, 3], 1, 2, 3)', () => {
        const result: boolean = isInArray([1, 2, 3], 1, 2, 3);
        expect(result).to.equal(true);
    });
});