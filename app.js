const express = require("express");
const { Connection } = require("./config/db");
const  userRoute  = require("./routers/userRoute");
const cors = require('cors')

const app = express();
const PORT = 8800;
const API = "/api/v1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${API}/users`, userRoute);

Connection();

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
