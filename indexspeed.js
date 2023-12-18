const speedLimit = 70
 
let prompt = require('prompt-sync')();
//
// get input from the user.

let speed = prompt('input speed: ');
// use conditional statement if and else if
if(speed <= 70){
    console.log('Ok')
}
else{
    const demeritPoints = Math.floor((speed - speedLimit)/5)
    // we use math floor to round off to the smallest number
if (demeritPoints >12){
    console.log('License Suspended')
}
else{
    console.log(`points${demeritPoints}`)
}
}