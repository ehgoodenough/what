import * as Pixi from "pixi.js"

const WIDTH = 640
const HEIGHT = 360

var renderer = Pixi.autoDetectRenderer({
  width: WIDTH, height: HEIGHT, transparent: true
})

document.getElementById("frame").appendChild(renderer.view)
