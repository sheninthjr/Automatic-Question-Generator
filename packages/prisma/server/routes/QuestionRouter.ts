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
    partb1a,
    partb1aqtype,
    partb1aco,
    partb1b,
    partb1bqtype,
    partb1bco,
    partb2a,
    partb2aqtype,
    partb2aco,
    partb2b,
    partb2bqtype,
    partb2bco,
    partc1a,
    partc1aqtype,
    partc1aco,
    partc1b,
    partc1bqtype,
    partc1bco,
    partc2a,
    partc2aqtype,
    partc2aco,
    partc2b,
    partc2bqtype,
    partc2bco,
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
        partb1a,
        partb1aqtype,
        partb1aco,
        partb1b,
        partb1bqtype,
        partb1bco,
        partb2a,
        partb2aqtype,
        partb2aco,
        partb2b,
        partb2bqtype,
        partb2bco,
        partc1a,
        partc1aqtype,
        partc1aco,
        partc1b,
        partc1bqtype,
        partc1bco,
        partc2a,
        partc2aqtype,
        partc2aco,
        partc2b,
        partc2bqtype,
        partc2bco,
      },
    });
    console.log(unitQuestion)
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
          partb1a: true,
          partb1aqtype: true,
          partb1aco: true,
          partb1b: true,
          partb1bqtype: true,
          partb1bco: true,
        },
        take: 1,
      });
      const partB12Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partb2a: true,
          partb2aqtype: true,
          partb2aco: true,
          partb2b: true,
          partb2bqtype: true,
          partb2bco: true,
        },
        take: 1,
      });
      const partB21Questions = await prisma.unit2.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partb1a: true,
          partb1aqtype: true,
          partb1aco: true,
          partb1b: true,
          partb1bqtype: true,
          partb1bco: true,
        },
        take: 1,
      });
      const partC1Questions = await prisma.unit1.findMany({
        skip: Math.floor(Math.random() * skipNo),
        select: {
          partc1a: true,
          partc1aqtype: true,
          partc1aco: true,
          partc1b: true,
          partc1bqtype: true,
          partc1bco: true,
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
        currentDate: formattedDate,
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
      const htmlDataPartb1a = partB11Questions.map((q) => q.partb1a);
      const htmlDataPartb1aQtype = partB11Questions.map((q) => q.partb1aqtype);
      const htmlDataPartb1aCo = partB11Questions.map((q) => q.partb1aco);
      const htmlDataPartb1b = partB11Questions.map((q) => q.partb1b);
      const htmlDataPartb1bQtype = partB11Questions.map((q) => q.partb1bqtype);
      const htmlDataPartb1bCo = partB11Questions.map((q) => q.partb1bco);
      const htmlDataPartb11a = partB12Questions.map((q) => q.partb2a);
      const htmlDataPartb11aQtype = partB12Questions.map((q) => q.partb2aqtype);
      const htmlDataPartb11aCo = partB12Questions.map((q) => q.partb2aco);
      const htmlDataPartb11b = partB12Questions.map((q) => q.partb2b);
      const htmlDataPartb11bQtype = partB12Questions.map((q) => q.partb2bqtype);
      const htmlDataPartb11bCo = partB12Questions.map((q) => q.partb2bco);
      const htmlDataPartb2a = partB21Questions.map((q) => q.partb1a);
      const htmlDataPartb2aQtype = partB21Questions.map((q) => q.partb1aqtype);
      const htmlDataPartb2aCo = partB21Questions.map((q) => q.partb1aco);
      const htmlDataPartb2b = partB21Questions.map((q) => q.partb1b);
      const htmlDataPartb2bQtype = partB21Questions.map((q) => q.partb1bqtype);
      const htmlDataPartb2bCo = partB21Questions.map((q) => q.partb1bco);
      const htmlDataPartc1a = partC1Questions.map((q) => q.partc1a);
      const htmlDataPartc1aQtype = partC1Questions.map((q) => q.partc1aqtype);
      const htmlDataPartc1aCo = partC1Questions.map((q) => q.partc1aco);
      const htmlDataPartc1b = partC1Questions.map((q) => q.partc1b);
      const htmlDataPartc1bQtype = partC1Questions.map((q) => q.partc1bqtype);
      const htmlDataPartc1bCo = partC1Questions.map((q) => q.partc1bco);
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
                ${htmlDataPartb1a
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>a)${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb1aQtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb1aCo[index]})</strong>
                    </div>
                  </div>
                  `
                  )
                  .join("")}

                  <div style="text-align: center;width:100%">
                  <strong>(OR)</strong>
                </div>
                  ${htmlDataPartb1b
                    .map(
                      (question, index) => `
                    <div style="display: flex; justify-content: space-between">
                      <p>
                        <strong> b)${question}</strong>
                      </p>
                      <div class="metadata">
                        <strong>12M</strong>
                        <strong style="margin-left: 10px">${htmlDataPartb1bQtype[index]}</strong>
                        <strong style="margin-left: 10px">(${htmlDataPartb1bCo[index]})</strong>
                      </div>
                    </div>
                    `
                    )
                    .join("")}
                  ${htmlDataPartb11a
                    .map(
                      (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>a)${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb11aQtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb11aCo[index]})</strong>
                    </div>
                  </div>
                `
                    )
                    .join("")}

                    <div style="text-align: center; width:100%">
                      <strong>(OR)</strong>
                    </div>
                    ${htmlDataPartb11b
                      .map(
                        (question, index) => `
                      <div style="display: flex; justify-content: space-between">
                        <p>
                          <strong> b)${question}</strong>
                        </p>
                        <div class="metadata">
                          <strong>12M</strong>
                          <strong style="margin-left: 10px">${htmlDataPartb11bQtype[index]}</strong>
                          <strong style="margin-left: 10px">(${htmlDataPartb11bCo[index]})</strong>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                ${htmlDataPartb2a
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>a)${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>12M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartb2aQtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartb2aCo[index]})</strong>
                    </div>
                  </div>
                `
                  )
                  .join("")}

                  <div style="text-align: center;width:100%">
                  <strong>(OR)</strong>
                </div>
                  ${htmlDataPartb2b
                    .map(
                      (question, index) => `
                    <div style="display: flex; justify-content: space-between">
                      <p>
                        <strong> b)${question}</strong>
                      </p>
                      <div class="metadata">
                        <strong>12M</strong>
                        <strong style="margin-left: 10px">${htmlDataPartb2bQtype[index]}</strong>
                        <strong style="margin-left: 10px">(${htmlDataPartb2bCo[index]})</strong>
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
                ${htmlDataPartc1a
                  .map(
                    (question, index) => `
                  <div style="display: flex; justify-content: space-between">
                    <li>
                      <strong>${question}</strong>
                    </li>
                    <div class="metadata">
                      <strong>16M</strong>
                      <strong style="margin-left: 10px">${htmlDataPartc1aQtype[index]}</strong>
                      <strong style="margin-left: 10px">(${htmlDataPartc1aCo[index]})</strong>
                    </div>
                  </div>
                  `
                  )
                  .join("")}
                  
                  <div style="text-align: center;width :100%">
                  <strong>(OR)</strong>
                </div>  
                  ${htmlDataPartc1b
                    .map(
                      (question, index) => `
                    <div style="display: flex; justify-content: space-between">
                      <p>
                        <strong> b)${question}</strong>
                      </p>
                      <div class="metadata">
                        <strong>16M</strong>
                        <strong style="margin-left: 10px">${htmlDataPartc1bQtype[index]}</strong>
                        <strong style="margin-left: 10px">(${htmlDataPartc1bCo[index]})</strong>
                      </div>
                    </div>
                    `
                    )
                    .join("")}
            </ol>
            <div>
            <div style="display:flex;justify-content:space-between;position: absolute; bottom: 40px; width: 100%;margin:20px;padding:20px">
                <strong>Course in Charge</strong>
                <strong>Course Coordinator</strong>
                <strong>Module Coordinator</strong>
                <strong>HOD/AI&DS</strong>
                </br>
            </div>
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
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Error generating PDF");
  }
});

export default router;
