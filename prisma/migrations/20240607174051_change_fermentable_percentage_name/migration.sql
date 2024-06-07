/*
  Warnings:

  - You are about to drop the column `fermentable_percentage` on the `malt_extracts` table. All the data in the column will be lost.
  - You are about to drop the column `fermentable_percentage` on the `other_fermentables` table. All the data in the column will be lost.
  - Added the required column `fermentability_percentage` to the `malt_extracts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fermentability_percentage` to the `other_fermentables` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "malt_extracts" DROP COLUMN "fermentable_percentage",
ADD COLUMN     "fermentability_percentage" REAL NOT NULL;

-- AlterTable
ALTER TABLE "other_fermentables" DROP COLUMN "fermentable_percentage",
ADD COLUMN     "fermentability_percentage" REAL NOT NULL;
