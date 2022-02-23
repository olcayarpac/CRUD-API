const express = require("express");
const {swaggerUi, swaggerSpecs} = require('./config/swagger.config');
const app = express();
const port = 3000;

require('./config/db.config');
require('./routes/user.routes.js')(app);


app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpecs, { explorer: true })
);

app.get('/', (req, res) => {
    res.send('This is a sample Rest CRUD API project using Node.js, Express, Pug,  MongoDb for database and Mocha & Chai for testing')
})

app.get('/sample', (req, res) => {
    res.send('Sample')
})

app.listen(port, () => {
    console.log("Server Started On.. http://localhost:" + port);
});