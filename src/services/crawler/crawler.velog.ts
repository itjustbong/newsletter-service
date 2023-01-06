import { iCrawler, VelogPost } from './crawler.interface';
import axios from 'axios';
import cheerio from 'cheerio';

export class VelogCrawler implements iCrawler {
  private _targetUrl = 'https://velog.io';

  async getHTML() {
    try {
      const result = await axios.get(this._targetUrl);
      return result.data;
    } catch (error) {
      console.error(error);
    }
  }

  parseHTML(orgHTML: any) {
    let velogPosts: VelogPost[] = [];
    const $ = cheerio.load(orgHTML);
    const $contentBoxs = $('main > div > div');
    $contentBoxs.each(function () {
      velogPosts.push({
        title: $(this).find('h4').text(),
        subTitle: $(this).find('p').text(),
        image: $(this).find('img').attr('src') || '',
        link: `https://velog.io/${$(this).find('a').attr('href')}`,
        author: $(this).find('b').text(),
      });
    });
    return velogPosts;
  }

  generateContents() {
    return '';
  }
}
