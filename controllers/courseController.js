const service = require("../services/courseService");

exports.getCourses = (req, res) => {
  res.json(service.getAll());
};

exports.addCourse = (req, res) => {
  service.add(req.body);
  res.sendStatus(200);
};
