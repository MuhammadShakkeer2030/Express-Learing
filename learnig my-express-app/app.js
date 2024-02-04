const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const allRouter = require("./routes/allRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", allRouter);
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
