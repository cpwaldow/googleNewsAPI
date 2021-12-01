const API_KEY = '2ab25364a39b41fea2a4211ff10ba685';
const list = document.querySelector('#news-list');

const currentNews = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`;

fetch(currentNews)
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < data.articles.length; index += 1) {
      console.log(data.articles[index]);
      createItem(data.articles[index].title);
      setImage(data.articles[index].urlToImage);
    }
  });

function createItem(titleNews) {
  const item = document.createElement('li');
  item.classList.add('item');
  item.innerText = titleNews;
  list.appendChild(item);
}

function setImage(src) {
  const img = document.createElement('img');
  img.setAttribute('src', src);
  list.appendChild(img);
  console.log(src);
}
