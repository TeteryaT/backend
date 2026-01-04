const fs = require("fs");
const Course = require("../models/Course");

const FILE = "courses.json";

function getAll() {
  if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, "[]");
    return [];
  }

  const content = fs.readFileSync(FILE, "utf-8").trim();
  if (!content) return [];

  return JSON.parse(content);
}

function add(courseData) {
  const list = getAll();
  list.push(
    new Course(
      courseData.name,
      courseData.startDate,
      courseData.endDate,
      courseData.price
    )
  );
  fs.writeFileSync(FILE, JSON.stringify(list, null, 2));
}

module.exports = { getAll, add };
