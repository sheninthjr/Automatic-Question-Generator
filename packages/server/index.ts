import express from "express";
import cors from "cors";
import { PrismaClient } from "prisma/index";

const prisma = new PrismaClient();
const app = express();
app.use(cors());
app.use(express.json());

const unit: { [key: string]: any } = {
  "1": prisma.unit1,
  "2": prisma.unit2,
  "3": prisma.unit3,
  "4": prisma.unit4,
  "5": prisma.unit5,
};

app.post("/post/:unit", async (req, res) => {
  const { parta1, parta2, partb1, partb2, partc1, partc2 } = req.body;
  const unitNo = req.params.unit;
  const unitQuestion = await unit[unitNo].create({
    data: {
      parta1: parta1,
      parta2: parta2,
      partb1: partb1,
      partb2: partb2,
      partc1: partc1,
      partc2: partc2,
    },
  });
  res.json(unitQuestion);
});

const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
