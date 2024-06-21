import express from "express";

const app = express();
const port = 4000;
const data = [
  {
    data: {
      name: "john",
      age: 20,
    },
  },
];

app.get("/profiles", (req, res) => {
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Sever is running at ${port}`);
});
