export default function getListStudentIds(objectArray) {
  if (Array.isArray(objectArray)) {
    return objectArray.map((obj) => obj.id);
  }
  return [];
}
