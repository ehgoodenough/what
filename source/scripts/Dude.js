import * as Pixi from "pixi.js"
import Keyb from "keyb"
import {FRAME} from "scripts/Constants"

Pixi.settings.SCALE_MODE = Pixi.SCALE_MODES.NEAREST
var texture = Pixi.Texture.from(require("images/dude.png"))

export default class Dude extends Pixi.Sprite {
    constructor() {
        super(texture)
        
        this.scale.x = 5
        this.scale.y = 5
        
        this.anchor.x = 0.5
        this.anchor.y = 0.5
        
        this.position.x = FRAME.WIDTH / 2
        this.position.y = FRAME.HEIGHT / 2
        
        this.speed = {
            movement: 100, // per second
            rotation: Math.PI / 16 // per second
        }
    }
    update(delta) {
        this.rotation += this.speed.rotation * delta.s
        
        if (Keyb.isDown("W")) {
            this.position.y -= this.speed.movement * delta.s
            this.tint = 0xFF0000
        }
        if (Keyb.isDown("S")) {
            this.position.y += this.speed.movement * delta.s
            this.tint = 0x00FF00
        }
        if (Keyb.isDown("A")) {
            this.position.x -= this.speed.movement * delta.s
            this.tint = 0x0000FF
        }
        if (Keyb.isDown("D")) {
            this.position.x += this.speed.movement * delta.s
            this.tint = 0xFFFFFF
        }
    }
}
