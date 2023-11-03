import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import puppeteer from "puppeteer";

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

app.get("/hi", async (req, res) => res.send("hi there"));

app.post("/post/:unit", async (req, res) => {
  console.log(process.env.DATABASE_URL);
  const {
    parta1,
    parta1qtype,
    parta1co,
    parta2,
    parta2qtype,
    parta2co,
    partb1,
    partb1qtype,
    partb1co,
    partb2,
    partb2qtype,
    partb2co,
    partc1,
    partc1qtype,
    partc1co,
    partc2,
    partc2qtype,
    partc2co,
  } = req.body;
  const unitNo = req.params.unit;
  try {
    const unitQuestion = await unit[unitNo].create({
      data: {
        parta1,
        parta1qtype,
        parta1co,
        parta2,
        parta2qtype,
        parta2co,
        partb1,
        partb1qtype,
        partb1co,
        partb2,
        partb2qtype,
        partb2co,
        partc1,
        partc1qtype,
        partc1co,
        partc2,
        partc2qtype,
        partc2co,
      },
    });
    res.json(unitQuestion);
  } catch (error) {
    console.error("An error occurred:", error);
  }
});

app.get("/get/:testtype", async (req, res) => {
  const testType = req.params.testtype;
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    if (testType === "IA1") {
      const skipNo = 3;
      const partA11Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          parta1: true,
          parta1qtype: true,
          parta1co: true,
        },
        take: 2,
      });
      const partA12Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          parta2: true,
          parta2qtype:true,
          parta2co:true
        },
        take: 1,
      });
      const partA21Questions = await prisma.unit2.findMany({
        skip:Math.floor(Math.random() * skipNo),
        select: {
          parta1: true,
          parta1qtype:true,
          parta1co:true
        },
        take: 2,
      });
      const partB11Questions = await prisma.unit1.findMany({
        skip:Math.floor(Math.random() * skipNo),
        select: {
          partb1: true,
          partb1qtype:true,
          partb1co:true
        },
        take: 1,
      });
      const partB12Questions = await prisma.unit1.findMany({
        skip:Math.floor(Math.random() * skipNo),
        select: {
          partb2: true,
          partb2qtype:true,
          partb2co:true
        },
        take: 1,
      });
      const partB21Questions = await prisma.unit2.findMany({
        skip:Math.floor(Math.random() * skipNo),
        select: {
          partb1: true,
          partb1qtype:true,
          partb1co:true
        },
        take: 1,
      });
      const partC1Questions = await prisma.unit1.findMany({
        skip:Math.floor(Math.random() * skipNo),
        select: {
          partc1: true,
          partc1qtype:true,
          partc1co:true
        },
        take: 1,
      });
      const data = {
        Questions: {
          partA11Questions,
          partA12Questions,
          partA21Questions,
          partB11Questions,
          partB12Questions,
          partB21Questions,
          partC1Questions,
        },
      };
      const htmlData = partA11Questions.map((question) => question.parta1);
      const htmlContent = `<html>
    <head>
      <title>Part A11 Questions</title>
    </head>
    <body>
      <h1>Part A11 Questions</h1>
      <ol>
        ${htmlData.map((question) => `<li>${question}</li>`).join("")}
      </ol>
    </body>
  </html>`;
      await page.setContent(htmlContent);
      const pdfBuffer = await page.pdf({ format: "A4" });
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        'attachment; filename="example.pdf"'
      );
      res.send(pdfBuffer);
      await browser.close();
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
