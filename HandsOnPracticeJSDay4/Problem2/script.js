let marks = Number(prompt("Enter your marks:"));
if (isNaN(marks) || marks < 0) {
  document.writeln("Invalid input. Please enter a valid number for marks.");
}
if (marks >= 75 && marks <= 100) {
  document.writeln("Grade:A");
} else if (marks >= 60 && marks < 75) {
  document.writeln("Grade:B");
} else if (marks >= 40 && marks < 60) {
  document.writeln("Grade : C");
} else {
  document.writeln("Fail");
}
