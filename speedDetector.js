const speedInput = document.getElementById('speedInput'); //input element
function speedDetect (){
    const speedDisplay = document.getElementById('speedDisplay'); //output HTML element
    const speed = parseFloat(speedInput.value); //get value from input field
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if  (!speedInput.value){ //if no input entered or value of speedInput is falsey,null,empty
        speedDisplay.textContent = 'No input entered';
        return
    }
    
    else if (speed <= speedLimit) {
        speedDisplay.textContent = 'Ok';
        return;

    } else {

         const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint); 
          speedDisplay.textContent = 'Points: ' + demeritPoints;
          
          if (demeritPoints>12) {
            speedDisplay.textContent = 'Licence Expired';
          }
          return;
      }
}
