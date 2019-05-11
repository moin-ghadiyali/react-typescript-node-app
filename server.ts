import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/express_backend", (req: any, res: any) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
