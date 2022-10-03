const fibonaci_algorithm = require("../modules/fibonaci_algorithm.js");


// Get quiz list.
exports.get_quiz_page = (req, res) => {
  res.render('quiz_list');
};

// Set temp vocabulary
exports.generate_solution = (req, res) => {
  
  var born_on_year1 = req.query.yearofdeath1 - req.query.ageofdeath1;
  var born_on_year2 = req.query.yearofdeath2 - req.query.ageofdeath2;
  
  if (req.query.ageofdeath1 < 0 || req.query.ageofdeath2 < 0 || req.query.yearofdeath1 < 0
    || req.query.yearofdeath2 < 0 || born_on_year1 <= 0 || born_on_year2 <= 0) {
    res.status(400).send({ message: "-1" });
    return;
  }

  var num_killed_1 = fibonaci_algorithm.get_fibonaci_sequence(born_on_year1);
  var num_killed_2 = fibonaci_algorithm.get_fibonaci_sequence(born_on_year2);

  var average = (num_killed_1 + num_killed_2)/2;
  
  res.send(

    'Input: <br/> Person A: Age of death = ' + req.query.ageofdeath1 + ', Year of Death = ' + req.query.yearofdeath1 
    + '<br/> Person B: Age of death = ' + req.query.ageofdeath2 + ', Year of Death = ' + req.query.yearofdeath2

    + '<br/> Answer:'
  	+ '<br/> Person A born on Year = ' + req.query.yearofdeath1 + ' - ' 
    + req.query.ageofdeath1 + ' = ' + born_on_year1 + ', number of people killed on year '
    + born_on_year1 + ' is ' + num_killed_1 
    + '<br/>' 
    + 'Person B born on Year = ' + req.query.yearofdeath2 + ' - ' 
    + req.query.ageofdeath2 + ' = ' + born_on_year2 + ', number of people killed on year '
    + born_on_year2 + ' is ' + num_killed_2
    + '<br/> So the average is ( ' + num_killed_1 + ' + ' + num_killed_2 + ' )/2 = ' + average
  	
  );
};

