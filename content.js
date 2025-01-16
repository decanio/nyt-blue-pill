// content.js

function getArticles() {
    // Story wrapper divs are typically identified by classes containing 'story'
    const storyElements = document.querySelectorAll('section[class*="story-wrapper"]');
    
    const substoryElements = document.querySelectorAll('p');
    const sidestoryElements = document.querySelectorAll('a');

    // Headlines are often in classes containing 'headline'
    const headlineElements = document.querySelectorAll('h2[class*="headline"], h3[class*="headline"]');
    
    return [...storyElements, ...substoryElements, ...sidestoryElements, ...headlineElements];
}

function shouldFilterArticle(article, topics) {
    const text = article.textContent.toLowerCase();
    return topics.some(topic => text.includes(topic.toLowerCase()));
}

function filterArticles() {
    { const topics = [ 'Trump', 'Musk', "Vance", "RFK", "Kennedy", "Ramaswamy" ];
        
        const articles = getArticles();
        articles.forEach(article => {
            if (shouldFilterArticle(article, topics)) {
                article.style.display = 'none';
            }
        });
    };
}

// Initial filter
filterArticles();

// Watch for dynamic content changes
const observer = new MutationObserver((mutations) => {
  filterArticles();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
