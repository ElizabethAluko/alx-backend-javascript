export default function getListStudentIds(object_array) {
  key = []
  if type(object_array) is not list:
    return key
  for i in range(len(object_array)):
    key.append(object_array[i].key)
  return key
}
