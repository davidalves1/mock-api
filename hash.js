const crypto = require('crypto')

module.exports = (algo = 'sha1') => {
  const salt = Math.round(Math.random() * 100)
  const timestamp = new Date().getTime()
  const generator = crypto.createHash(algo)

  generator.update(`${timestamp}${salt}`)

  return generator.digest('hex')
}
