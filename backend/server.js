const express = require("express");
const cors = require("cors");
const usersDb = require("./database/db.json");   // import existing data from db.json file


const user = require("./routes/user");
// initializing express application
const app = express();




// parse requests of content-type - application/json
app.use(express.json());
app.use((req, res, next) => {
    console.log(`REQUEST RECEIVED!`);
    console.log(`  URL: ${req.path}`);
    console.log(`  PARAMS: ${JSON.stringify(req.params)}`);
    console.log(`  BODY: ${JSON.stringify(req.body, null, 2)}`);
    next();
  });
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORS


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to MigraCode Auth application." });
});



app.get("/welcome", (req, res) => {
  res.json(usersDb); 
}); 


// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.use("/user", user);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
