const quote = document.getElementById('quote')
const author = document.getElementById('author')

const api_url = 'https://api.quotable.io/random';

const getquote = async(url) => {
    const res = await fetch(url);
    const date = await res.json()

    quote.innerHTML = date.content;
    author.innerHTML = date.author;
}

getquote(api_url)