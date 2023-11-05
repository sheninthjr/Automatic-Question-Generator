-- CreateEnum
CREATE TYPE "QType" AS ENUM ('Remember', 'Understand', 'Analyze', 'Apply', 'Create');

-- CreateEnum
CREATE TYPE "CO" AS ENUM ('CO1', 'CO2', 'CO3', 'CO4', 'CO5');

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
    "parta1qtype" "QType" NOT NULL,
    "parta1co" "CO" NOT NULL,
    "parta2" TEXT NOT NULL,
    "parta2qtype" "QType" NOT NULL,
    "parta2co" "CO" NOT NULL,
    "partb1a" TEXT NOT NULL,
    "partb1aqtype" "QType" NOT NULL,
    "partb1aco" "CO" NOT NULL,
    "partb1b" TEXT NOT NULL,
    "partb1bqtype" "QType" NOT NULL,
    "partb1bco" "CO" NOT NULL,
    "partb2a" TEXT NOT NULL,
    "partb2aqtype" "QType" NOT NULL,
    "partb2aco" "CO" NOT NULL,
    "partb2b" TEXT NOT NULL,
    "partb2bqtype" "QType" NOT NULL,
    "partb2bco" "CO" NOT NULL,
    "partc1a" TEXT NOT NULL,
    "partc1aqtype" "QType" NOT NULL,
    "partc1aco" "CO" NOT NULL,
    "partc1b" TEXT NOT NULL,
    "partc1bqtype" "QType" NOT NULL,
    "partc1bco" "CO" NOT NULL,
    "partc2a" TEXT NOT NULL,
    "partc2aqtype" "QType" NOT NULL,
    "partc2aco" "CO" NOT NULL,
    "partc2b" TEXT NOT NULL,
    "partc2bqtype" "QType" NOT NULL,
    "partc2bco" "CO" NOT NULL,

    CONSTRAINT "Unit1_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit2" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta1qtype" "QType" NOT NULL,
    "parta1co" "CO" NOT NULL,
    "parta2" TEXT NOT NULL,
    "parta2qtype" "QType" NOT NULL,
    "parta2co" "CO" NOT NULL,
    "partb1a" TEXT NOT NULL,
    "partb1aqtype" "QType" NOT NULL,
    "partb1aco" "CO" NOT NULL,
    "partb1b" TEXT NOT NULL,
    "partb1bqtype" "QType" NOT NULL,
    "partb1bco" "CO" NOT NULL,
    "partb2a" TEXT NOT NULL,
    "partb2aqtype" "QType" NOT NULL,
    "partb2aco" "CO" NOT NULL,
    "partb2b" TEXT NOT NULL,
    "partb2bqtype" "QType" NOT NULL,
    "partb2bco" "CO" NOT NULL,
    "partc1a" TEXT NOT NULL,
    "partc1aqtype" "QType" NOT NULL,
    "partc1aco" "CO" NOT NULL,
    "partc1b" TEXT NOT NULL,
    "partc1bqtype" "QType" NOT NULL,
    "partc1bco" "CO" NOT NULL,
    "partc2a" TEXT NOT NULL,
    "partc2aqtype" "QType" NOT NULL,
    "partc2aco" "CO" NOT NULL,
    "partc2b" TEXT NOT NULL,
    "partc2bqtype" "QType" NOT NULL,
    "partc2bco" "CO" NOT NULL,

    CONSTRAINT "Unit2_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit3" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta1qtype" "QType" NOT NULL,
    "parta1co" "CO" NOT NULL,
    "parta2" TEXT NOT NULL,
    "parta2qtype" "QType" NOT NULL,
    "parta2co" "CO" NOT NULL,
    "partb1a" TEXT NOT NULL,
    "partb1aqtype" "QType" NOT NULL,
    "partb1aco" "CO" NOT NULL,
    "partb1b" TEXT NOT NULL,
    "partb1bqtype" "QType" NOT NULL,
    "partb1bco" "CO" NOT NULL,
    "partb2a" TEXT NOT NULL,
    "partb2aqtype" "QType" NOT NULL,
    "partb2aco" "CO" NOT NULL,
    "partb2b" TEXT NOT NULL,
    "partb2bqtype" "QType" NOT NULL,
    "partb2bco" "CO" NOT NULL,
    "partc1a" TEXT NOT NULL,
    "partc1aqtype" "QType" NOT NULL,
    "partc1aco" "CO" NOT NULL,
    "partc1b" TEXT NOT NULL,
    "partc1bqtype" "QType" NOT NULL,
    "partc1bco" "CO" NOT NULL,
    "partc2a" TEXT NOT NULL,
    "partc2aqtype" "QType" NOT NULL,
    "partc2aco" "CO" NOT NULL,
    "partc2b" TEXT NOT NULL,
    "partc2bqtype" "QType" NOT NULL,
    "partc2bco" "CO" NOT NULL,

    CONSTRAINT "Unit3_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit4" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta1qtype" "QType" NOT NULL,
    "parta1co" "CO" NOT NULL,
    "parta2" TEXT NOT NULL,
    "parta2qtype" "QType" NOT NULL,
    "parta2co" "CO" NOT NULL,
    "partb1a" TEXT NOT NULL,
    "partb1aqtype" "QType" NOT NULL,
    "partb1aco" "CO" NOT NULL,
    "partb1b" TEXT NOT NULL,
    "partb1bqtype" "QType" NOT NULL,
    "partb1bco" "CO" NOT NULL,
    "partb2a" TEXT NOT NULL,
    "partb2aqtype" "QType" NOT NULL,
    "partb2aco" "CO" NOT NULL,
    "partb2b" TEXT NOT NULL,
    "partb2bqtype" "QType" NOT NULL,
    "partb2bco" "CO" NOT NULL,
    "partc1a" TEXT NOT NULL,
    "partc1aqtype" "QType" NOT NULL,
    "partc1aco" "CO" NOT NULL,
    "partc1b" TEXT NOT NULL,
    "partc1bqtype" "QType" NOT NULL,
    "partc1bco" "CO" NOT NULL,
    "partc2a" TEXT NOT NULL,
    "partc2aqtype" "QType" NOT NULL,
    "partc2aco" "CO" NOT NULL,
    "partc2b" TEXT NOT NULL,
    "partc2bqtype" "QType" NOT NULL,
    "partc2bco" "CO" NOT NULL,

    CONSTRAINT "Unit4_pkey" PRIMARY KEY ("unitId")
);

