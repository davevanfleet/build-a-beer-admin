/*
  Warnings:

  - Changed the type of `fermentation` on the `beer_styles` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `fermentation` on the `yeasts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "FermentationType" AS ENUM ('top', 'bottom', 'any');

-- AlterTable
ALTER TABLE "beer_styles" RENAME COLUMN "fermentation" to "fermentation_bak";
ALTER TABLE "beer_styles" ADD COLUMN "fermentation" "FermentationType";
UPDATE "beer_styles" SET "fermentation" = CASE
  WHEN "fermentation_bak" = 1 THEN 'top'::"FermentationType"
  WHEN "fermentation_bak" = 2 THEN 'bottom'::"FermentationType"
  WHEN "fermentation_bak" = 3 THEN 'any'::"FermentationType"
  END
WHERE "fermentation_bak" IS NOT NULL;

ALTER TABLE "beer_styles"
ALTER COLUMN "fermentation" SET NOT NULL;

-- AlterTable
ALTER TABLE "yeasts" RENAME COLUMN "fermentation" to "fermentation_bak";
ALTER TABLE "yeasts" ADD COLUMN "fermentation" "FermentationType";
UPDATE "yeasts" SET "fermentation" = CASE
  WHEN "fermentation_bak" = 1 THEN 'top'::"FermentationType"
  WHEN "fermentation_bak" = 2 THEN 'bottom'::"FermentationType"
  WHEN "fermentation_bak" = 3 THEN 'any'::"FermentationType"
  END
WHERE "fermentation_bak" IS NOT NULL;

ALTER TABLE "yeasts"
ALTER COLUMN "fermentation" SET NOT NULL;
