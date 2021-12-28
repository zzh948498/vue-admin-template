import crypto from 'crypto';

export function createMd5(text) {
    const md5 = crypto.createHash('md5');
    md5.update(text);
    return md5.digest('hex');
}
