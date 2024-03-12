require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const { StringToNumberMapping } = require("./helpers");
const app = express();

const stringToNumberMapping = new StringToNumberMapping();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
	res.sendFile(process.cwd() + "/views/index.html");
});

// Your first API endpoint
app.get("/api/hello", function (req, res) {
	res.json({ greeting: "hello API" });
});
app.post("/api/shorturl", function (req, res) {
	console.log("req.body: ", req.body);
	const original_url = req.body.url;
	if (!original_url.includes("http")) {
		return res.json({ error: "invalid url" });
	} else {
		res.json({
			original_url,
			short_url: stringToNumberMapping.mapStringToNumber(original_url),
		});
	}
});
app.get("/api/shorturl/:id?", function (req, res) {
	debugger;
	console.log("req.params.id: ", req.params.id);
	const original_url = stringToNumberMapping.mapNumberToString(
		parseInt(req.params.id)
	);
	// console.log("---- original_url: ", original_url);

	res.redirect(original_url);
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
