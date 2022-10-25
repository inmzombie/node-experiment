import {get} from './url.js';

describe('url', () => {
    it('should empty arg expect to receives \'\'', () => {
        expect(get('')).toBe('');
    });
    it('should null arg expect to receives \'\'', () => {
        expect(get(null)).toBe('');
    });
    it('should translate param expect to receives \'https://google-translate1.p.rapidapi.com/language/translate/v2\'', () => {
        expect(get('translate')).toBe('https://google-translate1.p.rapidapi.com/language/translate/v2');
    });
});
