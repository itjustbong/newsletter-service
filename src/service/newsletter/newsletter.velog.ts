import { iCrawler } from '../../infra/crawler/crawler.interface';
import { iMailer } from '../../infra/mailer/mailer.interface';
import { newsLetterCSS, newsLetterHTML } from '../../template/newsLetter';

export const sendNewsLetterForVelog = async (
  mailer: iMailer,
  crawler: iCrawler
) => {
  const orgHTML = await crawler.getHTML();
  const parsedHTML = crawler.parseHTML(orgHTML);
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

  const now = new Date();
  const mailOpt = {
    from: 'itjustbong@itjustbong.me',
    to: 'qhdgkdbs@gmail.com',
    subject: `${now.getMonth() + 1}월 ${now.getDate()}일 Velog 뉴스레터`,
    html: templatedView,
  };

  try {
    mailer.sendMail(mailOpt);
  } catch (e) {
    console.log(e);
  }
};
