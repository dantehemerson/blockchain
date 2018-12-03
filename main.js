const Blockchain = require('./core/Blockchain')
const Block = require('./core/Block')

const Chain = new Blockchain()

let i = 1
for(; i < 10; i++) {
	console.log('Mining...')
	Chain.addBlock(new Block(i, new Date().toString(), `This is block ${i}`))
}
