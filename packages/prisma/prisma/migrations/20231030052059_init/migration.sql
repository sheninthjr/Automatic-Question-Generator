/*
  Warnings:

  - Added the required column `qtype` to the `Unit1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtype` to the `Unit2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtype` to the `Unit3` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtype` to the `Unit4` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtype` to the `Unit5` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "QType" AS ENUM ('Understand', 'Analyze');

-- AlterTable
ALTER TABLE "Unit1" ADD COLUMN     "qtype" "QType" NOT NULL;

-- AlterTable
ALTER TABLE "Unit2" ADD COLUMN     "qtype" "QType" NOT NULL;

-- AlterTable
ALTER TABLE "Unit3" ADD COLUMN     "qtype" "QType" NOT NULL;

-- AlterTable
ALTER TABLE "Unit4" ADD COLUMN     "qtype" "QType" NOT NULL;

-- AlterTable
ALTER TABLE "Unit5" ADD COLUMN     "qtype" "QType" NOT NULL;
