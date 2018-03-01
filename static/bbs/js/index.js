'use strict';

const Article = function(title, content) {
    this.title = title;
    this.content = content;
    this.notice = false;
}

Article.prototype.isNotice = function()  {
    return this.notice;
}

const sendArticle = () => {

    var titleElement = document.querySelector('#article-title');
    var contentElement = document.querySelector('#article-content');

    var title = titleElement.value;
    var content = contentElement.value;

    var articleObject = new Article(title, content);

    titleElement.value = '';
    contentElement.value = '';

    fetch("https://aws.wheejuni.com/articles/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(articleObject)
    })
        .then(res => {
            console.log(res);
            return res.json();
        })
        .then(json => {
            let title = json.title;
            let content = json.content;

            return addElement(new Article(title, content));
        })
}

const addElement = (article) => {
    var title = article.title;
    var content = article.content;

    var template = document.querySelector('#article-template').content;

    var h = template.querySelector('h3');
    h.textContent = title;

    var body = template.querySelector('.panel-body');
    body.textContent = content;

    document.querySelector('#main-body').appendChild(document.importNode(template, true))
}

window.onload = () => {
    fetch("https://aws.wheejuni.com/articles/", {
        method: 'GET',
    })
        .then(articles => {
            console.log(articles)
            return articles.json()
        })
        .then(json => {
            console.log(json)
            return json
        })
        .then(articles => {
            console.log(articles.length)
            for(let x = 0; x < articles.length; x++) {
                console.log(articles[x])
                addElement(articles[x])
            }
        })
}

