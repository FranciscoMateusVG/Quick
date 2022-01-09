const express = require("express");
const router = express.Router();
const path = require("path");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log("Time: ", Date.now());
	next();
});

// Coloque suas rotas aqui

router.get("/uploads/files/*", function (req, res) {
	//const path = `~/Projetos/quick/express/upload/${req.params[0]}`;
	const p = path.resolve("upload", req.params[0]);

	res.sendFile(p);
	//res.send("ok");
});

module.exports = router;
