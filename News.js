document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

function fetchNews() {
    // Replace 'YOUR_API_KEY' with your actual API key from NewsAPI
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-container');

            articles.forEach(article => {
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('article');

                const title = document.createElement('h3');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.textContent = article.description;

                articleDiv.appendChild(title);
                articleDiv.appendChild(description);

                newsContainer.appendChild(articleDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
        });
}
