var message = '';
var student;
var search;
var badName = 'I\'m sorry  ' + search + ' does not exist';

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
  if ( search.toLowerCase() === null || search.toLowerCase() === 'quit'){
    break;
  }
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  
  if ( student.name === search){
      message = getStudentReport( student );
      print(message);
}else{
    print(badName);
  



       
    }
  }
}



/***
Bugs to fix

-Make prompt input take lower and upper case values

-Make user name transition gradually when hovered instead of drastic switch---I also want user descriptions in the box/avatar

-write code that is able to tell the difference between two users with the same name

-Make box background stand out from body background, maybe with canvas?

-Maybe instead of prompt search make it just a search bar or both

-Make Error alert code for when program cannot find user--for some reaosn I cannot get this to work. All names return undefined except trish...How come?
***/