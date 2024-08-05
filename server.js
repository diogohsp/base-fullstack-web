const express = require("express");
const path = require("path");

const app = express();

app.use("/public", express.static(path.resolve(__dirname, "public")))

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

app.listen(process.env.PORT || 6969, () =>
  console.log("Server iniciado!\nhttp://localhost:6969/")
);
