const express = require("express");
const mainRouter = require("./routes/main-route");

require("dotenv").config();
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
app.use(express.json());
app.use(mainRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));
