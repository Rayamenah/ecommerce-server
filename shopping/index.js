import express from "express";

const app = express();
app.use(express.json());

app.use("/", (req, res, next) => {
  res.status(200).send("hello from shopping");
});
app.listen(8003, () => {
  console.log("customer is istening on port 8003");
});
