export function createCloudLayer(viewer){

for(let i=0;i<100;i++){

let lon = Math.random()*360-180
let lat = Math.random()*180-90

viewer.entities.add({

position:Cesium.Cartesian3.fromDegrees(
lon,
lat,
5000+Math.random()*2000
),

ellipse:{
semiMinorAxis:2000,
semiMajorAxis:2000,
material:Cesium.Color.WHITE.withAlpha(0.6)
}

})

}

}
