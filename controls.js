export function setupControls(){

let keys={}

window.addEventListener("keydown",e=>keys[e.key]=true)
window.addEventListener("keyup",e=>keys[e.key]=false)

return{

get throttleUp(){return keys["w"]},
get throttleDown(){return keys["s"]},

get rollLeft(){return keys["a"]},
get rollRight(){return keys["d"]},

get pitchUp(){return keys["ArrowUp"]},
get pitchDown(){return keys["ArrowDown"]},

get yawLeft(){return keys["ArrowLeft"]},
get yawRight(){return keys["ArrowRight"]}

}

}
