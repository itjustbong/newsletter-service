import { VelogCrawler } from './infra/crawler/crawler.velog';
import { Superbase } from './infra/db/db.superbase';
import { NodeMailer } from './infra/mailer/mailer.nodemailer';
import { sendNewsLetterForVelog } from './service/newsletter/newsletter.velog';

sendNewsLetterForVelog(
  NodeMailer.getInstance(),
  VelogCrawler.getInstance(),
  Superbase.getInstance()
);
