import * as Pixi from "pixi.js"
import Keyb from "keyb"

Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST
var texture = Pixi.Texture.from(require("images/dude.png"))

export default class Dude extends Pixi.Sprite {
    constructor() {
        super(texture)
        
        this.scale.x = 5
        this.scale.y = 5
        
        this.anchor.x = 0.5
        this.anchor.y = 0.5
        
        this.position.x = Math.random() * 320
        this.position.y = Math.random() * 240
        
        this.speed = {
            movement: 100, // per second
            rotation: Math.PI / 16 // per second
        }
    }
    update(delta) {
        this.rotation += this.speed.rotation * delta.s
        
        if (Keyb.isDown("W")) {
            this.position.y -= this.speed.movement * delta.s
        }
        if (Keyb.isDown("S")) {
            this.position.y += this.speed.movement * delta.s
        }
        if (Keyb.isDown("A")) {
            this.position.x -= this.speed.movement * delta.s
        }
        if (Keyb.isDown("D")) {
            this.position.x += this.speed.movement * delta.s
        }
    }
}
