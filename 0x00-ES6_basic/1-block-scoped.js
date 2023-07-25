export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    /* Do not change the values */
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}
