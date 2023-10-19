const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');
    let students = 0;
    const fields = {};

    for (const line of lines) {
      const studentData = line.split(',');
      if (studentData.length === 4) {
        students++;
        const field = studentData[3].trim();
        const name = studentData[0].trim();
        if (fields[field] === undefined) {
          fields[field] = [];
        }
        fields[field].push(name);
      }
    }

    console.log(`Number of students: ${students}`);

    for (const field in fields) {
      const studentCount = fields[field].length;
      const studentList = fields[field].join(', ');
      console.log(`Number of students in ${field}: ${studentCount}. List: ${studentList}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error('Cannot load the database');
    } else {
      throw error;
    }
  }
}

module.exports = countStudents;
