const express = require("express");
const mongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const request = require("request");
const cheerio = require("cheerio");
const app = express();
const port = process.env.PORT || 3001;

// MongoDB 연결
const CONNECTION_URL = `mongodb+srv://admin:${encodeURIComponent("1234qwer")}@tutoring-b1srb.mongodb.net/test?retryWrites=true&w=majority`;
const DATABASE_NAME = "Tutoring";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);

  //서버와 DB 연결
  mongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (err, client) => {
    if (err) {
      throw error;
    }

    database = client.db(DATABASE_NAME);
    collection = database.collection("test");
    console.log("Connected to " + DATABASE_NAME + "!");
  });
});

app.get("/test", (req, res) => {
  collection.find().toArray((err, result) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.send(result);
  });
});

app.post("/test/create", (req, res) => {
  const data = {
    name: req.body.name,
    price: req.body.price
  };

  collection.insertOne(data, (err, result) => {
    if (err) {
      console.log(err);
    }

    res.status(200).send(["data inserted succssfully", result.ops[0]]);
  });
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
    }, 1500);
  });
});
