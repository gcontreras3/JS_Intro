var input = prompt('Type a phrase');

if (input == input.toUpperCase()) {
    console.log("You are shouting");
} else if (input == input.toLowerCase()) {
    console.log("You are whispering");
} else {
    console.log('No input');
}