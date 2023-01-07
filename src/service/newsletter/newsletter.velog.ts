import { iCrawler } from '../../infra/crawler/crawler.interface';
import { iDataBase, SERVICE } from '../../infra/db/db.interface';
import { iMailer } from '../../infra/mailer/mailer.interface';
import {
  generateNewsLetterHTMLForVelog,
  newsLetterHTML,
} from '../../template/newsLetter';

export const sendNewsLetterForVelog = async (
  mailer: iMailer,
  crawler: iCrawler,
  Superbase: iDataBase
) => {
  const orgHTML = await crawler.getHTML();
  const parsedHTML = crawler.parseHTML(orgHTML);
  const newsList = generateNewsLetterHTMLForVelog(parsedHTML);

  const templatedView = newsLetterHTML.replace('<news-contents />', newsList);

  console.log(templatedView);
  return;

  const allUser = await Superbase.getAllUser(SERVICE.VELOG);
  const emailList =
    allUser?.map((data: any) => data.user.email).join(', ') || [];
  if (emailList.length === 0) return;

  const now = new Date();
  const mailOpt = {
    from: 'itjustbong@itjustbong.me',
    to: emailList,
    subject: `${now.getMonth() + 1}월 ${now.getDate()}일 Velog 뉴스레터`,
    html: templatedView,
  };

  try {
    mailer.sendMail(mailOpt);
    console.log(`sended to ${emailList.length}`);
  } catch (e) {
    console.log(e);
  }
};
