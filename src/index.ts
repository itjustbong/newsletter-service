import { VelogCrawler } from './infra/crawler/crawler.velog';
import { NodeMailer } from './infra/mailer/mailer.nodemailer';
import { sendNewsLetterForVelog } from './service/newsletter/newsletter.velog';
import 'dotenv/config';

sendNewsLetterForVelog(
  new NodeMailer(process.env.ID || '', process.env.PW || ''),
  new VelogCrawler()
);
