import { VelogCrawler } from './infra/crawler/crawler.velog';
import { NodeMailer } from './infra/mailer/mailer.nodemailer';
import { sendNewsLetterForVelog } from './service/newsletter/newsletter.velog';

sendNewsLetterForVelog(NodeMailer.getInstance(), VelogCrawler.getInstance());
