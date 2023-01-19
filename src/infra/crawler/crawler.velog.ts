import { iCrawler } from './crawler.interface';
import axios from 'axios';
import cheerio from 'cheerio';
import { ParsedSrcType } from '../../model/model';

export class VelogCrawler implements iCrawler {
  private static instance: VelogCrawler;
  private _targetUrl = 'https://velog.io';
  private _src?: string;

  private constructor() {}
  public static getInstance() {
    return this.instance || (this.instance = new this());
  }

  async fetchSrc() {
    try {
      if (this._src) return this;
      const result = await axios.get(this._targetUrl);
      this._src = result.data;
      return this;
    } catch (error) {
      console.error(error);
    }
  }

  parseSrc() {
    if (!this._src) {
      new Error(
        'parseSrc은 fetchSrc가 정상적으로 완료된 이후에 호출할 수 있습니다.'
      );
    }
    let parsedSrc: ParsedSrcType[] = [];
    const $ = cheerio.load(this._src as string);
    const $contentBoxs = $('main > div > div');
    $contentBoxs.each(function () {
      parsedSrc.push({
        title: $(this).find('h4').text(),
        subTitle: $(this).find('p').text(),
        link: `https://velog.io${$(this).find('a').attr('href')}`,
        image: $(this).find('img').attr('src') || '',
      });
    });
    return parsedSrc;
  }
}
