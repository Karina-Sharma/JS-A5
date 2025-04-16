/* Q1. Find the Product. 
Write a program that takes an array as input from the user and find out the product of the elements. 
Note: You have to complete Find_Prod. No need to take any input. 
Input Format 
Example 
Sample Input 
5 1 2 3 4 5 
Sample Output 
120 */

function Find_Prod(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }

    return product;
}

const input = "5 1 2 3 4 5"; 
const inputArray = input.split(" ").map(Number); 

const N = inputArray[0]; 
const elements = inputArray.slice(1, N + 1); 

const result = Find_Prod(elements); 
console.log(result); 


/* Q2. Find the Sum. 
 Write a program which takes an array as input from the user and find out the sum of the array elements. 
 Note: You have to complete Find_Sum. No need to take any input. 
 Example 
 Sample Input 
 5 1 2 3 4 5 
 Sample Output 
 20 */

let arr = [5, 1, 2, 3, 4, 5 ];

let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log("Sum of array elements is : ", sum);

/* Q3. Count Occurrences 
You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
occurrences of K in array A. 
Note: You have to complete findCount function. No need to take any input. 
Input Format 
The first line of the input contains two space-separated integers N and K, denoting the number of elements in the array A 
and the element whose count needs to be determined, respectively. The second line of the input contains N space-separated 
integers, denoting the elements of the array A. 
Output Format 
Return the count of occurrences of K in array A. 
Constraints 
1≤N≤1001≤K≤1001≤Ai≤1000≤100 
Example 
Sample Input 
4 3 3 3 1 2 
Sample Output 
2 */

let arr3 = [3, 3, 3, 1, 2];
let k = 3;
function findCount(arr3, k) {
    let count = 0;
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] === k) {
            count++;
        }
    }
    console.log(count);
}
findCount(arr3, k);



/* Q4. Even Odd 
You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A. 
Note: You have to complete findEvenOdd function. No need to take any input. 
Input Format 
The first line of the input contains an integer N, denoting the number of elements in the array A. The second line of the input 
contains N space-separated integers, denoting the elements of array A. 
Output Format 
Return array B as output. 
Constraints 
1≤N≤1001≤100 0≤Ai≤1000≤100 
Example 
Sample Input 
7 1 2 3 4 5 6 7 
Sample Output 
12 16 */  

function findEvenOdd(Array){
    let Even = 0;
    let Odd = 0;
    for(let i = 0; i < Array.length; i++){
        if(Array[i] % 2 == 0){
            Even += Array[i];
            
        }else if (Array[i] % 2 != 0){
            Odd += Array[i];
            
        }
    }
    console.log("Sum of All Even no : "+ Even);
    console.log("Sum of All Odd no : "+ Odd);
}

let Array = [7, 1,2,3,4,5,6 ];
findEvenOdd(Array);

/* Q5. Find whether the number is present or not 
Write a program which takes an array as input from the user and a number. Check whether the number is present or not. 
Note: You have to complete Find_Num. No need to take any input. 
Input Format
Example 
Sample Input 
5 1 2 3 4 5 2 
Sample Output 
YES */

function Find_Num(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return "YES"; 
        }
    }
    return "NO"; 
}

const input1 = "5\n1 2 3 4 5\n2"; 
const lines = input1.split("\n"); 

const n = parseInt(lines[0]); 
const element = lines[1].split(" ").map(Number); 
const M = parseInt(lines[2]); 

const resul = Find_Num(elements, M); 
console.log(resul); 

/* Q6. Higher Age 
You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
containing the age of persons that are over 1818 (18(18 included)). 
Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
function. No need to take any input. 
Input Format 
The first line of the input contains an integer N, denoting the number of person in your locality. The second line of the input 
contains N space-separated integers, denoting the age of persons in your locality. 
Output Format 
Return the array containing the age of persons that are over 1818 (18(18 included)).  
Constraints 
1≤N≤1001≤100 0≤Ai≤1000≤100 
Example 
Sample Input 
6 11 23 3 45 72 68 
Sample Output 
23 45 72 68 */

function highAge(preson){
    let H_Age = 0;
    for(let i = 0; i < preson.length ; i++){
        if(preson[i] > 18 ){
            H_Age += preson[i];
            console.log("High Age person : " + preson[i]);
        }
    }
   
}

let person = [6, 11, 23, 3, 45, 72, 68];
highAge(person);

/* Q7. Increment the Array Elements 
You are provided an array of integers and you have to increment all array elements by 1 and then print whole array. 
You have to complete Inc_Arr. No need to take any input. 
Input Format 
The input contains a single number N, then N array elements as input. 
Output Format 
Print the required answer in the function itself. 
Constraints 
1≤N≤1001≤ElementoftheArray≤1000 
Example 
Sample Input 
5 1 2 3 4 5 
Sample Output 
2 3 4 5 6 */
function Inc_Arry(arry,inc_arry){
    let inc = 0;
    for(let i = 0 ; i < arry.length ; i++){
        inc = arry[i] + 1 ;
        inc_arry.push(inc);
    }
    console.log("Orignal Array : "+ arry);
    console.log("After Increment by One of Each element in Arry : "+inc_arry);
}

let arry = [1,2,3,4,5,6];
let inc_arry = [];
Inc_Arry(arry,inc_arry);

/* Q8. Pass or Fail 
You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232. 
If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes). 
Note: You have to complete isAllPass function. No need to take any input. 
Input Format 
Example 
Sample Input 
7 13 89 45 98 67 45 54 
Sample Output 
NO */

function isAllPass(marks) {
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] < 32) {
            return "NO";
        }
    }
    return "YES"; 
}
const marks = "7 13 89 45 98 67 45 54";
const resu = isAllPass(marks); 
console.log(resu); 

/* Q9. Unique Color Shirt 
Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
wants you to find M. 
Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N. 
6 3 2 4 1 2 3 
Output 
2 
Sample test case explanation 
Input: C=3, 2, 4, 1, 2, 3 
Output: 2 
There are two 2-color shirts, and two 3-color shirts. So, after removing 2-color and 3-color shirts, the remaining shirts are one 
4-color shirt and one 1-color shirt i.e, 4, 1. 
Hence, the output will be 2. */

function uniqueColorShirts(shirts) {
    const colorCount = {};
    
    for (let color of shirts) {
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }

    let uniqueCount = 0;
    for (let count of Object.values(colorCount)) {
        if (count === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

const inp = "6 3 2 4 1 2 3"; 
const lin = inp.split("\n"); 

const N2 = parseInt(lines[0]); 
const shirts = lines[1].split(" ").map(Number); 

const res = uniqueColorShirts(shirts); 
console.log(res); 

/* Q10. Min and Max 
Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
minimum and maximum numbers among those elements. 
Input 
66 33 11 44 66 22 77 
Output 
11 77 
Sample Test Case Explanation 
In the first test case minimum element = 11 and maximum element = 77 */

function findMinMax(numbers) {
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    return [min, max]; 
}

const ele = "66 33 11 44 66 22 77"; 
const numbers = ele.split(" ").map(Number);

const [min, max] = findMinMax(numbers); 
console.log(min, + " " + max); 