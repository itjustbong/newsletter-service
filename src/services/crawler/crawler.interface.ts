export interface iCrawler {
  getHTML(): Promise<string>;
  parseHTML(orgHTML: string): void;
  generateContents(): string | string[];
}

export interface VelogPost {
  title: string;
  link: string;
  subTitle: string;
  image: string;
  author: string;
}
