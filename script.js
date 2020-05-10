
const generate = document.getElementById('new-quote');


generate.addEventListener('click', generateQuote)




function generateQuote(){
    
    let quoteSize = quoteBank.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomQuote = quoteBank[randomIndex];
    document.getElementById('text').innerText = randomQuote.quote;
    document.getElementById('author').innerText = randomQuote.author;


let twitterLink = 'https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22'
let randomAPIquote = randomQuote.quote.replace(/ /g, '%20');
twitterLink += randomAPIquote + '"';
let randomAPIauthor = randomQuote.author.replace(/ /g, '%20');
twitterLink += " " + '- '+ randomAPIauthor;
document.getElementById('tweet-quote').href = twitterLink
}
