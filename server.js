const express = require("express");
const cors = require("cors");
const app = express();

app.set('view engine', 'ejs');

//middleware frontend
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./app/routes/quiz.routes")(app);

app.use(express.static('public'));
app.use('/quiz', express.static('public'));
app.use('/quiz/start', express.static('public'));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


