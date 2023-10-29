import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

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

app.get("/get/:testtype",async (req,res)=> {
  const testType = req.params.testtype;
  if (testType === "IA1") {
    const partA11Questions = await prisma.unit1.findMany({
      select: {
        parta1: true,
      },
      take: 2,
    });
    const partA12Questions = await prisma.unit1.findMany({
      select: {
        parta2: true,
      },
      take: 1,
    });
    const partA21Questions = await prisma.unit2.findMany({
      select: {
        parta1: true,
      },
      take: 2,
    });
    const partB11Questions = await prisma.unit1.findMany({
      select: {
        partb1: true,
        partb2: true
      },
      take: 1,
    });
    const partB21Questions = await prisma.unit2.findMany({
      select: {
        partb1: true
      },
      take: 1,
    });
    const partC1Questions = await prisma.unit1.findMany({
      select: {
        partc1: true
      },
      take: 1,
    });
    res.json({Questions:{partA11Questions,partA12Questions,partA21Questions,partB11Questions,partB21Questions,partC1Questions}});
  }
})


const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
