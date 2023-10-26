-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unit1" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta2" TEXT NOT NULL,
    "partb1" TEXT NOT NULL,
    "partb2" TEXT NOT NULL,
    "partc1" TEXT NOT NULL,
    "partc2" TEXT NOT NULL,

    CONSTRAINT "Unit1_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit2" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta2" TEXT NOT NULL,
    "partb1" TEXT NOT NULL,
    "partb2" TEXT NOT NULL,
    "partc1" TEXT NOT NULL,
    "partc2" TEXT NOT NULL,

    CONSTRAINT "Unit2_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit3" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta2" TEXT NOT NULL,
    "partb1" TEXT NOT NULL,
    "partb2" TEXT NOT NULL,
    "partc1" TEXT NOT NULL,
    "partc2" TEXT NOT NULL,

    CONSTRAINT "Unit3_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit4" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta2" TEXT NOT NULL,
    "partb1" TEXT NOT NULL,
    "partb2" TEXT NOT NULL,
    "partc1" TEXT NOT NULL,
    "partc2" TEXT NOT NULL,

    CONSTRAINT "Unit4_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit5" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta2" TEXT NOT NULL,
    "partb1" TEXT NOT NULL,
    "partb2" TEXT NOT NULL,
    "partc1" TEXT NOT NULL,
    "partc2" TEXT NOT NULL,

    CONSTRAINT "Unit5_pkey" PRIMARY KEY ("unitId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_parta1_key" ON "Unit1"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_parta2_key" ON "Unit1"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb1_key" ON "Unit1"("partb1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb2_key" ON "Unit1"("partb2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc1_key" ON "Unit1"("partc1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc2_key" ON "Unit1"("partc2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_parta1_key" ON "Unit2"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_parta2_key" ON "Unit2"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb1_key" ON "Unit2"("partb1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb2_key" ON "Unit2"("partb2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc1_key" ON "Unit2"("partc1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc2_key" ON "Unit2"("partc2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_parta1_key" ON "Unit3"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_parta2_key" ON "Unit3"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb1_key" ON "Unit3"("partb1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb2_key" ON "Unit3"("partb2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc1_key" ON "Unit3"("partc1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc2_key" ON "Unit3"("partc2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_parta1_key" ON "Unit4"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_parta2_key" ON "Unit4"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb1_key" ON "Unit4"("partb1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb2_key" ON "Unit4"("partb2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc1_key" ON "Unit4"("partc1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc2_key" ON "Unit4"("partc2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_parta1_key" ON "Unit5"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_parta2_key" ON "Unit5"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb1_key" ON "Unit5"("partb1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb2_key" ON "Unit5"("partb2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc1_key" ON "Unit5"("partc1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc2_key" ON "Unit5"("partc2");
