// Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
// Examples
// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

function LongestWord(sen) {
  let lasstr = "";
  let str = sen.split("");
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "!" && str[i] !== "&") {
      lasstr += str[i];
    }
  }
  lasstr = lasstr.split(" ");
  let max = lasstr[0].length;
  let maxstr = lasstr[0];
  for (let i = 0; i < lasstr.length; i++) {
    if (lasstr[i].length > max) {
      max = lasstr[i].length;
      maxstr = lasstr[i];
    }
  }
  return maxstr;
}
/////It was soooo Haaaard for me
