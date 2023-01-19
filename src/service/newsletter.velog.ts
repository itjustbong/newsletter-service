import { iCrawler } from '../infra/crawler/crawler.interface';
import { iDataBase, SERVICE } from '../infra/db/db.interface';
import { iSender } from '../infra/sender/sender.interface';
import { buildVelogTemplate } from '../template/template.velog';

export const sendNewsLetterForVelog = async (
  crawler: iCrawler,
  superbase: iDataBase,
  sender: iSender
) => {
  await crawler.fetchSrc();
  const parsedSrc = crawler.parseSrc();
  const newsletterHTML = buildVelogTemplate(parsedSrc);

  const allUser = await superbase.getAllUser(SERVICE.VELOG);
  const emailList =
    allUser?.map((data: any) => data.user.email).join(', ') || [];
  if (emailList.length === 0) return;

  const now = new Date();
  const mailOpt = {
    from: 'itjustbong@itjustbong.me',
    bcc: emailList,
    subject: `${now.getMonth() + 1}월 ${now.getDate()}일 Velog 뉴스레터`,
    html: newsletterHTML,
  };

  try {
    sender.send(mailOpt);
    console.log(`sended to ${allUser.length}`);
  } catch (e) {
    console.log(e);
  }
};
