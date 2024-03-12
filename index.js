/*const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function generateNumberPattern() {
    rl.question('Enter the number of rows for the pattern: ', (input) => {
        const num = parseInt(input);

        // Validate input

if (isNaN(num) || num <= 0 || !Number.isInteger(num)) {
    console.log('Please enter a positive integer.');
    rl.close();
    return;
}

// Outer loop for rows
for (let i = 1; i <= num; i++) {
    let row = ''; // Initialize an empty string for each row
    
    // 
//Add spaces to align numbers
    for (let s = 1; s <= num - i; s++) {
        row += ' ';
    }
    
    // Inner loop for columns
    for (let j = 1; j <= i; j++) {
        row += i + ' '; // Append the row number to the row string
    }
    console.log(row); // Print each row to the console
}
rl.close();
});
}

// Call the function to generate the pattern
generateNumberPattern();


*/
/*function generateNumberPattern(num){

let pattern = '';

for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }
    pattern += "\n";
}

console.log(pattern);
}
 
generateNumberPattern(9)
*/
let pattern =''
function generateNumberPattern(num) {
    for (let i = 1; i <= num; i++) {
         pattern= '';
        for (let j = 1; j <= i; j++) {
            pattern += i;
        }
        console.log(pattern);
    }
}

generateNumberPattern(5);
