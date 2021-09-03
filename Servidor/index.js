const express = require('express')
const app = express()
const port = 3000
const api_url = "https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

app.get('/', (req, res) => {
  res.send('Hola we')
  getapi(api_url)
})

async function getapi(url) {
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})