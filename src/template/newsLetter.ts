export const newsLetterHTML = `
<!DOCTYPE html>
<html lang="ko">
<head><style /></head>
<body><news-contents /><body>`;

export const newsLetterCSS = `
<style>
img{
    flex-shrink: 0;
    width: 240px;
    height: 160px;
    object-fit: cover;
    border-radius: 1rem;
    border: 1px solid #f0f0f0;
  }
  .container{
    display: flex;
    gap: 1rem;
    border-radius: 1rem;
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
    margin-bottom: 1rem;
    position: relative;
    cursor: pointer;
  }
  .title{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .subtitle{
    font-size: 0.875rem;
  }
  .author{
    position: absolute;
    bottom: 0px;
  }
</style>`;
