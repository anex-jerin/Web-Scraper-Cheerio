const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json('hello');
});
const url = 'https://en.wikipedia.org/wiki/2022_FIFA_World_Cup#Round_of_16';
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const article = [];
  $('.fhome', html).each(function () {
    const home = $(this).text();
    article.push({ home});
  });
  console.log(article)
}).catch(err=>console.log(err))
app.listen(PORT, () => {
  console.log(`Server Runnning On port :${PORT}`);
});
