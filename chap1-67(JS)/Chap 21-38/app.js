/*=====================================================
CHAP: 21-25 
STRING METHODS 
=====================================================*/

/*1. Write a program that takes two user inputs for first and last name 
using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 
CODE:*/
/*
var str = prompt("Enter your First name")
var str1 = prompt("Enter your Last name")
var res = str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
var res1 = str1.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
alert("Welcome "+res+" " +res1)
*/
/*2. Write a program to take a user input about his favorite mobile phone model. 
Find and display the length of user input in your browser 


CODE:*/

/*var a = prompt("Please Enter your favorite mobile phone model");
var n = a.length;
alert("My favorite phone is: "+a +" length of STRING is : "+ n);*/


/*3. Write a program to find the index of letter “n” 
in the word “Pakistani” and display the result in your browser 

CODE:*/

/*var str = "Pakistani";
var n = str.indexOf("n");
alert ("String: "+ str +"\nindex of 'n': "+n);*/

/*
4. Write a program to find the last index of letter “l” 
in the word “Hello World” and display the result in your browser. 

CODE:*/
/*
var str = "Hello World";
var n = str.lastIndexOf("l");
alert ("String: "+ str +"\nindex of 'l': "+n);*/

/*
5. Write a program to find the character at 
3rd index in the word “Pakistani” and display the result in your browser.
Code
*/
/*
var str = "Pakistani";
var res = str.substring(3,4);
alert("Sring: "+str+"\nCharacter at index 3: "+res);
*/


/*
6. Repeat Q1 using string concat() method.

Code
*/


/*
var str1 = prompt("Enter Your First Name: ");
var str2 = prompt("Enter Your Last Name: ");
var res = str1.concat(str2);
alert("Welcome dear "+res)
*/



/*
7. Write a program to replace the “Hyder” to “Islam” in the word 
“Hyderabad” and display the result in your browser
Code
*/

/*
var str = "Hyderabad";
var res = str.replace("Hyder", "Islam");
alert("City: "+str+"\nAfter replacement: "+res)
*/



/*
8. Write a program to replace all occurrences of “and” in the string with “&” and display the 
result in your browser.
var message = “Ali and Sami are best friends. They play cricket and football together.”; 
Code
*/

/*
var str = "Ali and Sami are best friends. They play cricket and football together.";
var res = str.replace(/and/gi, "&");
alert(res)
*/

/*9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
code:*/
/*
var num = "472";
var n = parseInt(num);
alert("Value:"+num+"\nType: String"+"\nValue:"+n+"\nType: number")
*/


/*10. Write a program that takes user input. Convert and show the input in capital letters. 
code:*/
/*
var str = prompt("Enter a word to convert it to UpperCase");
var res = str.toUpperCase();
alert("User Input: "+str+"\nUpper Case: "+res)
/*


/*11. Write a program that takes user input. Convert and show the input in title case. 
code:*/

/*
var str = prompt("Enter a word")
var res = str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
alert("User Input: "+str+"\nTitle Case: "+res)
*/

/*12. Write a program that converts the variable num to string. var num = 35.36 ; 
Remove the dot to display “3536” display in your browser. 
 code:*/

// var num = 15.97;
// var n = num.toString();
// alert(n)

// var mystring = "10.90";
// mystring = mystring.split('.').join('')
// alert(mystring)

/*
var num = 35.36;
var n = num.toString();
num = n.split('.').join('')
alert("Number: "+n+"\nResult: "+num)
*/

/*
13. Write a program to take user input and store username in a variable. If the username contains any 
special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
 
Note: ASCII code of ! is 33 ASCII code of , is 44 ASCII code of . is 46 ASCII code of @ is 64 

code:*/

/*
var string = prompt("Enter username");

for (var i = 0; i < string.length; i++) {
	var res = string.charCodeAt(i)

	
}
if (res==33 ||res==64 ||res==44 ||res==46){
	alert("Please Enter a valid username")
}
else
{
	alert(string)
}
*/
/*
14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
Write a program to enable “search by user input” in an array. After searching, 
prompt the user whether the given item is found in the list or not. Note: 
Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE 
or coOkIE, program should inform about its availability. Example: 

code*/

