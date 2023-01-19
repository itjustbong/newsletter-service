import { ParsedSrcType } from '../../model/model';

export interface iCrawler {
  fetchSrc(): Promise<this | undefined>;
  parseSrc(): ParsedSrcType[];
}
