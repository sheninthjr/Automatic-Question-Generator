import express from "express";
import puppeteer from "puppeteer";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

const unit: { [key: string]: any } = {
    "1": prisma.unit1,
    "2": prisma.unit2,
    "3": prisma.unit3,
    "4": prisma.unit4,
    "5": prisma.unit5,
  };

router.post("/post/:unit", async (req, res) => {
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
  
router.get("/get/:testtype", async (req, res) => {
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
        const skipNo = 4;
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
        const htmlDataPartb1 = partB11Questions.map((q) => q.partb1);
        const htmlDataPartb1Qtype = partB11Questions.map((q) => q.partb1qtype);
        const htmlDataPartb1Co = partB11Questions.map((q) => q.partb1co);
        const htmlDataPartb11 = partB12Questions.map((q) => q.partb2);
        const htmlDataPartb11Qtype = partB12Questions.map((q) => q.partb2qtype);
        const htmlDataPartb11Co = partB12Questions.map((q) => q.partb2co);
        const htmlDataPartb2 = partB21Questions.map((q) => q.partb1);
        const htmlDataPartb2Qtype = partB21Questions.map((q) => q.partb1qtype);
        const htmlDataPartb2Co = partB21Questions.map((q) => q.partb1co);
        const htmlDataPartc1 = partC1Questions.map((q) => q.partc1);
        const htmlDataPartc1Qtype = partC1Questions.map((q) => q.partc1qtype);
        const htmlDataPartc1Co = partC1Questions.map((q) => q.partc1co);
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
                margin-bottom: 14px;
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
          <div style="margin:5px">
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
                <div style="text-align: center;margin:10px">
                <h3>PART-B (3*12=36 Marks)</h3>
                </div>
                ${htmlDataPartb1
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb1Qtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb1Co[index]})</strong>
                    </div>
                  </div>
                  `
                  )
                  .join("")}
                  ${htmlDataPartb11
                    .map(
                      (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb11Qtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb11Co[index]})</strong>
                    </div>
                  </div>
                `
                    )
                    .join("")}
                ${htmlDataPartb2
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb2Qtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb2Co[index]})</strong>
                    </div>
                  </div>
                `
                  )
                  .join("")}   
                  <div style="text-align: center">
                <div style="margin:10px">
                <h3>PART-C (1*14=14 Marks)</h3>
                </div>
                </div>
                ${htmlDataPartc1
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>16M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartc1Qtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartc1Co[index]})</strong>
                    </div>
                  </div>
                  `
                  )
                  .join("")}  
            </ol>
            <div>
          </div>
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

export default router;