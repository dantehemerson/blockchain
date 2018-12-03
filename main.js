const Blockchain = require('./core/Blockchain')
const Block = require('./core/Block')

const Chain = new Blockchain()

console.log('== Hello Minerito ==\n\n')

let i = 1
for(; i < 10; i++) {
	console.log('Mining...')
	Chain.addBlock(new Block(i, new Date().toString(), `This is block ${i}`))
}

for(; i < 20; i++) {
	// Mine async here
}

console.log(JSON.stringify(Chain, null, 4))
console.log(`Is blockchain valid? ${Chain.checkValid().toString()}`)
