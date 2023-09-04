const express = require("express");
const { sequelize } = require("./configs/db");
const { Student } = require("./model/student.model");
const jwt = require("jsonwebtoken");
const { Sequelize } = require("sequelize");
const app = express();
const { studentRouter } = require("./routes/student.route");
const { courseRouter } = require("./routes/course.route");
const { instructorRouter } = require("./routes/instructor.route");

app.use(express.json());
app.use(require("cors")());

app.get("/", async (req, res) => {
  try {
    res.json({ message: "Server is Working" });
  } catch (err) {
    console.error(err);
    res.send({ error: err.message });
  }
});

app.use("", studentRouter);
app.use("", courseRouter);
app.use("",instructorRouter);


sequelize
  .sync()
  .then(() => {
    app.listen(1400, async () => {
      console.log("Connected to DB");
      console.log("Server is running at 1400");
    });
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = app;
