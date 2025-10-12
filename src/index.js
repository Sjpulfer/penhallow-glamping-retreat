import { builder } from '@builder.io/sdk';
builder.init('065b75e8053a4a039743d2b93d607518');

builder.get('page', { url: '/' }).then(content => {
  document.body.innerHTML = content?.data?.blocks?.map(block => `<div>${block}</div>`).join('');
});
