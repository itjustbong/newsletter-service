import { VelogCrawler } from './services/crawler/crawler.velog';
import { NodeMailer } from './services/mailer/mailer.nodemailer';
import { newsLetterCSS, newsLetterHTML } from './template/newsLetter';
import 'dotenv/config';

(async () => {
  const vCrawler = new VelogCrawler();
  const nodemailer = new NodeMailer(process.env.ID || '', process.env.PW || '');
  console.log(process.env.ID?.length);
  console.log(process.env.PW?.length);

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

  const now = new Date();
  const mailOpt = {
    from: 'itjustbong@itjustbong.me',
    to: 'qhdgkdbs@gmail.com',
    subject: `${now.getMonth() + 1}월 ${now.getDate()}일 Velog 뉴스레터`,
    html: templatedView,
  };
  try {
    await nodemailer.sendMail(mailOpt);
  } catch (e) {
    console.log(e);
  }
})();
