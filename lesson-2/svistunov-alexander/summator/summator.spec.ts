import { expect } from 'chai';
import { summator } from './summator';

describe('summator function', () => {
    it(`should return 10 summator(1, 2, 3, 4)`, () => {
        expect(summator(1, 2, 3, 4)).to.equal(10);
    });
    it(`should return 34.5 summator('1.5', '20', 13)`, () => {
        expect(summator('1.5', '20', 13)).to.equal(34.5);
    });
});