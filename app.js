// Chapter = 5

// Q1
var num1 = +prompt("Enter first num for addition");
var num2 = +prompt("Enter second num for addition");
document.write("Sum of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 + num2)+"<br />");

// Q2
var num1 = +prompt("Enter first num for subtraction");
var num2 = +prompt("Enter second num for subtraction");
document.write("Sub of" + " " + num1 + " " + "and" + " " + num2 + " is " + (-(num1 - num2))+"<br />");

// ii
var num1 = +prompt("Enter first num for multiplication");
var num2 = +prompt("Enter second num for multiplication");
document.write("Multiple of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 * num2)+"<br />");

// iii
var num1 = +prompt("Enter first num for division");
var num2 = +prompt("Enter second num for division");
document.write("division of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 / num2)+"<br />");

// iv
var num1 = +prompt("Enter first num for Modulus");
var num2 = +prompt("Enter second num for Modulus");
document.write("Modulus of" + " " + num1 + " " + "and" + " " + num2 + " is " + (num1 % num2)+"<br />");

// Q3
var num = +prompt("Enter a number");
var num2 = +prompt("Enter a num to add in previous num");
var res = num + num2;
document.write("Value after variable declaration is: " + num + "<br />");
document.write("initail value : " + num + "<br />");
num++;
document.write("Value after increment is: " + num + "<br />");
document.write("Value after Addition is: " + res + "<br />");
--res;
document.write("Value after decrement is: " + res + "<br />");
document.write("Value after Addition is: " + res/3 + "<br />");

// Q4
var ticketQuantity = +prompt("How much tickets you want ?");
var ticketPrice = 600;
document.write("Per Ticket Cost : " + ticketPrice + "Rs." + "<br />");
document.write("Total Cost to buy " + ticketQuantity + " tickets of a movie is " + (ticketPrice * ticketQuantity) + "Rs." + "<Br />");

// Q5
var tableNo = prompt("Enter a number you want its Table.");
document.write("Table of " + tableNo + "<br />");
for (var i = 1; i <= 10; i++) {
    document.write(tableNo + " x " + i + " = " + (i * tableNo) + "<br />");
}

// Q6
var tempInC = prompt(" convert temperature from C to F");
var tempInC2 = prompt(" convert temperature from F to C");
var tempInF2 = (tempInC2 - 32) * 5 / 9;
var tempInF = (tempInC * 9 / 5) + 32;
document.write(tempInC + "<sup>o</sup>C is " + tempInF + "<sup>o</sup>F" + "<br />");
document.write(tempInC2 + "<sup>o</sup>F is " + tempInF2 + "<sup>o</sup>C");

// Q7
var item01Price = 650;
var item02Price = 100;
var shippingCharges = 100;
var item01Quantity = +prompt("Enter Quantity of item 1");
var item02Quantity = +prompt("Enter Quantity of item 2");

document.write("<h2>Shopping Cart</h2>" + "<br />");
document.write("Price of item 1 is " + item01Price + "Rs" + "<br />");
document.write("Quantity of item 1 is " + item01Quantity + "<br />");
document.write("Price of item 2 is " + item02Price + "Rs" + "<br />");
document.write("Quantity of item 2 is " + item02Quantity + "<br />");
document.write("Shipping Charges is " + shippingCharges + "<br />");
document.write("<br />" + "Total Cost of your order is " + ((item01Price * item01Quantity) + (item02Price * item02Quantity) + shippingCharges) + "Rs" + "<br />");

// Q8
var TotalMarks = +prompt("Enter Total Marks");
var ObtainedMarks = +prompt("Enter your Obtained Marks");

document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks : " + TotalMarks + "<br />");
document.write("Marks Obtained : " + ObtainedMarks + "<br />");
document.write("Percentage :" + (ObtainedMarks / TotalMarks) * 100 + "%" + "<br />");

// Q9
var dollar = +prompt("Enter Dollars you have to convert in PKR") * 104.80;
var riyal = +prompt("Enter riyals you have to convert in PKR") * 28;

document.write("<h2>Currency in PKR</h2>");
document.write("Total Currency in PKR : " + (dollar + riyal) + "Rs" + "<br />");

// Q10
document.write((((+prompt("Enter a num to perform arithmetic operations") + 5) * 10) / 2));

// Q11
var currentYear = 2023;
var birthYear = +prompt("Enter your Birth Year to find your age");

document.write("<h2>Age Calculator</h2>" + "<br />");
document.write("Current year : " + currentYear + "<br />");
document.write("Birth year : " + birthYear + "<br />");
document.write("Your Age is : " + (currentYear - birthYear) + "<br />");

// Q12
var radius = prompt("Enter the Radius of a Circle.");
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h2>The Geometrizer</h2>");
document.write("Radius of a Circle : " + radius + "<br />");
document.write("The Circumference is : " + circumference + "<br />");
document.write("The Area is : " + area + "<br />");

// Q13
var CurrentAge = +prompt("Enter your current Age");
var lastAge = +prompt("Enter your Max-Age you want to live");
var snacksPerDay = 5;
var favSnacks = prompt("Enter your Favourite Snacks");

document.write("<h2>The Lifetime Supply Calculator</h2>");
document.write("Favourite Snacks : " + favSnacks + "<br />")
document.write("Your Current Age : " + CurrentAge + "<br />");
document.write("Estimated Maximum Age : " + lastAge + "<br />");
document.write("Amount of snacks per day for survive : " + snacksPerDay + "<br />");
document.write("You will need " + (lastAge - CurrentAge) * snacksPerDay + favSnacks + " snacks to last you until the ripe old age of " + lastAge + "<br />");

Chapter = 6

// Q1
var num = +prompt("Enter a Number");

document.write("Result :" + "<br />");
document.write("The Value of a is : " + num + "<br />");
document.write("<hr />" + "<br />");
++num;
document.write("The value of ++a is : " + num + "<br />");
document.write("Now the value of is : " + num + "<br />");
document.write("<br />");
document.write("The value of a++ is : " + num + "<br />");
num++;
document.write("Now the value of is : " + num + "<br />");
document.write("<br />");
--num;
document.write("The value of --a is : " + num + "<br />");
document.write("Now the value of is : " + num + "<br />");
document.write("<br />");
document.write("The value of a-- is : " + num + "<br />");
num--;
document.write("Now the value of is : " + num + "<br />");

// Q2
var num1 = +prompt("Enter value for a");
var num2 = +prompt("Enter value for b");
var Question = "--a - --b + ++b + b--"
document.write("Value of a : " + num1 + ".<br />");
document.write("Value of b : " + num2 + ".<br />");
document.write("<b>Question</b> : " + Question + ".<br />");

document.write("<b>Solution</b> : " + "<br />");
var a = --num1;
document.write("--a : " + a + ".<br />");
var b = a - --num2;
document.write("--a - --b : " + b + ".<br />");
var c = b + ++num2;
document.write("--a - --b + ++b : " + c + ".<br />");
var d = c + num2--;
document.write("--a - --b + ++b + b-- : " + d + ".<br />");
document.write("<b>Result</b> : " + d + ".<br />");

// Q3
var name = prompt("Enter your name");
alert("Hello ! " + name);

// Q4
var tableNo = +prompt("Enter a number you wants its Table", 5);

document.write("Table of " + tableNo + ".<br/>" + "<br/>");
for (var i = 1; i <= 10; i++) {
    document.write(i + ") " + tableNo + " x " + i + " = " + (tableNo * i) + ".<br/>");
}

// Q5
var sub01 = prompt("Enter your first Subject Name");
var sub02 = prompt("Enter your Second Subject Name");
var sub03 = prompt("Enter your Third Subject Name");
var Marks01 = +prompt("Enter your " + sub01 + " subject scores");
var Marks02 = +prompt("Enter your " + sub02 + " subject scores");
var Marks03 = +prompt("Enter your " + sub03 + " subject scores");
var totalMarks = 100;
var Percentage = (((Marks01 / totalMarks) * 100) + ((Marks02 / totalMarks) * 100) + ((Marks03 / totalMarks) * 100)) / 3;
var totalObtainMarks = Marks01 + Marks02 + Marks03;

document.write(
    "<table>" +
    "<tr>" +
    "<td><b>Subject</b></td>" +
    "<td><b>Total Marks</b></td>" +
    "<td><b>Obtained Marks</b></td>" +
    "<td><b>Percentage</b></td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + sub01 + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + Marks01 + "</td>" +
    "<td>" + (Marks01 / totalMarks) * 100 + "%" + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td>" + sub02 + "</td >" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + Marks02 + "</td>" +
    "<td>" + (Marks02 / totalMarks) * 100 + "%" + "</td>" +
    "</tr >" +
    "<tr>" +
    "<td>" + sub03 + "</td>" +
    "<td>" + totalMarks + "</td>" +
    "<td>" + Marks03 + "</td>" +
    "<td>" + (Marks03 / totalMarks) * 100 + "%" + "</td>" +
    "</tr>" +
    "<tr>" +
    "<td><b>Result</b></td>" +
    "<td><b>" + (totalMarks + totalMarks + totalMarks) + "</b></td>" +
    "<td><b>" + totalObtainMarks + "</b></td>" +
    "<td><b>" + Percentage + "%" + "</b></td>" +
    "</tr>" +
    "</table >");

Chapter =9

// Q1
var city = prompt("Enter your city Name");

if (city === "karachi") {
    document.write("Welcome to city of lights");
}else{
    document.write("That's Great!")
}

// Q2
var gender = prompt("Enter your Gender (in small)", "male");

if (gender === "male") {
    document.write("Good Morning Sir" + "<br />");
} else if (gender === "female") {
    document.write("Good Morning Ma'am" + "<br />");
} else {
    document.write("Invalid Sorry!" + "<br />");
}

// Q3
var signal01 = prompt("Enter first Signal color to know its Message.");
var signal02 = prompt("Enter second Signal color to know its Message.");
var signal03 = prompt("Enter Third Signal color to know its Message.");
var mes01 = "Must Stop";
var mes02 = "Ready to move";
var mes03 = "Move Now";

if (signal01 === "red"){
    document.write(mes01)
}

    document.write(
        "<table>" +
        "<tr>" +
        "<td><b>Signal Colors</b></td>" +
        "<td><b>Message</b></td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + signal01 + "</td>" +
        "<td></td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + signal02 + "</td>" +
        "<td></td>" +
        "</tr>" +
        "<tr>" +
        "<td>" + signal03 + "</td>" +
        "<td></td>" +
        "</tr>" +
        "</table >"
    )

// Q4
var currentFuel = +prompt("Enter Vehicle's Current Fuel (in liters and only numbers)");

if (currentFuel === 0.25) {
    document.write("Please refill the fuel in your car");
}
else {
    document.write("It should be Enough");
}

// Q5
// i
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// ii
var b = 82;
if (b++ === 83) {
    alert("given condition for variable a is true");
} else {
    alert("not match");
}

// iii
var c = +prompt("enter num");
var res = c + 1;
if (c++ === res) {
    alert("condition 1 is true");
}
if (c === res) {
    alert("condition 2 is true");
}
res++;
if (++c < res) {
    alert("condition 3 is true");
}
if (c === res) {
    alert("condition 4 is true");
}

// iv
var materialCost = +prompt("Enter cost of Material");
var labourCost = +prompt("Enter cost of labour");
var totalCost = materialCost + labourCost;

if (totalCost === materialCost + labourCost) {
    alert("The Cost is equal")
}

// v
if (true) {
    alert("True")
}
if (false) {
    alert("False")
}

// vi
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Q6
var Mark01 = +prompt("Enter First Subject Marks");
var Mark02 = +prompt("Enter Second Subject Marks");
var Mark03 = +prompt("Enter thrid Subject Marks");
var givenMarks = 100;
var totalMarks = givenMarks + givenMarks + givenMarks;
var obtainedMarks = Mark01 + Mark02 + Mark03;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h2>Marks Sheet</h2>")
document.write("Total Marks : " + totalMarks + "<br />")
document.write("Marks obtained : " + obtainedMarks + "<br />")
document.write("percentage : " + percentage + " % " + "<br />")
if (percentage >= 80) {
    document.write("Grade : A-one" + "<br />");
    document.write("Remarks : Exellent" + "<br />");
}
else if (percentage >= 70) {
    document.write("Grade : A" + "<br />");
    document.write("Remarks : Good" + "<br />");
}
else if (percentage >= 60) {
    document.write("Grade : B" + "<br />");
    document.write("Remarks : You need to improve" + "<br />");
}
else {
    document.write("Grade : Fail" + "<br />");
    document.write("Remarks : Sorry" + "<br />");
}

document.write("" + "<br />")

document.write(
    "<table>" +
    "<tr>" +
    "<th>Percentage %</th>" +
    "<th>Grade</th>" +
    "<th>Remarks</th>" +
    "</tr>" +
    "<tr>" +
    "<td>Greater than or equal to 80</td>" +
    "<td>A-one</td>" +
    "<td>Exellent</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Greater than or equal to 70</td>" +
    "<td>A</td>" +
    "<td>Good</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Greater than or equal to 60</td>" +
    "<td>B</td>" +
    "<td>You need to improve</td>" +
    "</tr>" +
    "<tr>" +
    "<td>Less than 60</td>" +
    "<td>Fail</td>" +
    "<td>Sorry</td>" +
    "</tr>" +
    "</table>"
)