const hash = require('./hash')

describe('hash', () => {
  it('should be return a sha1 hash by default', () => {
    expect(hash().length).toBe(40);
  })

  it('should be return a corretct hash called', () => {
    expect(hash('sha256').length).toBe(64);
  })
})
