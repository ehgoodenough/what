import Yaafloop from "yaafloop"
import Dude from "./scripts/Dude.js"
import {FRAME} from "scripts/Constants"

var renderer = PIXI.autoDetectRenderer({
    width: FRAME.WIDTH,
    height: FRAME.HEIGHT,
    transparent: true
})

document.getElementById("frame").appendChild(renderer.view)

class Game extends PIXI.Container {
    constructor() {
        super()
        this.addChild(new Dude())
    }
    update(delta) {
        this.children.forEach((child) => {
            if (child.update instanceof Function) {
                child.update(delta)
            }
        })
    }
}

var game = new Game()

var loop = new Yaafloop(function(delta) {
    game.update(delta)
    renderer.render(game)
})
