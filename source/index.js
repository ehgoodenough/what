import * as Pixi from "pixi.js"
import Yaafloop from "yaafloop"

const WIDTH = 640
const HEIGHT = 360

var renderer = Pixi.autoDetectRenderer({
    width: WIDTH, height: HEIGHT, transparent: true
})

document.getElementById("frame").appendChild(renderer.view)

var texture = Pixi.Texture.from(require("./images/dude.png"))
var sprite = new Pixi.Sprite(texture)

var loop = new Yaafloop(function(delta) {
    sprite.position.x += 1 * delta.f
    renderer.render(sprite)
})
