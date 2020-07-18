/*==================================================================
								CHAP 38-42
====================================================================
*/
//1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

//Code:

/*function pow()
{
var power =1;
var a = +prompt("To find a raised to the power b.\n give value of a")
var b = +prompt("Give value of b");
for (var i = 1; i<= b; i++)
{
	power=power*a
}

alert("Power of A raised to b is "+power)
return 0
}
pow();
*/

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
/*

//Code:

 function leapyear()
{
	var year = +prompt("Enter Year")
	if (year % 100 === 0 || year % 400 === 0 || year % 4 === 0) 
	{
		alert(year+" Is a Leap Year")
	}
	else
	{
		alert(year+" Is Not a Leap Year")
	}
}
leapyear();
*/

//3. If the lengths of the sides of a triangle are denoted by a, b, and c, 
//then area of triangle is given by 
//area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
//Calculate area of triangle using 2 functions 
 //Code:

// var a =+prompt("Enter value of a");
// var b =+prompt("Enter value of b");
// var c =+prompt("Enter value of c");
// function Sinit()
// {
// 	var s = (a + b + c)/2;
// 	return s
// }
// function test()
// {	var s = Sinit();
// 	var area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
// 	return area
// }
// var z =  test();
// alert("Area of triangle is : "+z)

//4. Write a function that receives marks received by a student in 3 subjects and 
//returns the average and percentage of these marks. there should be 3 functions one is the mainFunction 
//and other are for average and percentage. 
//Call those functions from mainFunction and display result in mainFunction

//Code:

/*var a = +prompt("Enter Marks of Subject 1"); 
var b = +prompt("Enter Marks of Subject 2");
var c = +prompt("Enter Marks of Subject 3");
var totalMarks = 300;
function Main()
{

	 console.log("Average: "+Average());
	 console.log("Percentage: "+Percentage());
}
function Average()
{
	var avg = (a+b+c)/3
	return avg
}
function Percentage()
{
 var per = ((a+b+c)/totalMarks)*100
 return per
}
Main();
*/

//5. You have learned the function indexOf. Code your own custom 
//function that will perform the same functionality. You can code for single character as of now.

//Code:

/*
var str = "123456789";
var n = str.indexOf(9);
alert ("String: "+ str +"\nindex at "+n);
*/
  
//6. Write a function to delete all vowels from a sentence. 
//Assume that the sentence is not more than 25 characters long.

// Code:

// var str = prompt("Enter any sentence: :)")
// function removeVowels() {
//   return str.replace(/[aeiou]/gi, '');
// }
// var a =removeVowels("Hello World");
// alert(a)

//7. Write a function with switch statement to count the number of occurrences 
//of any two vowels in succession in a line of text. For example, in the sentence. 
//“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui
//Code:
/*
function findOccurrences() {
  var str = "Pleases read this application and give me gratuity";
  var res = str.match(/[aeiou]{2}/g);
  return res ? res.length : 0;
}

var found = findOccurrences();

alert(found); 
*/


//8. The distance between two cities (in km.) is input through the keyboard. Write four 
//functions to convert and print this distance in meters, feet, inches and centimeters. 


//code:

// var distance = +prompt("Enter Distance in KM : ")
// function meters()
// {
// distance = distance*1000;
// return distance;
// }
// function feet()
// {
// feettt = distance*3280.84
// return feettt
// }
// function inches()
// {
// inchess=distance*39370.1;
// return inchess
// }
// function centimeters()
// {
// centimeterss = distance*100000
// return centimeterss
// }

// document.write(distance+"KM  to centimeters : "+centimeters())
// document.write("<br>"+distance+" KM  to inches : "+inches())
// document.write("<br>"+distance+" KM  to feet: "+feet())
// document.write("<br>"+distance+" KM to Meter: "+meters())

//9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of 
//Rs. 12.00 per hour for every hour worked above 40 hours. 
//Assume that employees do not work for fractional part of an hour. 

//code:

/*
function get_salary() {

var hours = +prompt("Please enter the number of hours you worked this week");
var rate = 12;
if (hours>= 40)
	{
	regpay = (rate * 40)
	overtimepay = ((rate * 1.5) * (hours - 40))
	pay = (regpay + overtimepay)
	alert ("You earned overtime this week! Your total pay is " + pay);
	}
else 
	{
	alert ("U don't have earn any overtime this week! ");
	}
}
get_salary();

*/
//10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input 
//through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier 
//will have to give to the withdrawer

//code:

/*
var withdrawAmm = prompt("Enter Ammount to withdrawn!!")
var hundred = Math.floor(withdrawAmm/100);
document.write("Required notes of Rs. 100  :"+hundred);
var fifty = Math.floor((withdrawAmm % 100)/50)
document.write("<br>Required notes of Rs. 50  :"+fifty);
var ten = Math.floor(((withdrawAmm%100)%50)/10)	
document.write("<br>Required notes of Rs. 10  :"+ten);
document.write("<br>Ammount Remaining :"+((withdrawAmm%100)%50)%10);

*/
/*==================================================================
								CHAP 43-48 (Events)
====================================================================
*/

 
//1. Show an alert box on click on a link. 
//code:

