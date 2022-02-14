import { validUsername } from '@/utils/validate';

describe('Utils => validate', () => {
    it('validUsername', () => {
        expect(validUsername('admin')).toBe(true);
        expect(validUsername('editor')).toBe(true);
        expect(validUsername('xxxx')).toBe(false);
    });
});
