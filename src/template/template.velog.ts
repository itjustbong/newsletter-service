import { ParsedSrcType } from '../model/model';

const newsLetterHTML = `
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <title>News letter service</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body><news-contents />
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScHaqeN7Xw9QeW-ch8n7CI5AWAFOeY05tQsc2a9tBkZiad4ag/viewform?embedded=true" width="320" height="451" frameborder="0" marginheight="0" marginwidth="0">로드 중…</iframe>
<body>`;

export const buildVelogTemplate = (parsedHTML: ParsedSrcType[]) => {
  const newsList = parsedHTML
    .map(
      (post) =>
        `<div style="display: flex; gap: 1rem; border-radius: 1rem; width: 100%; max-width: 640px; margin: 0 auto; margin-bottom: 1rem; position: relative; cursor: pointer;">
          <img 
            width="80px" 
            height="80px" 
            style="flex-shrink: 1; object-fit: cover; border-radius: 1rem; border: 1px solid #f0f0f0;" 
            src="${post.image}">
          </img>
          
          <a 
            style="color: black; text-decoration: none;" 
            target="_blank" 
            href="${post.link}">
            <div>
              <div 
                style="font-size: 1rem; font-weight: bold; margin-bottom: 0.5rem;">
                ${post.title}
              </div>
              <div 
                style="font-size: 0.875rem;">
                ${post.subTitle?.slice(0, 100)}
              </div>
            </div>
          </a>
      </div>`
    )
    .join('');

  const templatedView = newsLetterHTML.replace('<news-contents />', newsList);

  return templatedView;
};
