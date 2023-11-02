const express = require("express");
const app = express();

const port: number = 3001;

app.use((req: any, res: any, next: any) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function getRandomNum() {
  return Math.floor(Math.random() * 88) + 10;
}

app.get("/getlikes", (req: any, res: any) => {
  const ranNum1 = getRandomNum();
  const ranNum2 = getRandomNum();

  res.send([ranNum1, ranNum2]);
});

app.listen(port, () => {
  console.log("meow");
});
