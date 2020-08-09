import { expect } from 'chai';
import { is_even, is_even_async } from '../../src/util/even_checker';

describe('even_validate', () => {
    it('sync function even validate', () => {
        expect(is_even(2)).to.be.true;
        expect(is_even(3)).to.be.false;
    });

    it('async function even validate', async () => {
        expect(await is_even_async(2)).to.be.true;
        expect(await is_even_async(3)).to.be.false;
    });
});