/*
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to the ABC Bakery. What do you want to order?")
if (A.indexOf(search) == 0 || A.indexOf(search) == 1 || A.indexOf(search) == 2 || A.indexOf(search) == 3 || A.indexOf(search) == 4 )
 
alert(search + " is available at index "+A.indexOf(search)+" in our bakery");
else 
	alert("We are Sorry. "+search+" is not available in our bakery")
*/
/*
15. Write a program to take password as an input from user. The password must qualify these requirements: 
a. It should contain alphabets and numbers 
b. It should not start with a number 
c. It must at least 6 characters 
long If the password does not meet above requirements, prompt the user to enter a valid password. 
For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document
code*/
/*
var string = prompt("Enter password");
var r = string.charAt(0);
var n = string.length;
for (var i = 0; i < string.length; i++) {
	var res = string.charCodeAt(i)

	
}
if (res==33 ||res==64 ||res==44 ||res==46){
	alert("Please Enter number or alphabetes only")
}
else if (r==1 || r == 2|| r == 3|| r == 4|| r == 5|| r == 6|| r == 7|| r == 8|| r == 9) {
	alert("Password Cannot Begin with a number")
}
else if (n < 6)
{
	alert("Please Enter more than 6 letters atleast")
}
else
{
	alert(string)
}
*/

/*
16. Write a program to convert the following string to an array using string split method.
var university = “University of Karachi”; Display the elements of array in your browser. 

code:*/
/*
var university = "university of karachi";
var res = university.split("");
document.write(res)
*/

/*
17. Write a program to display the last character of a user input
code:
var myString=prompt("Enter any word")
var lastChar = myString[myString.length -1];
alert(lastChar)
*/


/*18. You have a string “The quick brown fox jumps over the lazy dog”. 
Write a program to count number of occurrences of word “the” in given string. 
code:*/

/*

var a = (("The quick brown fox jumps over the lazy dog ".match(/the/g,) || []).length);
var b = (("The quick brown fox jumps over the lazy dog ".match(/The/g,) || []).length);
var total = a+b;
alert("Text: The quick brown fox jumps over the lazy dog\nThere are "+total+"occurrence(s)of the word 'the'")

*/
/*=====================================================
CHAP: 26-30 
MATH METHODS 
=====================================================*/

/*
1. Write a program that takes a positive integer from user & display the following in your browser.
 a. number 
 b. round off value of the number 
 c. floor value of the number 
 d. ceil value of the number  

code:*/

/*
var num = +prompt("Please Enter a positive integer");
var roundOff = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

alert("number: "+num+"\nround off value: "+roundOff+"\nfloor value: "+ floor+"\nceil value: "+ceil)
*/

/*2. Write a program that takes a negative floating point number from user & display the following in 
your browser. 
a. number b. round off value of the number c. floor value of the number d. ceil value of the number 
code:*/
/*
var num = +prompt("Please Enter a negative integer");
var roundOff = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

alert("number: "+num+"\nround off value: "+roundOff+"\nfloor value: "+ floor+"\nceil value: "+ceil)
*/


/*
3. Write a program that displays the absolute value of a number. 
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 
code:*/

/*
var num = +prompt("Please Enter a number");
a = Math.abs(num)
alert("number is : "+num+"\nabsolute value is : "+a)
*/
/*
4. Write a program that simulates a dice using random() method of JS Math class. 
Display the value of dice in your browser.: 
code*/
/*
var a = Math.floor((Math.random() * 10) + 1);
document.write("Random Dice value is: "+a)
*/


/*5. Write a program that simulates a coin toss using random() 
method of JS Math class. Display the value of coin in your browser
code:*/ 

/*
var a = Math.random()
var b = Math.round(a)
if(b===0)
{	
	document.write("Random dice value: "+b)
	document.write("Tails")
}
else
{	document.write("Random dice value: "+b)
	document.write("Heads")
}
*/
/*
6. Write a program that shows a random number between 1 and 100 in your browser. 
code:*/
/*
var a = Math.floor((Math.random() * 100) + 1);
document.write("Random number between 1 - 100 is : "+a)
*/


