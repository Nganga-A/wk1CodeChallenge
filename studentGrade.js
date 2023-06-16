const marks=14;
let errorMessage="";
let grade;

if (marks < 0 || marks > 100){
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

function outputGrade(){
if (errorMessage.length ===0) {
    console.log(grade);
} else {
    console.log(errorMessage);
};
};

outputGrade();