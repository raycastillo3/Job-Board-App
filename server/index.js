const express = require('express');
const cors = require('cors');
const app = express();

//middlewares:
app.use(cors());
app.use(express.json());

//ROUTES//
//jobs
app.use("/jobs", require("./routes/jobs"));

//register and login routes:
app.use("/auth", require("./routes/jwtAuth"));

//dashboard route
app.use("/dashboard", require("./routes/dashboard"));


app.listen(5000, () => {
    console.info("server started on port 5000");
});
