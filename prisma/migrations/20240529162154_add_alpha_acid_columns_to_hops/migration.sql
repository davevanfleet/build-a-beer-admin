/*
  Warnings:

  - Added the required column `maximumTypicalAlphaAcid` to the `hops` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimumTypicalAlphaAcid` to the `hops` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hops" ADD COLUMN     "maximumTypicalAlphaAcid" INTEGER NOT NULL,
ADD COLUMN     "minimumTypicalAlphaAcid" INTEGER NOT NULL;
