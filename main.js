import {createPlane} from "./plane.js"
import {updatePhysics} from "./flightPhysics.js"
import {setupControls} from "./controls.js"
import {createCloudLayer} from "./clouds.js"

Cesium.Ion.defaultAccessToken = "YOUR_CESIUM_TOKEN"

const viewer = new Cesium.Viewer("cesiumContainer",{

terrainProvider: Cesium.createWorldTerrain(),

shouldAnimate:true,

timeline:false,
animation:false

})

viewer.scene.globe.enableLighting = true

let plane = createPlane()

let speed = 0

let controls = setupControls()

let lon = -122.4
let lat = 37.6
let altitude = 2000

let pitch = 0
let roll = 0
let yaw = 0

createCloudLayer(viewer)

function updatePlane(){

speed = updatePhysics(speed,controls)

if(controls.pitchUp) pitch += 0.002
if(controls.pitchDown) pitch -= 0.002

if(controls.rollLeft) roll += 0.002
if(controls.rollRight) roll -= 0.002

if(controls.yawLeft) yaw += 0.001
if(controls.yawRight) yaw -= 0.001

lon += Math.sin(yaw)*speed*0.1
lat += Math.cos(yaw)*speed*0.1

altitude += pitch * speed * 100

viewer.camera.setView({

destination: Cesium.Cartesian3.fromDegrees(
lon,
lat,
altitude
),

orientation:{
heading:yaw,
pitch:-0.3+pitch,
roll:roll
}

})

}

viewer.clock.onTick.addEventListener(updatePlane)
