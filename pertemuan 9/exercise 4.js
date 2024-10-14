// 1 for loop ()
let people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// 2  for Each()
people.forEach(function (person) {
  console.log(person);
});

// 3 remove "Greg"
people.shift();
console.log(people);

// 4 remove james
people.pop();
console.log(people);

// 5 add mat
people.unshift("Matt");
console.log(people);

// 6 push your name
people.push("brann");
console.log(people);

// 7 using  a for loop   maryy
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break; // Exit the loop
  }
}

// 8 write the command  to make a copy  of the array marry & mat
let copyWithoutMaryAndMatt = people.filter(
  (person) => person !== "Mary" && person !== "Matt"
);
console.log(copyWithoutMaryAndMatt);

// 9  Redefine the people variable with the value you started
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people);

//  10 Create a new variable called
let withBob = people.concat("Bob");
console.log(withBob);

// object exercise
["Matt", "Mary", "Elizabeth", "Artie", "Your Name"];
["Matt", "Mary", "Elizabeth", "Artie", "Your Name", "Bob"];

// 1 write the command to add  the language "Go"
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
programming.languages.push("Go");
console.log(programming);

// 2 By using the bracket notation, change the difficulty to the value of 7
programming["difficulty"] = 7;
console.log(programming);

//  3 Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);

//  4  By using the dot notation, write the command to add a new key called isFun and a value of true to the programming object
programming.isFun = true; 
console.log(programming);

// 5 Using a map(), iterate through the languages array and update each element to be “0 - JavaScript, 1 - Python, … ”, where 0 represents the index of the array, and console.log the output. 
programming.languages.map(function (language, index) {
  console.log(`${index} - ${language}`);
});