/*
7. Write a program that asks the user about his weight. Parse the user input and display his 
weight in your browser. Possible user inputs can be: a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 
code:*/
/*
var a= prompt("Please enter your weight")
var b= parseInt(a)
document.write("The weight of user is : "+b+" kilograms")
*/

/*var a = 5;
var guess = +prompt("Guess the number")
if (guess == 5 ){
	alert("Bingo! Correct answer")
}


else if (guess == 6 || guess == 4)
{
	alert("Close enough to the correct answer")
}
else
{
	alert("Try again")
}
*/
/*=====================================================
CHAP: 31-34
DATE METHODS 
=====================================================*/

/*
1. Write a program that displays current date and time in your browser. 
code:*/
/*
var a = new Date();
document.write(a) 
*/

/*
2. Write a program that alerts the current month in words. For example December. 
Code:*/
/*
var a = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var b = month[a.getMonth()];
document.write("Current Month: "+b)
*/

/*
3. Write a program that alerts the first 3 letters of the current
day, for example if today is Sunday then alert will show Sun
code:*/
/*
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wedn";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[d.getDay()];

document.write("Today is "+n)
*/
/*
4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
Code:*/
/*
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Its Fun day";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wedn";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Its Fun day";

var n = weekday[d.getDay()];

document.write("Today is "+n)
*/

/*5. Write a program that shows the message “First fifteen days of the month” 
if the date is less than 16th of the month else shows “Last days of the month”. 
Code:*/

var d = new Date();
var n = d.getDate();
if(n<16)
{
document.write("First fifteen days of the month")
}
else
{
	document.write("Last days of the month")
}


/*6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a 
variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 
 
 
Code:*/
/*
var d = new Date();
var n = d.getTime();
var a = new Date();
document.write("Current Date: "+a) 
document.write("\n***********\n")
document.write("\nEclapsed miniseconds since January 1, 1970: "+n);
document.write("\n***********\n")
document.write("Eclapsed minutes since January 1, 1970: "+n/6000)
*/

/*7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 
Code:*/
/*
var d = new Date();
var n = d.getHours();
if(n<=12)
{
document.write("Its AM")
}
else
{
document.write("Its PM")
}
*/

/*8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns 
it to variable named laterDate. 
Code:*/
/*
var A = new Date("December 31, 2020")
document.write("Later date: "+A)
*/

/*9. Create a date object of the starting date of this Ramadan and alert the number of days 
past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
 
Code:*/

/*
var DaTe = new Date("June 18,2015")
var DaTemili = DaTe.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - DaTemili;
var accudate = Math.floor(diff/(1000*60*60*24))
document.write(accudate+ " days have passed since 1st Ramadan, 2015 ")
*/

/*10. Write a program that displays in your browser the seconds that elapsed between 
the reference date and the beginning of 2015
Code:*/

/*
var DaTe = new Date("January 1,2020")
var DaTemili = DaTe.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - DaTemili;
var accudate = Math.floor(diff/(24*30))
var a = new Date();
document.write("on reference date "+a+",\n") 
document.write("*****************************")
document.write("\n("+accudate+ ") seconds have passed since beginning of 2015 ")
*/

/*11. Create a Date object for the current date and time. Extract the hours, reset the date object 
an hour ahead and finally display the date object in your browser.
code:*/
/*
var current = new Date("June 16, 2020 18:17:00")
var oneHourBefore = new Date("June 16, 2020 17:17:00")
document.write("Current date: "+ current)
var z = "\n";
document.write("<br>*****************************<br>")
document.write("1 hour ago, it was ("+oneHourBefore)
*/

/*12. Write a program that creates a date object and show the date in an alert box that 
is reset to 100 years back? 
 
code:*/
/*
var current = new Date("June 16, 2020 18:17:00")
var onehundredHourBefore = new Date("June 16, 1920 17:17:00")
alert("Current date: "+ current)
var z = "\n";

alert("100 years back, it was ("+onehundredHourBefore) */

