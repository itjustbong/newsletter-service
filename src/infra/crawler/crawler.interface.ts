import { VelogPost } from '../../model/model.velog';

export interface iCrawler {
  getHTML(): Promise<string>;
  parseHTML(orgHTML: string): VelogPost[];
}
