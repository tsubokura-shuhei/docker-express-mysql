const express = require("express");
const router = express.Router();
const app = express();

// sequelizeの設定を追加
const { Sequelize } = require("sequelize");
// databaseやuser, passwordをdcoker-compose.ymlで設定したものを使う↓
const sequelize = new Sequelize("my_mysql_db", "root", "root", {
  host: "my_mysql", // hostの名前をdocker-compose.ymlで設定したmy_mysqlに変更する
  dialect: "mysql",
});

//サーバー起動
const server = app.listen(8000, () => {
  console.log("app setRevalidateHeaders. port:" + server.address().port);
});

//GET /user
app.get("/user", async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  res.send("respond with a resource");
});

module.exports = router;
