const express = require("express");
const routes = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(morgan(":method :status :url :response-time"));
app.get("/", function (req, res) {
	res.send("Hello World");
});

app.use(routes);

app.listen(8080);
