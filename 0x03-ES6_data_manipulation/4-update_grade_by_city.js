export default function updateStudentGradeByCity(students, city, newGrade) {
  const studentsByCity = students.filter((student) => student.location === city);
  for (const student of studentsByCity) {
    student.grade = 'N/A';
  }
  const studentByGrade = studentsByCity.map((student) => {
    const single = student;
    for (const grade of newGrade) {
      if (single.id === grade.studentId) {
        single.grade = grade.grade;
      }
    }
    return single;
  });
	  
  return studentByGrade;
}
