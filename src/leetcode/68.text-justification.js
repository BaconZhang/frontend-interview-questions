/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 *
 * https://leetcode.com/problems/text-justification/description/
 *
 * algorithms
 * Hard (22.78%)
 * Total Accepted:    92.4K
 * Total Submissions: 405.7K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * Given an array of words and a width maxWidth, format the text such that each
 * line has exactly maxWidth characters and is fully (left and right)
 * justified.
 * 
 * You should pack your words in a greedy approach; that is, pack as many words
 * as you can in each line. Pad extra spaces ' ' when necessary so that each
 * line has exactly maxWidth characters.
 * 
 * Extra spaces between words should be distributed as evenly as possible. If
 * the number of spaces on a line do not divide evenly between words, the empty
 * slots on the left will be assigned more spaces than the slots on the right.
 * 
 * For the last line of text, it should be left justified and no extra space is
 * inserted between words.
 * 
 * Note:
 * 
 * 
 * A word is defined as a character sequence consisting of non-space characters
 * only.
 * Each word's length is guaranteed to be greater than 0 and not exceed
 * maxWidth.
 * The input array words contains at least one word.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * Output:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * Output:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall
 * be",
 * because the last line must be left-justified instead of fully-justified.
 * ⁠            Note that the second line is also left-justified becase it
 * contains only one word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * words =
 * ["Science","is","what","we","understand","well","enough","to","explain",
 * "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * Output:
 * [
 * "Science  is  what we",
 * ⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 * 
 * 
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
const sum = (arr) => arr.reduce((prev, current) => {
  prev += current.length;
  return prev;
}, 0);

const paddingBetween = (arr, maxWidth) => {
  let spaceNum = maxWidth - sum(arr);
  let spaceArr = [];
  if (spaceNum % (arr.length - 1) === 0) {
    spaceArr = Array.from(
      { length: arr.length - 1 },
      (_) => " ".repeat(spaceNum / (arr.length - 1))
    );
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (i === arr.length - 2) {
        spaceArr.push(" ".repeat(spaceNum))
      } else {
        let num = Math.ceil(spaceNum / (arr.length - 1 - i));
        spaceArr.push(" ".repeat(num));
        spaceNum -= num;
      }
    }
  }

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    result.push(spaceArr[i] || "");
  }
  return result.join("");
}

const paddingLeft = (arr, maxWidth) => {
  let result = arr.join(" ");
  let spaceNum = maxWidth - result.length;
  result += " ".repeat(spaceNum);
  return result;
}

var fullJustify = function (words, maxWidth) {
  let result = [];
  let str = [];
  for (let word of words) {
    if (sum(str) + (str.length ? str.length - 1 : 0) + word.length + 1 <= maxWidth) {
      str.push(word);
    } else {
      result.push(str);
      str = [word];
    }
  }
  if (str.length) {
    result.push(str);
  }
  return result.filter(i => i.length > 0).map((i, index) => {
    if (index === result.length - 1 || i.length === 1) {
      return paddingLeft(i, maxWidth)
    } else {
      return paddingBetween(i, maxWidth)
    }
  });
};

// let result = fullJustify(["Listen", "to", "many,", "speak", "to", "a", "few."], 6);
// result.forEach(i => {
//   console.log(i)
//   console.log(i.length)
// })
// let result = fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain", "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20);
// result.forEach(i => {
//   console.log(i)
//   console.log(i.length)
// })
