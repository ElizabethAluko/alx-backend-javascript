export default function getStudentIdsSum(students) {
  return students.id.reduce((sum, id) => sum + id, 0);
}
