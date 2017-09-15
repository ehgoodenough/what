import * as Pixi from "pixi.js"

Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST
var texture = Pixi.Texture.from(require("images/dude.png"))

export default class Dude extends Pixi.Sprite {
    constructor() {
        super(texture)
        
        this.scale.x = 5
        this.scale.y = 5
        
        this.anchor.x = 0.5
        this.anchor.y = 0.5
        
        this.position.x = 32
        this.position.y = 32
    }
    update(delta) {
        this.position.x += 1 * delta.f
        this.rotation += Math.PI / 16 * delta.f
    }
}
