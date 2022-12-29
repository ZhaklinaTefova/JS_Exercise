/* EXERCISE 6
One student has 5 exams in the first semester. 
His/Her grades for all of the exams are 10, 6, 8, 9, 6 
respectively. The professor told the students that 
for passing the first semester they must have average of 8. 
The student needs to know whether they have passed the 
semester or not. Alert on screen if the student pass or not!
 */

let grades = [10, 6, 8, 9, 6];
function averageGrades(average) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  average = sum / grades.length;
  if (average > 8) {
    console.log("You have passed!");
    alert("You have passed!");
  } else {
    console.log("You have not passed!");
    alert("You have not passed!");
  }
}
averageGrades();
