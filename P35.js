/**Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet! */
//Program number 35
var animal = ["Cat", "Dog", "Goat"];
for (var i = 0; i < animal.length; i++) {
    console.log("A " + animal[i] + " would make a good pet");
}
console.log("All those animals would make a good pet");
