import { VelogCrawler } from './infra/crawler/crawler.velog';
import { NodeMailer } from './infra/mailer/mailer.nodemailer';
import { VelogNewsletter } from './service/newsletter/newsletter.velog';
import 'dotenv/config';

const velogNewsletter = new VelogNewsletter(
  new NodeMailer(process.env.ID || '', process.env.PW || ''),
  new VelogCrawler()
);

velogNewsletter.sendMail();
