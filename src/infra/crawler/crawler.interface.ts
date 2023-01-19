import { ParsedSrcType } from '../../model/model';

export interface iCrawler {
  fetchSrc(): Promise<unknown>;
  parseSrc(orgHTML: string): ParsedSrcType[];
}
