const express = require("express");
const cors = require("cors");
const controller = require("./controllers/courseController");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/courses", controller.getCourses);
app.post("/courses", controller.addCourse);

app.listen(5000, () => console.log("Backend running on port 5000"));
