import { VelogPost } from '../model/model.velog';

export const newsLetterHTML = `
<!DOCTYPE html>
<html lang="ko">
<body><news-contents /><body>`;

export const generateNewsLetterHTMLForVelog = (parsedHTML: VelogPost[]) => {
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
              <div 
                style="position: absolute; bottom: 0px;">
                by <b>${post.author}</b>
              </div>
            </div>
          </a>
      </div>`
    )
    .join('');

  return newsList;
};
