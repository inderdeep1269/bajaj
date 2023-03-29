const express = require("express");
const app = express();
const cors = require("cors");
//const bodyParser = require("body-parser");
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.post("/bfhl", function (req, res) {
  console.log(req.body);

  const { data } = req.body;
  console.log(data);
  var odd = [];
  var even = [];
  var alpha = [];
  data.forEach((ele) => {
    //ele = JSON.parse(ele);
    if (!isNaN(ele) && ele % 2 !== 0) {
      odd.push(ele);
    } else if (!isNaN(ele) && ele % 2 === 0) {
      even.push(ele);
    } else if (isNaN(ele)) {
      alpha.push(ele.toUpperCase());
    }
  });
  res.status(200).json({
    is_success: true,
    user_id: "inderdeep_singh_sidhu_26082001",
    email: "inderdeep1269@chitkara.edu.in",
    roll_number: 2010991269,
    odd_numbers: odd,
    even_numbers: even,
    alphabets: alpha
  });
});

app.use("/", (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.port || 3000);
