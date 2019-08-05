const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/test", (req, res) => {
  res.send({ message: "Hello!!" });
});

app.get("/api/tutors", (req, res) => {
  const page = req.query.page;
  const list = [];

  // console.log("page숫자", page);

  request(`https://tutoring.co.kr/home/tutors?page=${page}`, (err, response, html) => {
    if (!err && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const tutorList = $("ul.tutor_lst").children("li.item");

      tutorList.each((i, el) => {
        const item = {
          tutor_id: i,
          img_url: $(el)
            .children("a")
            .children("div.t_box")
            .children("p.thum")
            .children("img")
            .attr("src"),
          name: $(el)
            .children("a")
            .children("div.t_box")
            .children("p.name")
            .text(),
          desc: $(el)
            .children("a")
            .children("div.t_box")
            .children("p.txt")
            .text(),
          lessons: $(el)
            .children("a")
            .children("div.b_box")
            .children("p.lessons")
            .children("span")
            .text(),
          type: $(el)
            .children("a")
            .children("div.b_box")
            .children("p.type")
            .text()
        };

        list.push(item);
      });
    }

    setTimeout(() => {
      res.send(list);
    }, 1000);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