/*13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
code:*/

/*
var currentYear = 2020;
var DaTe = new Date("October 13, 1998")
var DaTemili = DaTe.getTime();
var today = new Date();
var todaymili = today.getTime();
var diff = todaymili - DaTemili;
var age = Math.round(diff/(1000*60*60*24*30*12))
var year = Math.round(currentYear-age)
document.write("Your Age is : "+age+" <br>Your birth year is: "+year)
*/

/*14. Write a program to generate your K-Electric bill in your browser. 
All the amounts should be rounded off to 2 decimal places. Display the following fields: 
a. Customer Name 
b. Current Month 
c. Number of units 
d. Charges per unit 
e. Net Amount Payable (within Due Date) 
f. Late Payment Surcharge 
g. Gross Amount Payable (after Due Date) Where,Net Amount Payable (within Due Date) = Number of units
 * Charges per unit & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 
code:*/
/*
var name = prompt("Please Enter your name : ")
var units = +prompt("Please Enter Number of units : ")
var ChargesPerUnits = +prompt("Please Enter Number of Charges Per Unit : ")
document.write("<h1>K-Electric Bill</h1>")	
var a = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var b = month[a.getMonth()];
document.write("Name: "+name)
document.write("<br>Current Month: "+b)
document.write("<br>Number of units: "+units)
document.write("<br>Charges per unit: "+ChargesPerUnits)
document.write("<br>Net Amount Payable (within Due Date) : "+units*ChargesPerUnits)
document.write("<br>Late Payment Surcharge: 350")
document.write("<br>Gross Amount Payable (after Due Date): "+(units*ChargesPerUnits+350))
*/

/*=====================================================
CHAP: 35-38 
FUNCTION
=====================================================*/

/*1. Write a function that displays current date & time in your browser. 
Code:*/
/*
function currentTime() 
{
	var a = new Date();
	document.write(a)  
}
currentTime();
*/
/*2. Write a function that takes first & last name and then it greets the user using his full name.
Code:*/

/*
function Greet()
{
var a = prompt("Enter your First Name : ");
var b = prompt("Enter your Last Name : ");
alert("Welcome "+a+" "+b)
}
Greet();
*/

/*3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
Code:*/
/*
function sum(a,b)
{
	var a = +prompt("Enter First Number : ");
	var b = +prompt("Enter Second Number : ");
	return a+b
}
document.write(sum())
*/
/*
4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the 
desired operation. Return and show the desired result in your browser
Code:*/

/*
function calculator(num1,opr,num2)
{
	var num1 = +prompt("Enter first number ")
	var opr = prompt("Enter operator number ")
	var num2 = +prompt("Enter second number ")
	if(opr==="+")
	{
		return num1+num2
	}
	else if(opr==="-")
	{
		return num1-num2
	}
	else if (opr==="*")
	{
		return num1*num2
	}
	else if(opr==="/")
	{
		return num1/num2
	}
}
var res = calculator();
document.write(res)
*/

/*
 5. Write a function that squares its argument. 
code:*/
/*
function square(a)
{
	return a*a
}
res = square(10);
document.write(res)
*/

/*6. Write a function that computes factorial of a number. 
code:*/

/*

function factorial(n)
{
var answer = 1;
if (n == 0 || n == 1)
  	{
  return answer;
  	}
else
 	{
   for(var i = n; i >= 1; i--)
   	{
      answer = answer * i;
   	}
    return answer;
	}  
}
var res = factorial(5);
document.write(res);
/*

/*

 7. Write a function that take start and end number as inputs & display counting in your browser. 
code:*/
/*
function Counting(i,j)
{
	var i = +prompt("Starts from")
	var j = +prompt("End number")
	for(var a=i; a<=j; a++)
	{
		document.write(a+"<br>")
	}
}
var res = Counting()
console.log(res)
*/

