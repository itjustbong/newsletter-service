import { VelogCrawler } from './services/crawler/crawler.velog';
import { newsLetterCSS, newsLetterHTML } from './template/newsLetter';
const vCrawler = new VelogCrawler();

(async () => {
  const orgHTML = await vCrawler.getHTML();
  const parsedHTML = vCrawler.parseHTML(orgHTML);
  const newsList = parsedHTML
    .map(
      (post) =>
        `<div class="container" onclick="window.open('${post.link}')">
            <img src=${post.image}></img>
            <div>
              <div class="title">${post.title}</div>
              <div class="subtitle">${post.subTitle?.slice(0, 100)}</div>
              <div class="author">by <b>${post.author}</b></div>
            </div>
        </div>`
    )
    .join('');

  const templatedView = newsLetterHTML
    .replace('<news-contents />', newsList)
    .replace('<style />', newsLetterCSS);
})();
