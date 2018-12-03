const crypto = require('crypto')

module.exports = class Block {
	constructor(index, timestamp, data, previousHash="") {
		this.index = index
		this.timestamp = timestamp
		this.data = data
		this.previousHash
		this.hash = this.calculateHash()
		this.nonce = 0
	}
	
	calculateHash() {
		const hash = crypto.createHash('sha256')
		hash.update(this.index + this.previousHash + this.timestamp + 
												JSON.stringify(this.data) + this.nonce)
		return hash.digest('hex')
	}

	mineBlock(difficulty) {
		while(this.hash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
			this.nonce++
			this.hash = this.calculateHash()
		}
		console.log("Block mined: " + this.hash)
	}

}
