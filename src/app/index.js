import { news } from "./autors.js";

const autorsNode = document.querySelector(".autors__wrap");

const createAutor = ({
  author,
  title,
  description,
  url,
  image,
  published_at,
}) => {
  const articleNode = document.createElement("article");
  articleNode.className = "autor";
  let publicDate = new Date(Date.parse(published_at));
  articleNode.innerHTML = ` <strong class="autor__name">${author}</strong>
            <title class="autor__title">${title}</title>
            <p class="autor__description">${description}</p>
            <a  class="autor__url" href="${url}">See more...</a>
            <img class="autor__img" src="${image}" alt="#" />
            <time class="autor__published_at">${publicDate}</time>
            <div class = "autor__article-evaluation" >
             <button class="autor__like-button">👍</button>
             <span class="like-count">0</span> 
            </div>  `;
  return articleNode;
};

const renderCard = (news) => {
  autorsNode.innerHTML = "";
  news.forEach((element) => autorsNode.append(createAutor(element)));
};
// document.addEventListener("click", function (el) {
//   if (el.target.dataset.counter != undefined) {
//     el.target.value++;
//   }
// });

renderCard(news);


const likeButton = document.querySelector(".autor__like-button");
const likeCount = document.querySelector(".like-count");
likeButton.addEventListener("click", like);
let count = 0;
function like() {
  count++;
  likeCount.innerHTML = `${count}`;
}