/*8. Write a nested function that computes hypotenuse of a right angle triangle.  
(Hypotenuse2 = Base2 + Perpendicular2)
Take base and perpendicular as inputs. Outer function : calculateHypotenuse() 
Inner function: calculateSquare() 

Code*/
// function calculateHypotenuse()
// {
// 	var base = +prompt("Enter Base");
// 	var perp = +prompt("Enter Perpendicular");
// 	function calculateSquare(base,perp)
// 	{			
// 		return (base*base)+(perp*perp)		
// 	}
// 	 var a = calculateSquare();
// 	 document.write(a)
// }
// var res = calculateHypotenuse(1,1);

// console.log("Hypotenuse2 = Base2 + Perpendicular2: "+res)

/*
function calculateHypotenuse() {
  var num1 = +prompt("Enter Base");
  var num2 = +prompt("Enter Perpendicular");
  function calculateSquare() {
    var hypotenuse = (num1*num1)+(num2*num2);
    alert("Base: "+num1+"\n"+"Perpendicular: "+num2+"\nFormula: (Hypotenuse2 = Base2 + Perpendicular2) "+"\nHypotenuse = "+hypotenuse)

  }
  return calculateSquare;
}
var myFunc = calculateHypotenuse();
myFunc();
*/

/*9. Write a function that calculates the area of a rectangle.  A = width * height
Pass width and height in following manner: i. Arguments as value ii. Arguments as variables 
code:*/
/*
function AOR(width,height)
{
	return width*height
}
res = AOR(10,20);
document.write(res)
*/
/*
function AOR(width =10,height = 20)
{
	return width*height
}
res = AOR();
document.write(res)
*/

/*10. Write a JavaScript function that checks whether a passed string is palindrome or not?   
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 
 
Code:*/

/*

function check_Palindrome(str_entry){
   var cstr = str_entry;
	var ccount = 0;
	
	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	}

	for (var x = 0; x < ccount; x++) {
 
		if (cstr[x] != cstr.slice(-1-x)[0]) {
			document.write("Not a palindrome.");
			return false;
		}
	}
	document.write("Palindrome.");
	return true;
}
var i = prompt("Enter name")
var a =check_Palindrome(i);

*/

/*11. Write a JavaScript function that accepts a string as a parameter and converts the 
first letter of each word of the string in upper case.  EXAMPLE STRING : 'the quick brown fox'  
EXPECTED OUTPUT : 'The Quick Brown Fox' 
code:*/
/*
function title(){
var str = "the quick brown fox"
var res = str.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ')
alert("Before: "+str+"\nTitle Case: "+res)
}
title();
*/

/*12. Write a JavaScript function that accepts a string as a parameter and find the longest word within 
the string.  
EXAMPLE STRING : 'Web Development Tutorial'  EXPECTED OUTPUT : 'Development'
Code:*/
/*
function check(a)
{
  var array1 = a.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(check('Web Development Tutorial'));
*/

/*13. Write a JavaScript function that accepts two arguments, a string and a 
letter and the function will count the number of occurrences of the specified letter within the string.
 Sample arguments : 'JSResourceS.com', 'o' 
code:*/
/*
function char(str, letter) 
{
 var countLetter = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      countLetter += 1;
      }
  }
  return countLetter;
}

document.write(char('w3resource.com', 'o'));
*/
/*14. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here. 
Create a function called calcCircumference: • Pass the radius to the function. 
• Calculate the circumference based on the radius, and output "The circumference is NN". 
Create a function called calcArea: • Pass the radius to the function. 
• Calculate the area based on the radius, and output "The area is NN". 
 
Circumference of circle    =     2πr Area of circle       =     πr2 
code:*/

/*
function calcCircumference(radius)
{	var radius= +prompt("Enter radius of circle to calculate Circumference")
	return 2*3.1462*radius;
}

function calcArea(radius)
{	var radius= +prompt("Enter radius of circle to calculate Area ")
	return 3.1462*radius*radius;
}
var choice = prompt("Press 1 for Circumference \nPress 2 for Area of circle")
if (choice==="1") {
	resRad = calcCircumference();
document.write("Circumference of circle: "+resRad)
}
else if(choice==="2")
{
	resRad = calcArea();
document.write("Area of circle: "+resRad)
}

