const cheerio = require("cheerio");
const request = require("request");
const express = require("express");
const app = express();
const port = 3007;

app.get("/", (req, expRes) => {
  request(
    {
      method: "GET",
      url: "https://corporate.americancentury.com/en.html",
    },
    (err, res, body) => {
      if (err) return console.error(err);

      let $ = cheerio.load(body);
      console.log(res.statusCode, "dsds");
      let frame = {
        title: $("title").text(), // this is an inline selector
      };
      // expRes.send(frame.title, "data is");
      expRes.send(frame);
    }
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
