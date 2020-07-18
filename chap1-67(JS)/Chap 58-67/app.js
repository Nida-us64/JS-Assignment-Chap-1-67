 // Chap 58-67 Question 1 
//					    Question 1 Part i 	
// 1. Consider you have following code snippet: (Copy it in your HTML file)	
//i. Get element of id “main-content” and assign them in a variable. ii. Display all child elements of “main-content” element. iii. Get all elements of class “render” and show their innerHTML in browser. iv. Fill input value whose element id first-name using javascript. v. Repeat part iv for id ”last-name” and “email”. 				
 //Code
/*
	var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5]
	console.log(a)
*/ 

	//					 Question 1 Part ii 	
 //code:

//	console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5])
	 


//						 Question 1 Part iii 	
 //code:
/*
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1])
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[3])
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[5])
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[7])
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[9])
 */


//						 Question 1 Part iv 	
// Code
/*
  var fn = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[3]
  console.log(fn)
  fn.setAttribute("type","text")
  fn.setAttribute("value","ALex")

*/ 

//						 Question 1 Part v 	

 //Code
/*
  var ln = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7]
  console.log(ln)
  ln.setAttribute("type","text")
  ln.setAttribute("value","Bank")
  var email = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[11]
  console.log(email)
  email.setAttribute("type","text")
  email.setAttribute("value"," alexbank@example.com")
*/  


//						 Question 2 Part i 
 
//Code	
/*var a = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].nodeType;
  	console.log(a)
*/ 



//
//						 Question 2 Part ii 
 //Code 
/*var ln = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[7].nodeType;
  console.log(ln)
*/
 
 
//
//						 Question 2 Part iii 
 //Code
/*	var ln = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[5]
  console.log(ln)
   var textnode = document.createTextNode("Surname");
  var item =  document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[5]
  item.replaceChild(textnode, item.childNodes[0]);
*/
 
 
//
// 						 Question 2 Part iv 
  //Code 
/*	var FirstChild = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[1]
  console.log(FirstChild)
  	var LastChild = document.childNodes[1].childNodes[2].childNodes[1].childNodes[5].childNodes[9]
  console.log(LastChild)
 */	
  					

  
//						 Question 2 Part v 
  //Code
 /*var NextSibling = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[5].nextElementSibling.nextElementSibling
  console.log(NextSibling)

 var PrevSibling = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[5].previousSibling.previousSibling
  console.log(PrevSibling)  	
 */ 		
 

//					 Question 2 Part vi 		
 
//Code
	// var nodeType = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[9].nodeType;
 //  console.log(nodeType)

 //  var parentNode = document.childNodes[1].childNodes[2].childNodes[1].childNodes[3].childNodes[9].parentNode
 //  console.log(parentNode)

  
 								
