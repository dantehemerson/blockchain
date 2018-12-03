const crypto = require('crypto')

test('SHA256 hex encoding', () => {
	const hash = crypto.createHash('sha256')
	expect(hash.update('').digest('hex')).toBe('e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855')
})

test('SHA256 result for a', () => {
	const hash = crypto.createHash('sha256')
	expect(hash.update('a').digest('hex')).toBe('ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb')
})
