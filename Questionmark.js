function QuestionsMarks(str) {
  // code goes here
  let count = 0;
  for (i in str) {
    if (str[i].indexOf("?") !== -1) {
      count += 1;
    }
  }
  if (count >= 3) {
    return true;
  }
  return false;
}
