var express = require("express");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

// Coloque suas rotas aqui
router.get("/teste", function (req, res) {
	res.send("testim);
});


module.exports = router;
