const hash = require('./hash')

describe('hash', () => {
  it('should be return a sha1 hash by default', () => {
    expect(hash().length).toBe(40);
  })

  it('should be return a valid md5 hash called', () => {
    expect(hash('md5').length).toBe(32);
  })

  it('should be return a valid sha256 hash', () => {
    expect(hash('sha256').length).toBe(64);
  })
})
