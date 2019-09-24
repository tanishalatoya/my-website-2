let movQuotes = ["Jake Sully: All I ever wanted was a single thing worth fighting for.",
"Trudy Chacon: You're not the only one with a gun,b***h.",
"Jim Young: Anybody who tells you money is the root of all evil doesn't have any.",
"Eames: You musn't be afraid to dream a little bigger, darling.",
"Cobb: Never recreate from your memory. Always image new places!", "Alice: You're entirely bonkers. But I'll tell you a secret. All the best people are.",
 "Rod Tidwell: Show me the money!",
"Jimmy Dugan: It's supposed to be hard. If it wasn't hard, everyone would do it. The hard ... is what makes it great."];

// Movie titles are displayed in the respective order of the movie quotes shown in the movQuotes array.

let movTitles = ["Avatar", "Avatar", "Boiler Room", "Inception", "Inception", "Alice in Wonderland", "Jerry Maguire", "A League of Their Own"];

//Calculates a random index number for both arrays.

let randomNum = Math.floor(Math.random() * movQuotes.length);

let randomQuote = movQuotes[randomNum];

let randomTitle = movTitles[randomNum];

//Displays random quote from array.
document.getElementById('movie-quote').textContent = randomQuote;

//Displays corresponding movie title with the displayQuote produced.
document.getElementById('movie-title').textContent = randomTitle;
