const API_KEY = '2ab25364a39b41fea2a4211ff10ba685';
const list = document.querySelector('#news-list');

const currentNews = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${API_KEY}`;

fetch(currentNews)
  .then((response) => response.json())
  .then((data) => {
    for (let index = 0; index < data.articles.length; index += 1) {
      const title = data.articles[index].title;
      const picture = data.articles[index].urlToImage;

      console.log(data.articles[index]);
      createItem(title, picture);
    }
  });

function createItem(titleNews, imageNews) {
  const item = document.createElement('li');
  const text = document.createElement('p');
  const img = document.createElement('img');

  item.classList.add('item');
  img.classList.add('images');
  text.classList.add('text');

  text.innerText = titleNews;
  img.setAttribute('src', imageNews);
  img.setAttribute('loading', 'lazy');

  item.appendChild(text);
  item.appendChild(img);

  list.appendChild(item);
}
