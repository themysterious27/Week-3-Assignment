let students = [
  { name: 'Prince', age: 22, scores: [78, 85, 92] },
  { name: 'Suraj', age: 20, scores: [88, 90, 76] },
  { name: 'Muskan', age: 19, scores: [95, 80, 85] }
];

function analyzeStudents(data) {

  let topStudent = "";
  let highestAverage = 0;

  for (let i = 0; i < data.length; i++) {

    let scores = data[i].scores;
    let sum = 0;

    for (let j = 0; j < scores.length; j++) {
      sum += scores[j];
    }

    let avg = sum / scores.length;

    console.log(data[i].name + " Average Score: " + avg.toFixed(2));

    if (avg > highestAverage) {
      highestAverage = avg;
      topStudent = data[i].name;
    }

  }

  console.log("Top Student:", topStudent, "with an average score of", highestAverage.toFixed(2));
}

analyzeStudents(students);