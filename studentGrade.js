const marksInput = document.getElementById('marksInput'); //input element

function outputGrade(){
    let errorMessage="";
    const gradeDisplay = document.getElementById('gradeDisplay'); //output HTML element
    let grade;
    const marks = parseFloat(marksInput.value); //get value from input field


     if (isNaN(marks) || marks < 0 || marks > 100){ //not a number or less than or greater than 0
         errorMessage ='Enter Valid marks';
     } else {
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60 && marks <= 79) {
            grade = "B";
        } else if (marks >= 50 && marks <= 59) {
            grade = "C";
        } else if (marks >= 40 && marks <= 49) {
            grade = "D";
        } else {
            grade = "E";
        }
    }

    if (errorMessage.length === 0) {
        gradeDisplay.textContent = 'Grade: ' + grade;
    } else {
        gradeDisplay.textContent = errorMessage;
        }

};


