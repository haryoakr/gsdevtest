
module.exports = app => {

  var router = require("express").Router();
  const quiz_controller = require("../controllers/quiz.controller.js");

  router.get("/", quiz_controller.get_quiz_page);

  router.get("/start", quiz_controller.generate_solution);


  app.use('/quiz', router);
};