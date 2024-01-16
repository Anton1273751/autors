import { news } from "./autors.js";

const containerNode = document.querySelector(".autors__wrap");

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
  articleNode.innerHTML = ` <h3 class="autor__name">${author}</h3>
            <title class="autor__title">${title}</title>
            <p class="autor__description">${description}</p>
            <a  class="autor__url" href="${url}">See more...</a>
            <img class="autor__img" src="${image}" alt="#" />
            <time class="autor__published_at">${published_at}</time>`;
  return articleNode;
};

const renderCard = (news) => {
  containerNode.innerHTML = "";
  news.forEach((element) => containerNode.append(createAutor(element)));
};

renderCard(news);
