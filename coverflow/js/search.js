const articlesList = document.getElementById('articleList');
const searchBar = document.getElementById('searchBar');
let articles = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredArticles = articles.filter((article) => {
        return (
            article.name.toLowerCase().includes(searchString) ||
            article.house.toLowerCase().includes(searchString)
        );
    });
    displayArticles(filteredArticles);
});

const loadArticles = async () => {
    try {
        const res = await fetch('articleList.txt');
        articles = await res.json();
        displayArticles(articles);
    } catch (err) {
        console.error(err);
    }
};

const displayArticles = (articles) => {
    const htmlString = articles
        .map((article) => {
            return `
            <li class="article">
                <h2>${article.title}</h2>
                <p>Author: ${article.author}</p>
                <img src="${article.image}"></img>
            </li>
        `;
        })
        .join('');
    articlesList.innerHTML = htmlString;
};

loadArticles();