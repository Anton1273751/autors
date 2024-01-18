import { news } from "./autors.js";

const autorsNode = document.querySelector(".autors__wrap");

  // let imgLike = document.querySelector("autor__btn");
  // let pNode = document.querySelector("like");
  // imgLike.addEventListener("click", addClick);
  // let count = 0;

  // const addClick = () => {
  //   count++;
  //   pNode.innerHTML = `${count}`;
  // };

// imgLike.addEventListener("click", addClick);
// let count = 0;

// const addClick = () => {
//   count++;
//   pNode.innerHTML = `${count}`;
// };

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

  let count = 0;
  articleNode.innerHTML = ` <strong class="autor__name">${author}</strong>
            <title class="autor__title">${title}</title>
            <p class="autor__description">${description}</p>
            <a  class="autor__url" href="${url}">See more...</a>
            <img class="autor__img" src="${image}" alt="#" />
            <time class="autor__published_at">${publicDate}</time>
            <div class = "autor__article-evaluation" >
            <img class= "autor__like" src = "../src/img/like.jpg">
            <p class = "like">${count}</p>  
            </div>  `;
  return articleNode;
};

const renderCard = (news) => {
  autorsNode.innerHTML = "";
  news.forEach((element) => autorsNode.append(createAutor(element)));

};

// document.addEventListener("click", function (el) {
//   if (el.target.dataset != undefined) {
//     el.target.value++;
//   }
// });

renderCard(news);