/*function foo()
{
alert("You are Unique!!! :)")
}
*/
//2. Display some Mobile images in browser. On click on an image Show the message in alert to user. 

//code:

/* 
function foo()
{
alert("Thanks For Purchasing Mobile From us!! :)")
}
*/

//3. Display 10 student records in table and each row should contain a delete button. 
//If you click on a button to delete a record, entire row should be deleted. 


//code:

/*
function del0()
{
	var a = document.getElementById('l1');
	a.remove(a.childNodes[0])	
}
function del1()
{
	var b = document.getElementById('l2');
	b.remove(b.childNodes[0])	
}
function del2()
{
	var c = document.getElementById('l3');
	c.remove(c.childNodes[0])	
}
function del3()
{
	var d= document.getElementById('l4');
	d.remove(d.childNodes[0])	
}
function del4()
{
	var d= document.getElementById('l5');
	d.remove(d.childNodes[0])	
}
function del5()
{
	var d= document.getElementById('l6');
	d.remove(d.childNodes[0])	
}
function del6()
{
	var d= document.getElementById('l7');
	d.remove(d.childNodes[0])	
}
function del7()
{
	var d= document.getElementById('l8');
	d.remove(d.childNodes[0])	
}
function del8()
{
	var d= document.getElementById('l9');
	d.remove(d.childNodes[0])	
}
function del9()
{
	var d= document.getElementById('l10');
	d.remove(d.childNodes[0])	
}
function del10()
{
	var d= document.getElementById('l11');
	d.remove(d.childNodes[0])	
}
*/


//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. 
//code:
/*
 function swapPic() {
 	document.getElementById("before").src = "img/mob2.png";
 }
 function mOut()
 {
 	document.getElementById("before").src = "img/mob1.png";
 }
 */

 //5. Show a counter in browser. Counter should increase on click on increase 
 //button and decrease on click on decrease button. And show updated counter value in browser
 
 //code:
/*
 var button = document.getElementById("clickme"),
 count = 0;
 button.onclick = function() {
 count += 1;
 button.innerHTML = "Click me: " + count;
};
*/

/*==================================================================
								CHAP 49-52 (Events)			
====================================================================
*/
 //1. Create a signup form and display form data in your web page on submission.
 //code:
/*
 function myFunction() {

  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }

  document.getElementById("data").innerHTML = text;

}
*/


//2. Suppose in your webpage there is content area in which you have entered your item details, 
//but user can only see some details on first look. When user clicks on “Read more” button, 
//full detail of that particular item will be displayed.  
 
//code:
/*
function ShowHide(divId)
{
if(document.getElementById(divId).style.display == 'none')
{
document.getElementById(divId).style.display='block';
}
else
{
document.getElementById(divId).style.display = 'none';
}
}
*/

//3. In previous assignment you have created a tabular data using javascript. 
//Let’s modify that. Create a form which takes student’s details and show each student detail in table. 
//Each row of table must contain a delete button and an edit button. On click on delete button entire row 
//should be deleted. 
//On click on edit button, a hidden form will appear with the values of that row.

//code:
/*
		var Index,
			table = document.getElementById('table');

	function addRow() 
	{
		var newRow = table.insertRow(table.length);
		var cell1 = newRow.insertCell(0);
		var cell2 = newRow.insertCell(1);
		var cell3 = newRow.insertCell(2);
		var fname=document.getElementById('fname').value;
		var lname=document.getElementById('lname').value;
		var age=document.getElementById('age').value;

	cell1.innerHTML = fname;
	cell2.innerHTML = lname;
	cell3.innerHTML = age;
	selectedRowToInput();
	}
	function selectedRowToInput()
	{
		var Index,table = document.getElementById('table');
		for(var i = 1; i<table.rows.length; i++)
		{
			table.rows[i].onclick =function()
			{
				rIndex = this.rowIndex;
				document.getElementById('fname').value =this.cells[0].innerHTML;
				document.getElementById('lname').value =this.cells[1].innerHTML;
				document.getElementById('age').value =this.cells[2].innerHTML;
			};
		}
	}
selectedRowToInput();
	function edit()
	{
		var fname =document.getElementById('fname').value;
		var lname =document.getElementById('lname').value;
		var age =document.getElementById('age').value;

		table.rows[rIndex].cells[0].innerHTML = fname;
		table.rows[rIndex].cells[1].innerHTML = lname;
		table.rows[rIndex].cells[2].innerHTML = age;
	}
	function delRow()
	{
		table.deleteRow(rIndex);
		document.getElementById('fname').value = "";
		document.getElementById('lname').value  = "";
		document.getElementById('age').value  = "";
	}
*/

//i. Get element of id “main-content” and assign them in a variable. 
//ii. Display all child elements of “main-content” element. 
//iii. Get all elements of class “render” and show their innerHTML in browser. 
//iv. Fill input value whose element id first-name using javascript. 
//v. Repeat part iv for id ”last-name” and “email”.	

//code:

  // var c = document.getElementById("main-content").childNodes;
  // document.getElementById("demo").innerHTML = c.text;