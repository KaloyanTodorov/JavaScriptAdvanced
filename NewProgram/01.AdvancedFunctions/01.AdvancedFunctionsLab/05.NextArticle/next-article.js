function getArticleGenerator(articles) {
    let currentArticle = 0;
    return () => {
        if(currentArticle < articles.length) {
            let article = document.createElement('article');
            let content = document.querySelector('#content');
            
        
            article.textContent = articles[currentArticle];
            currentArticle++;
        
            content.appendChild(article);
        }
    }
}