const root = document.getElementById('root');
let count =5;
const liveList = document.getElementsByTagName('article');
const staticList = document.querySelectorAll('.blog');
console.log(`(Before) LiveList Count: ${liveList.length}, StaticList Count: ${staticList.length}`)
const addArticle  = (index,parent) => {
    const article = document.createElement('article');
    parent.append(article)
    article.innerHTML = `<h1> lorem ipsum ${index}</h1><p>article content</p>`;
    article.id = `article-${index}`;
    article.classList.add('blog');
    article.setAttribute('x-index', '')
}
for(let i=0; i<count; i++){
    addArticle(i, root);
}


console.log(`(After) LiveList Count: ${liveList.length}, StaticList Count: ${staticList.length}`)
console.log(`LiveList: ${liveList}, StaticList: ${staticList}`)