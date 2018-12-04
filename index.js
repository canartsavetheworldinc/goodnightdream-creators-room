const phaserEl = document.querySelector("#phaser")

const config = {
	width: 800,
	height: 600,
	type: Phaser.AUTO,
	parent: phaserEl,
	scene: {
		preload,
		create,
		update
	}
}

const game = new Phaser.Game(config)

let keys
let cursors
let keySpace
let rect

function preload() {
}

function create() {
	keys = this.input.keyboard.addKeys("A,5")
	cursors = this.input.keyboard.createCursorKeys()
	keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
	
	// rect = new Phaser.Geom.Rectangle(250, 200, 300, 200)
	rect = this.add.rectangle(250, 200, 300, 200)
	const graphics = this.add.graphics({ fillStyle: { color: 0x0000ff } })
	graphics.fillRectShape(rect)
}

function update() {
	if(keys["A"].isDown) {
		console.log("A")
	}
	if(keys["5"].isDown) {
		console.log("5")
	}
	if(keySpace.isDown) {
		console.log("spacebar")
	}
	if(cursors.left.isDown) {
		rect.x += 1
		console.log(rect.x)
	}
	if(cursors.right.isDown) {
		rect.x -= 1
		console.log(rect.x)
	}
}
