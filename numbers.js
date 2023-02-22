// Display numbers between **1** and **N** by following the rules:

// - if number can be divided by 3: display **Fizz** ;
// - if number can be divided by 5: display **Buzz** ;
// - if number can be divided by 3 **AND** 5 : display **FizzBuzz** ;
// - else: display the number.

const numbers1 = [
    1, 2, 3, 4, 5, 6, 7, 8, 'll',9, 0, 345678, 88273389, 23, 12, 58899, 45676544,
    66666666, 33333, 11, 7, 'nan', undefined
];
const numbers2 = [3, 5, 10, 15, 21, 25, 30, 11, undefined];

/** using a foreach create a check of each number
 * with the modulo operator to check for a zero remainder on:
 * 5 & 3,
 * then 5,
 * than 3,
 * else number
 * order is important in the check
 * */

const numsDividedFiveThree = (array) => { 
    array.forEach((el) => {
        //safety check
        if ( typeof el !== 'number')return;
        
        if (el % 5 == 0 || el % 3 == 0) {
            if(el % 5 === 0 && el % 3 === 0){
                console.log("**FizzBuzz**")
                return;
            }
            el % 5 === 0 ? console.log("**Buzz**"):console.log("**Fizz**" + el);
        } else {
            console.log(+el);
            return;
        }
    });
};
numsDividedFiveThree(numbers1);
numsDividedFiveThree(numbers2);