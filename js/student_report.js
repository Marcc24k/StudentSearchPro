var message = '';
var student;
var search;
var badName = 'I\'m sorry ' +  search + ' was never born. are you ok?';

//Message print
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

//Grab student data
function getStudentReport( student ) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  return report;
}

//Run prompt , compare, loop and print message. 
while (true) {
  search = prompt('Search student records: type a name or type quit to end');
  if ( search === null || search.toLowerCase() === 'quit'){
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];

//The statement below checks to see if the name entered matchs any of the students names.
  if ( student.name.toLowerCase() !== search ) {
      message = getStudentReport( student );
      print(badName);

      }
  // The .toLowerCase() statement enables us to input lowerCase when searching students.
  if ( student.name.toLowerCase() === search){
      message = getStudentReport( student );
      print(message);
    break;
    }
    if ( student.name.toLowerCase() === search ){
      message = getStudentReport( student );
      print(message)

    }
  }
}


/***Bugs to fix 

-Fix string issue with badName-Keeps returning undefined. 

-write code that is able to tell the difference between two users with the same name

-Make box background stand out from body background, maybe with canvas?

-Maybe instead of prompt search make it just a search bar or both




=======================================================================================

// Bugs that have been fixed

-Hide user decription until mouse hover. Then transition along with bubble then fade away once 
user moves or times out.

-Make user name transition gradually when hovered instead of drastic switch---I also want user descriptions in the box/avatar

-Marc is unsearchable. Fix this issue

-Write prompt input take lower and upper case values

-Write Error alert for when program cannot find user

***/