/*
  Warnings:

  - You are about to drop the column `fermentation_bak` on the `beer_styles` table. All the data in the column will be lost.
  - You are about to drop the column `fermentation_bak` on the `yeasts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "beer_styles" DROP COLUMN "fermentation_bak";

-- AlterTable
ALTER TABLE "yeasts" DROP COLUMN "fermentation_bak";
