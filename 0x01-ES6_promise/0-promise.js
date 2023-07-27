export default getResponseFromAPI() {
  const success = True;
  return new Promise ((resolve, reject) => {
    if (success) {
      resolve();
    } else {
      reject();
    }
 )}
}
