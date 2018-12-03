const crypto = require('crypto')
const hash = crypto.createHash('sha256')

export default class Block {
	constructor(index, timestamp, data, previousHash="") {
		this.index = index
		this.timestamp = timestamp
		this.data = data
		this.previousHash
		this.hash = this.calculateHash()
		this.nonce = 0
	}
	
	calculateHash() {
		hash.update(this.index + this.previousHash + this.timestamp + 
												JSON.stringify(this.data) + this.nonce)
		return hash.digest('base64')
	}
}
