import * as Pixi from "pixi.js"
import Yaafloop from "yaafloop"
import Dude from "./scripts/Dude.js"

const WIDTH = 640
const HEIGHT = 360

var renderer = Pixi.autoDetectRenderer({
    width: WIDTH, height: HEIGHT, transparent: true
})

document.getElementById("frame").appendChild(renderer.view)

var sprite = new Dude()

var loop = new Yaafloop(function(delta) {
    sprite.update(delta)
    renderer.render(sprite)
})
