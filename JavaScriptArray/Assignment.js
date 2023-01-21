// Q1: Y2K problem: Databases written in 1970's used 2-digit fields to represent the year e.g., 77, 80
// instead of 1977, 1980.However with the year 2000 nearby all these fields had to be changed to be
// 4-digit date. Write a program to change a given 2-digit year to a 4-digit year. Remember that
// if the 2-digit number is less than 35 it means it’s a year in the 2000-year range. E.g., 15 would mean 2015 not 1915.

const covertYearToFull = (year) => {
  if (year < 35) {
    return "20" + year;
  } else {
    return "19" + year;
  }
};

//Remove comments to see the output
//console.log(covertYearToFull(23))
//console.log(covertYearToFull(86))

//***************************************************************************************************************************************** */

// Q2. In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.
// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
// Can you reach your friend's tile number in the next roll? Create a function that takes your position a
// and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

const earnBonusOrNot = (a, b) => {
  if (a >= b || b - a > 6) {
    return false;
  } else {
    return true;
  }
};

//Remove comments to see the output
// console.log(earnBonusOrNot(3, 7));
// console.log(earnBonusOrNot(1, 9));
// console.log(earnBonusOrNot(5, 3));

//***************************************************************************************************************************************** */

// Q3. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Example: -arrayOfMultiples(12, 10) [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// Notes: -Notice that num is also included in the returned array.

const arrayOfMultiples = (num, length) => {
  let iterate = 1;
  const resultArr = [];
  while (iterate <= length) {
    resultArr.push(num * iterate);
    iterate++;
  }
  return resultArr;
};

//Remove comments to see the output
//console.log(arrayOfMultiples(12, 10));

//***************************************************************************************************************************************** */

// Q4. Given an array of positive integers. Find the length of the longest sub-sequence such that elements in the ubsequence are consecutive integers,
// the consecutive numbers can be in any order.

const calculateConsecutive = (arr) => {
  let iterate = 0;
  let highestOccur = 1;
  let temp = 1;
  arr.sort(function (a, b) {
    return a - b;
  });
  while (iterate < arr.length) {
    if (arr[iterate + 1] - arr[iterate] === 1) {
      temp++;
    } else {
      if (highestOccur < temp) {
        highestOccur = temp;
      }
      temp = 0;
    }
    iterate++;
  }

  return highestOccur === 1 ? 0 : highestOccur;
};

//Remove comments to see the output
//console.log(calculateConsecutive([2, 6, 1, 9, 4, 5, 3]));

//Q5. Given a letter, created a function which returns the nearest vowel to the letter.
//If two vowels are equidistant to the given letter, return the earlier vowel.

const findNearestVowel = (letter) => {
  const vowelsAscii = [97, 101, 105, 111, 117];
  let returnedVowel;
  for (let i = 0; i < vowelsAscii.length; i++) {
    if (
      vowelsAscii[i] <= letter.charCodeAt(0) &&
      vowelsAscii[i + 1] >= letter.charCodeAt(0)
    ) {
      returnedVowel =
        letter.charCodeAt(0) - vowelsAscii[i] <=
        vowelsAscii[i + 1] - letter.charCodeAt(0)
          ? String.fromCharCode(vowelsAscii[i])
          : String.fromCharCode(vowelsAscii[i + 1]);
    }
  }
  return returnedVowel ? returnedVowel : "u";
};

//Remove comments to see the output
// console.log(findNearestVowel("u"));
// console.log(findNearestVowel("u"));
