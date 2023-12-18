function gradingStudents(marks) {
  //Use of conditional statement if
  if (marks > 79 && marks <= 100) {
    console.log('Your grade is A');
  }
  //Use of conditional statement else if
   else if (marks > 60 && marks <= 79) {
    console.log('Your grade is B');
  } 
  else if (marks > 49 && marks <= 59) {
    console.log('Your grade is C');
  }
   else if (marks > 40 && marks <= 49) {
    console.log('Your grade is D');
  }
   else if (marks >= 0 && marks < 40) {
    console.log('Your grade is E');
  }
   else {
    console.log('Not passing');
  }
}
//To call the function to input the required grade
gradingStudents(30); // This will print "Your grade"
