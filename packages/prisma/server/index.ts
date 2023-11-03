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
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const formattedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  const formattedDay = currentDay < 10 ? `0${currentDay}` : currentDay;
  const formattedDate = `${formattedDay}.${formattedMonth}.${currentYear}`;
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
          parta2qtype: true,
          parta2co: true,
        },
        take: 1,
      });
      const partA21Questions = await prisma.unit2.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          parta1: true,
          parta1qtype: true,
          parta1co: true,
        },
        take: 2,
      });
      const partB11Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partb1: true,
          partb1qtype: true,
          partb1co: true,
        },
        take: 1,
      });
      const partB12Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partb2: true,
          partb2qtype: true,
          partb2co: true,
        },
        take: 1,
      });
      const partB21Questions = await prisma.unit2.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partb1: true,
          partb1qtype: true,
          partb1co: true,
        },
        take: 1,
      });
      const partC1Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partc1: true,
          partc1qtype: true,
          partc1co: true,
        },
        take: 1,
      });
      const data = {
          partA11Questions,
          partA12Questions,
          partA21Questions,
          partB11Questions,
          partB12Questions,
          partB21Questions,
          partC1Questions,
          currentDate:formattedDate
      };
      const htmlDataParta1 = partA11Questions.map((q) => q.parta1);
      const htmlDataParta1Qtype = partA11Questions.map((q) => q.parta1qtype);
      const htmlDataParta1Co = partA11Questions.map((q) => q.parta1co);
      const htmlDataParta11 = partA12Questions.map((q) => q.parta2);
      const htmlDataParta11Qtype = partA12Questions.map((q) => q.parta2qtype);
      const htmlDataParta11Co = partA12Questions.map((q) => q.parta2co);
      const htmlDataParta2 = partA21Questions.map((q) => q.parta1);
      const htmlDataParta2Qtype = partA21Questions.map((q) => q.parta1qtype);
      const htmlDataParta2Co = partA21Questions.map((q) => q.parta1co);
      const htmlContent = `
      <html>
        <head>
          <title>Questions</title>
          <style>
            h3 {
              margin: 5px 0;
            }
            li {
              font-size: 17px;
              width: 70%; 
            }
            strong {
              font-size: 17px;
            }
            .metadata {
              width: 30%; 
              display: flex;
              justify-content: space-between;
            }
          </style>
        </head>
        <body>
        <div style="text-align: center">
        <div>
          <h3>Velammal Institute of technology</h3>
        </div>
        <div>
          <h3>Dept of AI&DS/${testType}/III Year/V Sem/${formattedDate}/1.45hr/60Marks/Set B</h3>
        </div>
        <div>
          <h3>CCS334-BIG DATA ANALYTICS</h3>
        </div>
        <div>
          <h3>PART-A (5*2=10 Marks)</h3>
        </div>
        </div>
          <ol>
            ${htmlDataParta1
              .map(
                (question, index) => `
              <div style="display: flex; justify-content: space-between">
                <li>
                  <strong>${question}</strong>
                </li>
                <div class="metadata">
                  <strong>02M</strong>
                  <strong style="margin-left: 10px">${htmlDataParta1Qtype[index]}</strong>
                  <strong style="margin-left: 10px">(${htmlDataParta1Co[index]})</strong>
                </div>
              </div>
              `
              )
              .join("")}
              ${htmlDataParta11
                .map(
                  (question, index) => `
              <div style="display: flex; justify-content: space-between">
                <li>
                  <strong>${question}</strong>
                </li>
                <div class="metadata">
                  <strong>02M</strong>
                  <strong style="margin-left: 10px">${htmlDataParta11Qtype[index]}</strong>
                  <strong style="margin-left: 10px">(${htmlDataParta11Co[index]})</strong>
                </div>
              </div>
            `
                )
                .join("")}
            ${htmlDataParta2
              .map(
                (question, index) => `
              <div style="display: flex; justify-content: space-between">
                <li>
                  <strong>${question}</strong>
                </li>
                <div class="metadata">
                  <strong>02M</strong>
                  <strong style="margin-left: 10px">${htmlDataParta2Qtype[index]}</strong>
                  <strong style="margin-left: 10px">(${htmlDataParta2Co[index]})</strong>
                </div>
              </div>
            `
              )
              .join("")}
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
  }
   catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

const server = app.listen(3000, () => {
  console.log("Server is listenning on port 3000");
});
