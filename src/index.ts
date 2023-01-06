import { VelogCrawler } from './services/crawler/crawler.velog';
const vCrawler = new VelogCrawler();

(async () => {
  const orgHTML = await vCrawler.getHTML();
  const parsedHTML = vCrawler.parseHTML(orgHTML);
  console.log(parsedHTML);
})();
