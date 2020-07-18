/*=================================
Chapter # 1 
(ALERT)
===================================
Q:1)Write a script to greet your website visitor using JS alert box
code:
alert("Welcome");
======================================================================================
Q:2) Write a script to display following message on your web page: 
code:
alert("Error! Please enter a valid password.");
======================================================================================
Q:3. Write a script to display following message on your web page: (Hint : Use line break) 
code:

alert("Welcome to JS Land...\n Happy Codding");
======================================================================================
4. Write a script to display following messages in sequence: 
Code:
alert("Welcome to JS Land");
alert("Happy Codding");

=======================================
Chapter # 2 
VARIABLES FOR STRINGS 
=======================================

1. Declare a variable called username. 
code:

var username;
======================================================================================
2.  Declare a variable called myName &
assign to it a string that represents your Full Name. 
code:

var myName = "Hammad Abdul Bari";
======================================================================================
3. Write script to 
a) Declare a JS variable, titled message. 
b) Assign Hello World to variable message 
c) Display the message in alert box. 4
 
 Code:
 var message;
 message = "Hello World";
 alert(message);
======================================================================================
4. Write a script to save student’s 
bio data in JS variables and show 
the data in alert boxes. 
code:
alert("Jhone Doe");
alert("15 Years old");
alert("Certified Mobile Application Development");


 ======================================================================================
5. Write a script to display the following alert using one JS variable:
code:

 alert("PIZZA\nPIZZ\nPIZ\nPI\nP");

======================================================================================
6. Declare a variable called email and assign to it a string 
that represents your Email Address(e.g. example@example.com). 
Show the blow mentioned message in an alert box.
(Hint: use string concatenation) 
 
 Code: 
 var email = "hammadbari3@gmail.com";
 alert("My Email Address Is " + email);


======================================================================================
7. Declare a variable called book & give it the value 
A smarter way to learn JavaScript. 
Display the following message in an alert box
 Code: 
 var book = "A smarter way to learn JavaScript";
 alert("I am trying to learn from the Book " +book);


======================================================================================
8. Write a script to display this in browser through JS 
code:
 document.write("Yeah i can write HTML content through JavaScript");


======================================================================================
9. Store following string in a variable and show in alert and browser through JS 
Code

var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
  alert(a);

=======================================
Chapter # 3 
VARIABLES FOR NUMBERS 
=======================================

1. Declare a variable called age & assign to it your age. 
Show your age in an alert box. 
Code

var age = 21;
alert("I am "+age+" Years old" );


======================================================================================
2. Declare & initialize a variable to keep track of 
how many times a visitor has visited a web page. 
Show his/her number of visits on your web page. 
For example: You have visited this site N times. 

code:
var a = 10;
alert("You have Visited this site "+a +" times");


======================================================================================
3. Declare a variable called birthYear & assign to it your birth year. 
Show the following message in your browser: 
code:

var birthYear = 1998;
document.write("My Birth Year is "+birthYear+ "<br> Data type of my decleared variable is number");


======================================================================================
4. A visitor visits an online clothing store www.xyzClothing.com . 
Write a script to store in variables the following information: 
a. Visitor’s name 
b. Product title 
c. Quantity i.e. how many products a visitor wants to order Show the following 
message in your browser: 
John Doe ordered 5 T-shirt(s) on XYZ Clothing store. 

Code:
var Visitor_Name = "John Doe";
var Product_Title = "T-shirt(s)";
var Quantity = 5;
document.write(Visitor_Name + " ordered " +Quantity+" "+Product_Title+ " on XYZ Clothing store");


=======================================
Chapter # 4
VARIABLE NAMES: LEGAL & ILLEGAL 
=======================================

1. Declare 3 variables in one statement. 
Code:
var a,b,c;

======================================================================================
2. Declare 5 legal & 5 illegal variable names. 

// VALID
var man;     
var woman3;  
var blackDog;
var Correct;
var house;

// INVALID
var 1girl;   
var -bird;
var b o y;
var *king123;
var 0123;


======================================================================================
3. Display this in your browser 
a)  A heading stating Rules for naming JS variables 
b)  Variable names can only contain ______, ______, ______ and ______. 
For example $my_1stVariable 
c) Variables must begin with a ______, ______ or _____. 
For example $name, _name or name 
d) Variable names are case _________ 
e) Variable names should not be JS _________ 

CODE:
document.write("<b>Rules for naming JS variables</b> <br><br> Variable names can only contain, numbers, $ and _ . For example $my_1stVariable <br>  Variables must begin with a letter, $ or _ . For example $name, _name or name <br> Variable names are case sensitive <br> Variable names should not be JS keyword")

=======================================
Chapter # 5
MATH EXPRESSIONS 

=======================================
 
1. Write a program that take two numbers & 
add them in a new variable. 
Show the result in your browser. 

code:
var a = 3;
var b = 5; 
var c = a+b;
document.write("Sum of "+ a +" and "+ b + " is "+c);

======================================================================================

2. Repeat task1 for subtraction, multiplication, division & modulus. 
code:

var a = 3;
var b = 5; 
var c = a-b;
document.write("Subtraction of "+ a +" and "+ b + " is "+c);

var a = 3;
var b = 5; 
var c = a*b;
document.write("Multiplication of "+ a +" and "+ b + " is "+c);

var a = 3;
var b = 5; 
var c = a/b;
document.write("Division of "+ a +" and "+ b + " is "+c);

var a = 3;
var b = 5; 
var c = a%b;
document.write("Modulas of "+ a +" and "+ b + " is "+c);

======================================================================================

3. Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like Value after variable declaration is: ??. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like Initial value: 5. 
e. Increment the variable. 
f. Show the value of variable in your browser like Value after increment is: 6. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like Value after addition is: 13. 
i. Decrement the variable. 
j. Show the value of variable in your browser like Value after decrement is: 12. 
k. Show the remainder after dividing the variable’s value by 3.  
l. Output : The remainder is : 0. 


var a;
document.write("Value after variable declaration is "+a);
var a = 5;
document.write("<br>Initial value: "+ a);
var a = ++a;
document.write("<br>Value after increment: "+a);
var a = a + 7;
document.write("<br>Value after addition is "+a);
var a = --a;
document.write("<br>Value after decrement: "+a);
var a = a % 3;
document.write("<br>The remainder is : "+a);


======================================================================================

4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
variable & calculate the cost of buying 5 tickets to a movie. Example output: 
code
var ticket = 600;
document.write("Total cost to buy 5 Tickets to a movie is "+ticket*5+ "PKR");


======================================================================================

5. Write a script to display multiplication table of any number in your browser. E.g 
 Code:


document.write("Table of 4 ")
var num =4;
for (var a=1; a < 11; a++)
{
	document.write("<br>"+"4"+"x"+a+"="+num*a);
}

======================================================================================

6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
a.  Store a Celsius temperature into a variable. 
b. Convert it to Fahrenheit & output NNoC is NNoF. 
c. Now store a Fahrenheit temperature into a variable. 
d. Convert it to Celsius & output NNoF is NNoC. 
Code:

var celcius = 25;
var celcius = (25 * 9/5) + 32;
document.write("25 °C is "+celcius + "°F")
var fahrenheit = 70;
var fahrenheit = (70-32) *5/9;
document.write("<br>70 °F is "+fahrenheit + "°C")


======================================================================================
7.  Write a program to implement checkout process of a shopping cart system 
for an e-commerce website. Store the following in variables 

a. Price of item 1 
b. Price of item 2 
c. Ordered quantity of item 1 
d. Ordered Quantity of item 2 
e. Shipping charges 
Compute the total cost & show the receipt in your browser. 

Code:

var p1 = 650;
var p2 = 100;
var oq1 = 3;
var oq2 = 7;
var sc = 100;
document.write("total Cost of Your order is "+ (p1*oq1+p2*oq2+sc));



======================================================================================
8. Store total marks & marks obtained by a student in 2 variables. 
Compute the percentage & show the result in your browser

code:

var totalMark = 980;
var marksObtained =804;
var percentage = marksObtained/totalMark*100;
document.write("<h1> Marks Sheet </h1>")
document.write("Marks Obtained: "+marksObtained);
document.write("<br>Total Marks: "+totalMark);
document.write("<br>Percentage:"+percentage+"%");


======================================================================================
9. Assume we have 10 US dollars & 25 Saudi Riyals. 
Write a script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression. 
(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee) 

code: 

document.write("<h1>Curreny In PKR</h1> <br>")
document.write("Total currency in PKR: "+(10*104.80+25*28));


======================================================================================
10. Write a program to initialize a variable with some number and do arithmetic 
in following sequence: 
a. Add 5 
b. Multiply by 10
c. Divide the result by 2 Perform all calculations in a single expression 

code:

var a = 10;
document.write(((a+10)*10)/2);

======================================================================================
11. The Age Calculator: Forgot how old someone is? Calculate it! 
a. Store the current year in a variable. 
b. Store their birth year in a variable. 
c. Calculate their 2 possible ages based on the stored values. 
Output them to the screen like so: They are either NN or NN years old. 
 

 code:

var cy = 2016;
var by = 1992;
document.write("<h1>Age Calculator</h1><br>");
document.write("Current year : "+cy);
document.write("<br>Birth year : "+by);
document.write("<br>Your age is: "+(cy-by));


======================================================================================
12. The Geometrizer: Calculate properties of a circle. 
a. Store a radius into a variable. 
b. Calculate the circumference based on the radius, and output The circumference is NN. 
(Hint : Circumference of a circle = 2 π r , π = 3.142) 
Calculate the area based on the radius, and output The  area is NN. 
(Hint : Area of a circle = π r2, π = 3.142) 


Code:

var radius =20;
var circumference = 2*3.142*radius;
var area = 3.142*radius*radius;
document.write("<h1>The Geometrizer:</h1>");
document.write("<br>Radius of circle: "+radius);
document.write("<br>The Circumference is"+circumference);
document.write("<br>The Area is: "+area);



======================================================================================
13. The Lifetime Supply Calculator: 
Ever wonder how much a lifetime supply of your favorite snack is? Wonder no more. 
a. Store your favorite snack into a variable 
b. Store your current age into a variable. 
c. Store a maximum age into a variable. 
d. Store an estimated amount per day (as a number). 
e. Calculate how many would you eat total for the rest of your life. 
Output the result to the screen like so: You will need NNNN to last 
you until the ripe old age of NN. 

code: 

var favoriteSnack = "Chocolate Chip";
var currentAge = 15;
var estimatedMaxAge = 65;
var ASPD = 3;
var cal = (estimatedMaxAge-currentAge)*3;
document.write("<h1>The Lifetime Supply Calculator </h1>");
document.write("<br>Current Age: "+ currentAge);
document.write("<br>Estimated maximum Age: "+estimatedMaxAge);
document.write("<br>Ammount of snacks per day"+ASPD);
document.write("<br>You will need "+cal+" " +favoriteSnack+" to last you until the ripe old age of "+estimatedMaxAge);


=======================================
Chapter # 6-9
MATH EXPRESSIONS 
=======================================

1. Write a program to take a number in a variable, 
do the required arithmetic to display the following 
result in your browser:  
 

 Code:

var a = 10;
document.write("Result:<br>");
document.write("<br>The value of a is: "+ a);
document.write("<br><br>..........................");
document.write("<br><br><br>The value of ++a is: "+ ++a);
document.write("<br>Now the value of a is: "+ a);
document.write("<br><br>The value of a++ is: "+ a++);
document.write("<br>Now the value of a is: "+ a);
document.write("<br><br>The value of --a is: "+ --a);
document.write("<br>Now the value of a is: "+ a);
document.write("<br><br>The value of a-- is: "+ a--);
document.write("<br>Now the value of a is: "+ a);


======================================================================================
2. What will be the output in variables a, b & result after execution of the following script: 
var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
Explain the output at each stage: 
--a; 
--a - --b; 
--a - --b + ++b;
--a - --b + ++b + b--; 

code

stage#1
--a; 
(This is Pre-Decrement in "a" so the value of "a" would be 1)
Ans= 1
stage#2
--a - --b;
   1 - 0 
stage#3
--a - --b + ++b;
(1 - 0) +1)

stage#4
--a - --b + ++b + b--; 
1 - 0 + 1 + 1
Ans: 3

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
         
 			// a=1 - b=0 + b=1 + b=1    
 			//(1-0+1+1= 	3)

document.write("currently a is:"+ a);
document.write("<br>currently b is: "+ b);
document.write("<br>result is: "+result)


======================================================================================
3. Write a program that takes input a name from user & greet the user. 
code:

var person = prompt("Please Enter your name")
alert("Welcome "+person)


======================================================================================
4. (question is empty)


======================================================================================

5. Write a program to take input a number from user & display it’s multiplication table 
on your browser. If user does not enter a new number, multiplication table of 5 should 
be displayed by default.

code:


var num =+prompt("Please Enter a number to print a table");

if ( num !== null  && num !==0)
for (var a=1; a < 11; a++)
{
	
	document.write("<br>"+num+"x"+a+"="+num*a);
	
}
else 
{	
	var num = 5;
	for (var a=1; a < 11; a++)
{
	document.write("<br>"+num+"x"+a+"="+num*a);
}

}
======================================================================================

6. Take 
a) Take three subjects name from user and store them in 3 different variables. 
b) Total marks for each subject is 100, store it in another variable. 
c) Take obtained marks for first subject from user and stored it in different variable.
d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
e) Now calculate total marks and percentage and show the result in browser like this.
(Hint: user table) 

code:

var e = prompt("Enter First Subject Name")
var m = prompt("Enter SecondSubject Name")
var u = prompt("Enter ThirdSubject Name")
var om1 = +prompt("Please Enter the obtained Marks of "+e);
var om2 = +prompt("Please Enter the obtained Marks of "+m);
var om3 = +prompt("Please Enter the obtained Marks of "+u);
var totalMarks= 300;
document.write("<h1>Subject Total Marks Obtained Marks Percentage </h1>");
document.write("<br>Subject  Total  Marks  Obtained Marks  Percentage")
document.write("<br>"+ e + "  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;100" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +om1 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ om1+"%")
document.write("<br>"+ m + "  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;100" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +om2 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ om2+"%")
document.write("<br>"+ u + "  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;100" +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +om3 +"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ om3+"%")
document.write("<br> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 300 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+(((om1+om2+om3)))+" &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+((om1+om2+om3)/300)*100+"%");





=======================================
Chapter # 9-11
USER INPUT & CONDITIONAL STATEMENT 
=======================================

1. Write a program to take city name as input from user. 
If user enters Karachi, welcome the user like this: Welcome to city of lights   

Code:

var a = prompt("Enter City Name:")
if (a == "karachi")
{
	alert("Welcome to city of lights")
}
======================================================================================

2. Write a program to take gender as input from user. 
If the user is male, give the message: Good Morning Sir. 
If the user is female, give the message: Good Morning Ma’am. 
code:


var a = prompt("Enter gender:")
if (a== "male")
{
	alert("Good Morning Sir. ")
}
else if (a=="female")
{
	alert(" Good Morning Ma’am. ")
}

======================================================================================``
3. Write a program to take input color of road traffic signal from the user & 
show the message according to this table: 
 code:



var a = prompt("Enter any Color of traffic signal :")
if (a== "red")
{
	alert("Must Stop.")
}
else if (a=="yellow ")
{
	alert(" Ready to move  ")
}
else if (a=="green")
{
	alert(" Move Now ")
}

======================================================================================
4. Write a program to take input remaining fuel in car (in litres) from user.
 If the current fuel is less than 0.25litres, show the message Please refill 
 the fuel in your car 

code:


var a = prompt("Enter  remaining fuel in car (in litres):");
if(a < 0.25)
{
	alert("Please refill the fuel in your car");
}

======================================================================================

5. Run this script, & check whether alert message would be displayed or not. 
Record the outputs. 
a. var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); }
b. var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
c. var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ 
alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } 
if(c === 14){ alert("condition 4 is true"); } 
 
d. var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
e. if (true){ alert("True"); } if (false){ alert("False"); } 

f. if("car" < "cat"){ alert("car is smaller than cat"); } 



// A (working)
//var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

// B (Not working)
//var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

//C (Working)
//var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 


//D (Working)
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
//E (Working)
 //if (true){ alert("True"); } if (false){ alert("False"); } 

 //f (Working)
//if("car" < "cat"){ alert("car is smaller than cat"); } 


======================================================================================
6. Write a program to take input the marks obtained in three subjects & total marks.
Compute & show the resulting percentage on your page. 
Take percentage & compute grade as per following table: 
code:


var a  = +prompt("Enter marks obtained in 1st subject")
var x  = +prompt("Enter Total marks  in 1st subject")
var b  = +prompt("Enter marks obtained in 2nd subject")
var y  = +prompt("Enter Total marks  in 2nd subject")
var c  = +prompt("Enter marks obtained in 3rd subject")
var z  = +prompt("Enter Total marks  in 3rd subject")

var totalMarks = x+y+z;
var obtainedMarks = a+b+c;
var percentage = ((obtainedMarks/totalMarks) *100);
if (percentage >= 80) {
document.write("<h1> Marks Sheet</h1>");
	document.write("<br>Total Marks : "+(x+y+z)+" <br> Marks Obtained : "+(a+b+c)+"<br> Percentage : "+(((a+b+c)/(x+y+z))*100)+"%"+"<br>Grade : A-one <br> Remarks = Excellent")

}
else if (percentage >=70)
{
	document.write("<h1> Marks Sheet</h1>");
	document.write("<br>Total Marks : "+(x+y+z)+" <br> Marks Obtained : "+(a+b+c)+"<br> Percentage : "+(((a+b+c)/(x+y+z))*100)+"%"+"<br>Grade : A <br> Remarks = Good")
}
else if (percentage >=70)
{
	document.write("<h1> Marks Sheet</h1>");
	document.write("<br>Total Marks : "+(x+y+z)+" <br> Marks Obtained : "+(a+b+c)+"<br> Percentage : "+(((a+b+c)/(x+y+z))*100)+"%"+"<br>Grade : B <br> Remarks = You need to improve")
}
else if (percentage  < 60 )
{
	document.write("<h1> Marks Sheet</h1>");
	document.write("<br>Total Marks : "+(x+y+z)+" <br> Marks Obtained : "+(a+b+c)+"<br> Percentage : "+(((a+b+c)/(x+y+z))*100)+"%"+"<br>Grade : F <br> Remarks = Sorry")
}


======================================================================================
7. Guess game: 
Store a secret number (ranging from 1 to 10) in a variable. 
Prompt user to guess the secret number. 
a. If user guesses the same number, show Bingo! Correct answer. 
b. If the guessed number +1 is the secret number, show Close enough to the correct answer. 


code:
var a = 5;
var guess = +prompt("Guess the number")
if (guess == 5 ){
	alert("Bingo! Correct answer")
}


else if (guess == 6 || guess == 4)
{
	alert("Close enough to the correct answer")}


======================================================================================
8. Write a program to check whether the given number is divisible by 3. 
Show the message to the user if the number is divisible by 3. 
 code:
 
 var a = +prompt("Enter a number to check if the number is divisible by 3 or not")
 if (a%3==0)
 {
 	alert("Yes The Number is divisible by 3")
 }
 else
 {
 	alert("Not Divisible By 3")
 }
======================================================================================
 9. Write a program that checks whether the given input is an even number or an odd number. 

 var a = +prompt("Enter a number to check if the number is even number or an odd")
 if (a%2 ==0 ) {alert("The Number is Even")}
 	else{alert("The Number is Odd")}


======================================================================================
10. Write a program that takes temperature as input and shows a message 
based on following criteria 
a. T > 40 then It is too hot outside. 
b. T > 30 then The Weather today is Normal. 
c. T > 20 then Today’s Weather is cool. 
d. T > 10 then OMG! Today’s weather is so Cool. 

code:

var T = +prompt("Please enter temperature")
if (T>40) {alert("It is too hot outside");}
else if (T>30) {alert("The Weather today is Normal");}
else if (T>20) {alert("Today’s Weather is cool");}
else if (T>10) {alert("OMG! Today’s weather is so Cool");}
======================================================================================
11. Write a program to create a calculator for +,-,*, / & % using if statements. 
Take the following input: 
a. First number
b. Second number 
c. Operation (+, -, *, /, %) 
Compute & show the calculated result to user. 

code:

var a = +prompt("Enter first Number: ")
var b = +prompt("Enter second Number: ")
var result = prompt("Enter  Operation (+, -, *, /, %) ")
if (result == "+")
{
alert(a+b); 
}
else if (result == "-")
{
alert(a-b); 
}
else if (result == "*")
{
alert(a*b); 
}
else if (result == "/")
{
alert(a/b); 
}
else if (result == "%")
{
alert(a%b); 
}



=================================
Chapter # 12-13 
(IF…ELSE & ELSE IF STATEMENT, 
TESTING SET OF CONDITIONS )
===================================


1. Write a program that takes a character (number or string) in a variable & checks 
whether the given input is a number, uppercase letter or lower case letter. 
(Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

code:

var strings = prompt('Enter Somthing here to check Lowercase, Uppercase or Numeric');
var i=0;
var character='';
while (i <= strings.length){
    character = strings.charAt(i);
    if (!isNaN(character * 1)){
        alert('character is numeric');
    }else if
        (character == character.toUpperCase()) {
            alert ('upper case true');
        }
        else if (character == character.toLowerCase()){
            alert ('lower case true');
        }
    
    i++;
}

======================================================================================
2. Write a JavaScript program that accept two integers and display the larger. 
Also show if the two integers are equal. 

code:
var a = +prompt("Enter Value")
var b = +prompt("Enter Value")
if (a<b)
{
	alert(b+ " is greater")
}
else if (a>b)
{
	alert(a+ " is greater")
}
else if (a==b)
{
	alert("Both are equal")
}



======================================================================================
3. Write a program that takes input a number from user & state 
whether the number is positive, negative or zero.

code:

var a = +prompt("Enter a number")
if (a<0)
{
	alert(a+" is negative value")
}
else if (a>0)
{
	alert(a+" is positive value")
}
else if (a == 0)
{
	alert(a+" is 0 value")
}



======================================================================================
. Write a program that takes a character (i.e. string of length 1) and returns 
true if it is a vowel, false otherwise 


var a = prompt("Enter a character")
if (a === 'a'|| a === 'e'|| a === 'i'|| a === 'o'|| a === 'u')
{
	alert("true");
}
else
{
	alert("false")
}


======================================================================================

5. Write a program that 
a. Store correct password in a JS variable. 
b.  Asks user to enter his/her password 
c.  Validate the two passwords: 
i. Check if user has entered password. If not, then give message 
 Please enter your password 
ii. Check if both passwords are same. If they are same, show message Correct! 
The password you entered matches the original password. 
Show Incorrect password otherwise. 
 
 Code:

var pass1 = "123";
var a = prompt("Enter Your password")
if (a!== null  && a !==0 && a =="123")
{
	alert("The password you entered matches the original password")
}
else if (a !=="123")
{
	alert("Incorrect password")
}
else if (a == null) 
{
	alert("please Enter password")
}


6. This if/else statement does not work. 
Try to fix it: var greeting; var hour = 13; 
if (hour < 18) { greeting = "Good day"; 
else greeting = "Good evening"; } 
 
code:  


var greeting; 
var hour = 13; 
if (hour < 18) 
	{ 
		alert("Good day");
	}

else 
	{ 
		alert("Good evening"); 
    } 


7. Write a program that takes time as input from user in 24 hours clock 
format like: 1900 = 7pm. 
Implement the following case using if, else & else if statements 

code:

var time = +prompt("Enter time")
if (time >= "0000" && time < 1200)
{
	alert("Good Morning!")
}
else if (time >= "1200" && time < 1700)
{
	alert("Good Afternoon!")
}
else if (time >= "1700" && time < 2100)
{
	alert("Good Evening!")
}
else if (time >= "2100" && time < 2359)
{
	alert("Good Night!")
}

====================================
Chapter # 14-16
(ARRAYS)
===================================

1. Declare an empty array using JS literal notation to store student names in future.
code:

var array;
array = [];

======================================================================================
2. Declare an empty array using JS object notation to store student names in future

code:

var array = [];

======================================================================================
3. Declare and initialize a strings array.
code:

var Array = ["hello"];

======================================================================================
4.  Declare and initialize a numbers array. 
code:

var Array = [1];

======================================================================================
5.  Declare and initialize a boolean array. 
code

var boolArray = [true,false];

======================================================================================
6. Declare and initialize a mixed array. 
code:
var Array = [1,"Hello"];

======================================================================================
7. Declare and Initialize an array and store available education qualifications 
in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
Show the listed qualifications in your browser like: 

code:


var a = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phill","PhD"];

document.write("<br>1)"+a[0])
document.write("<br>2)"+a[1])
document.write("<br>3)"+a[2])
document.write("<br>4)"+a[3])
document.write("<br>5)"+a[4])
document.write("<br>6)"+a[5])
document.write("<br>7)"+a[6])
document.write("<br>8)"+a[7])



======================================================================================

8. Write a program to store 3 student names in an array.
Take another array to store score of these three students.
Assume that total marks are 500 for each student, 
display the scores & percentages of students like: 

code:
var a = ["Michael","John","Tony"];
var res = ["320","230","480"];
var totalMarks = 500;
document.write("Score of "+a[0]+ " Is "+res[0]+ ". Percentage: "+((res[0]/500))*100+"%");
document.write("<br>Score of "+a[1]+ " Is "+res[1]+ ". Percentage: "+((res[1]/500))*100+"%");
document.write("<br>Score of "+a[2]+ " Is "+res[2]+ ". Percentage: "+((res[2]/500))*100+"%");


======================================================================================
9. Initialize an array with color names. Display the array elements in your browser. 
a. Ask the user what color he/she wants to add to the beginning & add that color to the
 beginning of the array. Display the updated array in your browser. 
b. Ask the user what color he/she wants to add to the end & add that color to the end 
of the array. Display the updated array in your browser. 
c. Add two more color to the beginning of the array. Display the updated array in your 
browser. 
d. Delete the first color in the array. Display the updated array in your browser. 
e. Delete the last color in the array. Display the updated array in your browser. 
f. Ask the user at which index he/she wants to add a color & color name. 
Then add the color to desired position/index.Display the updated array in your browser. 
g. Ask the user at which index he/she wants to delete color(s) & how many colors 
he/she wants to delete. Then remove the same number of color(s) from user-defined 
position/index. . Display the updated array in your browser


code:

var color = ["red","orange","pink"];
document.write(color)
var a = prompt("What color u want to add to the beginning");
color.unshift(a);
document.write("<br>"+color)
var b = prompt("What color u want to add to the end");
color.push(b);
document.write("<br>"+color)
color.unshift("black","silver")
document.write("<br>"+color)
color.shift();
document.write("<br>"+color)
color.pop();
document.write("<br>"+color);
var c = +prompt("At which index you want to add a color");
var d = prompt("Color name");
color.splice(c,0,d)
document.write("<br>"+color);
var e = +prompt("At which index you want to delete a color")
var f = +prompt("How many colors you want to delete ")
color.splice(e,f)

document.write("<br>"+color);



======================================================================================
10. Write a program to store student scores in an array & sort
the array in ascending order using Array’s sort method.

code:

var a = ["320","230","480","120"];
document.write("Score of Student : "+a)
a.sort();
document.write("<br>Ordered Score of Student : "+a)



======================================================================================
11. Write a program to initialize an array with city names. 
Copy 3 array elements from cities array to selectedCities array. 

code:


var cities = ["Karachi","Lahore","Peshawar","Islamabad","QUETTA"];
var selectedCities = ["Islamabad","QUETTA"];
document.write("Cities List: <br> "+ cities)
document.write("<br>Selcted Cities List : <br> "+ selectedCities)


======================================================================================
12.  Write a program to create a single string from the below mentioned array: 
var arr = [This ,  is ,  my ,  cat]; (Use array’s join method) 

code:

var arr = ["This"," is ","my ","cat"]; 
document.write("Array : <br> "+arr);
arr.join();
document.write("<br> String : <br>"+arr);

======================================================================================

13. Create a new array. Store values one by one in such a way that you can access the 
values in the order in which they were stored. 
(FIFO-First In First Out)

code:
var device = ["Keyboard","Mouse","Printer","Monitor"]
document.write("Devices : <br>" + device)
//document.write("<br>Out<br> Keyboard <br>Out<br> Mouse <br>Out<br> Printer <br>Out<br> Monitor")
device.shift(0) //out keyboard
device.shift(1) //out mouse
device.shift(2) //out Printer
device.shift(3) //out Monitor
document.write("<br>Out<br> Keyboard <br>Out<br> Mouse <br>Out<br> Printer <br>Out<br> Monitor")

======================================================================================

14. Create a new array. Store values one by one in such a way that you can access the 
values in reverse order. (Last InFirst Out) 

code:


var device = ["Keyboard","Mouse","Printer","Monitor"]
document.write("Devices : <br>" + device)
//document.write("<br>Out<br> Keyboard <br>Out<br> Mouse <br>Out<br> Printer <br>Out<br> Monitor")
device.shift(3) //out Monitor
device.shift(2) //out Printer
device.shift(1) //out mouse
device.shift(0) //out keyboard
document.write("<br>Out<br> Monitor <br>Out<br> Printer <br>Out<br>  Mouse<br>Out<br>  Keyboard")

======================================================================================

15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, 
Nokia, Sony & Haier) in an array. Display the following 
dropdown/select menu in your browser using document.write() method: 

code:


var arr = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write(arr[0]);
document.write("<br>"+arr[1]);
document.write("<br>"+arr[2]);
document.write("<br>"+arr[3]);
document.write("<br>"+arr[4]);
document.write("<br>"+arr[5]);





=================================
Chapter # 17-20 
(ARRAYS AND LOOP)
===================================


1. Declare and initialize an empty multidimensional array. (Array of arrays)  

code:

var a = [];

2. Declare and initialize a multidimensional array representing the following matrix:  
 
======================================================================================

3. Write a program to print numeric counting from 1 to 10.  

code:

for( var i = 1; i <=10; i++)
{
	document.write(i+"<br>")
}


======================================================================================

4.  Write a program to print multiplication table of any number using for loop. 
Table number & length should be taken as an input from user.  
 



var num =+prompt("Please Enter a number to print a table");
var length =+prompt("Please Enter the length of a table");

for (var a=1; a <=length; a++)
{
	
	document.write(num+"x"+a+"="+num*a+"<br>");
	
}

======================================================================================

5. Write a program to print items of the following array using for loop: 
fruits = [apple, banana, mango, orange, strawberry] 
 

 code:

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  
  document.write(fruits[i]+"<br>")
}
document.write("<br><br><br>")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (var i = 0; i < fruits.length; i++) {
  
  document.write("Element at index "+ i+ " is "+fruits[i]+"<br>")
}



======================================================================================

6. Generate the following series in your browser. See example output. 
a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 


// code : 
//counting 1 - 15
document.write("Counting: <br>");
for (var a = 1; a<=15; a++)
{
	document.write(a+", ")

}

document.write("Counting: <br>");
document.write("<br>")
// Reverse counting 1 - 15
document.write("Reverse Counting: <br>");

for (var a = 10; a>=1; a--)
{
	document.write(a+", ")
}
document.write("<br>")
document.write("<br>")
//Even 
document.write("Even: <br>");
for (var a = 0; a<=20; a++)
{
	if(a%2==0)
	{
	document.write(a+", ")
	}

}
document.write("<br>")
document.write("<br>")
//Odd 
document.write("Odd: <br>");
for (var a = 1; a<=20; a++)
{
	if(a%2==!0)
	{
	document.write(a+", ")
	}
}
document.write("<br>")
document.write("<br>")
//series
document.write("Series: <br>");
for (var a = 1; a<=20; a++)
{
	if(a%2==0)
	{
	document.write(a+"K, ")
	}

}

======================================================================================

7. You have an array A = [cake, apple pie, cookie, chips, patties] 
Write a program to enable search by user input in an array. After searching,
prompt the user whether the given item is found in the list or not. Example


code:

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to the ABC Bakery. What do you want to order?")
if (A.indexOf(search) == 0 || A.indexOf(search) == 1 || A.indexOf(search) == 2 || A.indexOf(search) == 3 || A.indexOf(search) == 4 )
 
alert(search + " is available at index "+A.indexOf(search)+" in our bakery");
else 
	alert("We are Sorry. "+search+" is not available in our bakery")





======================================================================================
8. Write a program to identify the largest number in the given array. 
A = [24, 53, 78, 91, 12]. 
code: 
	
var A = [24, 53, 78, 91, 12];
var largest =A[0];
for(var i=0; i<A.length; i++)
{
	if (largest < A[i]) 
	{
		largest = A[i];
	}
}
document.write("Array items: "+A+"<br>")
document.write("the largest Number is : "+largest)



======================================================================================


9. Write a program to identify the smallest number in the given array.
 A = [24, 53, 78, 91, 12] 
 code:

var A = [24, 53, 78, 91, 12];
var smallest =A[0];
for(var i=0; i<A.length; i++)
{
	if (smallest > A[i]) 
	{
		smallest = A[i];
	}
}
document.write("Array items: "+A+"<br>")
document.write("the smallest Number is : "+smallest)


======================================================================================


10. Write a program to print multiples of 5 ranging 1 to 100

code:

var a =5;
for(var i = 1; i<=20; i++)
{
	document.write(i*a+",")
}

*/