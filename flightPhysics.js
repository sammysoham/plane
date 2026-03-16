export function updatePhysics(speed,controls){

if(controls.throttleUp) speed += 0.01
if(controls.throttleDown) speed -= 0.01

speed = Math.max(0.1,Math.min(speed,3))

let drag = speed * 0.002

speed -= drag

return speed
}
