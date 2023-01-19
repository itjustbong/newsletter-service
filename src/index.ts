import { VelogCrawler } from './infra/crawler/crawler.velog';
import { Superbase } from './infra/db/db.superbase';
import { NodeMailer } from './infra/sender/sender.nodemailer';
import { sendNewsLetterForVelog } from './service/newsletter.velog';

sendNewsLetterForVelog(
  VelogCrawler.getInstance(),
  Superbase.getInstance(),
  NodeMailer.getInstance()
);
