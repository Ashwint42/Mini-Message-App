const express = require("express");
const app = express();

const { join } = require("path");

const indexRouter = require("./routes/index");
const newMessageRouter = require("./routes/newMessage");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "public")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter.router);
app.use("/newMessage", newMessageRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