-- CreateTable
CREATE TABLE "Unit5" (
    "unitId" SERIAL NOT NULL,
    "parta1" TEXT NOT NULL,
    "parta1qtype" "QType" NOT NULL,
    "parta1co" "CO" NOT NULL,
    "parta2" TEXT NOT NULL,
    "parta2qtype" "QType" NOT NULL,
    "parta2co" "CO" NOT NULL,
    "partb1a" TEXT NOT NULL,
    "partb1aqtype" "QType" NOT NULL,
    "partb1aco" "CO" NOT NULL,
    "partb1b" TEXT NOT NULL,
    "partb1bqtype" "QType" NOT NULL,
    "partb1bco" "CO" NOT NULL,
    "partb2a" TEXT NOT NULL,
    "partb2aqtype" "QType" NOT NULL,
    "partb2aco" "CO" NOT NULL,
    "partb2b" TEXT NOT NULL,
    "partb2bqtype" "QType" NOT NULL,
    "partb2bco" "CO" NOT NULL,
    "partc1a" TEXT NOT NULL,
    "partc1aqtype" "QType" NOT NULL,
    "partc1aco" "CO" NOT NULL,
    "partc1b" TEXT NOT NULL,
    "partc1bqtype" "QType" NOT NULL,
    "partc1bco" "CO" NOT NULL,
    "partc2a" TEXT NOT NULL,
    "partc2aqtype" "QType" NOT NULL,
    "partc2aco" "CO" NOT NULL,
    "partc2b" TEXT NOT NULL,
    "partc2bqtype" "QType" NOT NULL,
    "partc2bco" "CO" NOT NULL,

    CONSTRAINT "Unit5_pkey" PRIMARY KEY ("unitId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_parta1_key" ON "Unit1"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_parta2_key" ON "Unit1"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb1a_key" ON "Unit1"("partb1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb1b_key" ON "Unit1"("partb1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb2a_key" ON "Unit1"("partb2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partb2b_key" ON "Unit1"("partb2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc1a_key" ON "Unit1"("partc1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc1b_key" ON "Unit1"("partc1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc2a_key" ON "Unit1"("partc2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit1_partc2b_key" ON "Unit1"("partc2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_parta1_key" ON "Unit2"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_parta2_key" ON "Unit2"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb1a_key" ON "Unit2"("partb1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb1b_key" ON "Unit2"("partb1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb2a_key" ON "Unit2"("partb2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partb2b_key" ON "Unit2"("partb2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc1a_key" ON "Unit2"("partc1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc1b_key" ON "Unit2"("partc1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc2a_key" ON "Unit2"("partc2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit2_partc2b_key" ON "Unit2"("partc2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_parta1_key" ON "Unit3"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_parta2_key" ON "Unit3"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb1a_key" ON "Unit3"("partb1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb1b_key" ON "Unit3"("partb1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb2a_key" ON "Unit3"("partb2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partb2b_key" ON "Unit3"("partb2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc1a_key" ON "Unit3"("partc1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc1b_key" ON "Unit3"("partc1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc2a_key" ON "Unit3"("partc2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit3_partc2b_key" ON "Unit3"("partc2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_parta1_key" ON "Unit4"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_parta2_key" ON "Unit4"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb1a_key" ON "Unit4"("partb1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb1b_key" ON "Unit4"("partb1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb2a_key" ON "Unit4"("partb2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partb2b_key" ON "Unit4"("partb2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc1a_key" ON "Unit4"("partc1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc1b_key" ON "Unit4"("partc1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc2a_key" ON "Unit4"("partc2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit4_partc2b_key" ON "Unit4"("partc2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_parta1_key" ON "Unit5"("parta1");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_parta2_key" ON "Unit5"("parta2");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb1a_key" ON "Unit5"("partb1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb1b_key" ON "Unit5"("partb1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb2a_key" ON "Unit5"("partb2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partb2b_key" ON "Unit5"("partb2b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc1a_key" ON "Unit5"("partc1a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc1b_key" ON "Unit5"("partc1b");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc2a_key" ON "Unit5"("partc2a");

-- CreateIndex
CREATE UNIQUE INDEX "Unit5_partc2b_key" ON "Unit5"("partc2b");
